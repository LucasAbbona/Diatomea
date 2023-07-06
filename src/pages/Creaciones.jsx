import React, { useState, useEffect } from "react";
import Productos from "../assets/Productos/Productos.jsx";
import Table from "../components/Creaciones/Table";
import { TbFilter } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import DropdownFilter from "../components/Creaciones/DropdownFilter";
const Creaciones = () => {
  // Estado que guarda el array a renderizar
  const [renderItems, setRenderItems] = useState(Productos.productos);
  // Estado que guarda los filtros seleccionados
  const [filterArr, setFilterArr] = useState({
    tipos_de_joya: [],
    tipos_de_metal: [],
  });
  // Fx para dividir mi array de objetos del json
  const sliceIntoChunks = (arr, chunkSize) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunked = arr.slice(i, i + chunkSize);
      newArr.push(chunked);
    }
    return newArr;
  };

  // Divido en columnas
  const sliceColumn = sliceIntoChunks(renderItems, 3);
  // Divido la tabla que contendrá 3 columnas
  const table = sliceIntoChunks(sliceColumn, 3);
  // Renderizo la tabla
  const renderTable = table.map((item, index) => (
    <Table arr={item} key={"table" + index} idTable={index}></Table>
  ));

  // Filtro menu
  const [filterMenu, setFilterMenu] = useState(false);

  // Dropdowns menu
  const renderFilters = Productos.categorias.map((item, index) => (
    <DropdownFilter
      arr={item}
      key={index}
      setterFilterArr={setFilterArr}
      filterArr={filterArr}
    ></DropdownFilter>
  ));

  function someFx(nameArr, prod) {
    if (!filterArr[nameArr].length) {
      return true;
    } else {
      return filterArr[nameArr].some((e) => prod[nameArr].some((i) => e === i));
    }
  }
  // Fx para filtrar y crear nuevo array
  const filterProductos = () => {
    return Productos.productos.filter((prod) => {
      if (someFx("tipos_de_metal", prod) && someFx("tipos_de_joya", prod)) {
        return prod;
      }
    });
  };

  // Fx para aplicar filtro
  const applyFilterFx = () => {
    setRenderItems(filterProductos());
    setFilterMenu(!filterMenu);
  };

  const cleanFilterFx = () => {
    setRenderItems(Productos.productos);
    setFilterMenu(!filterMenu);
    setFilterArr(({
      tipos_de_joya: [],
      tipos_de_metal: [],
    }))
  };

  return (
    <section
      className="min-h-[100vh] flex py-16 flex-col gap-12 w-full max-[1350px]:px-12
    max-[424px]:px-4 items-center "
    >
      <div className="flex flex-col gap-12 w-full max-w-[980px] ">
        <article
          className={
            (filterMenu ? " flex " : " hidden ") +
            " fixed  top-0 left-0 bg-[#FFFFFF]" +
            " h-screen z-50 flex-col w-[300px]"
          }
        >
          <div className="flex justify-between items-center bg-secondary-lighterBrown p-4 ">
            <h5 className="flex gap-1 items-center font-fahkwang font-bold ">
              <TbFilter /> Filtros
            </h5>
            <MdClose
              onClick={() => setFilterMenu(!filterMenu)}
              className=" cursor-pointer text-2xl "
            />
          </div>
          <div className=" p-8 flex flex-col gap-6">{renderFilters}</div>
          <div className="flex justify-between px-4 gap-4">
            <button
              onClick={() => applyFilterFx()}
              className=" w-full text-sm font-fahkwang flex gap-1 justify-center items-center px-3 py-2 border-2 rounded cursor-pointer border-none transition-all font-semibold text-[#FFFFFF] bg-primary-darkGrey shadow-[-3px_3px_7px_rgba(0,0,0,0.25)]  "
            >
              Aplicar
            </button>
            <button
              onClick={() => cleanFilterFx()}
              className=" w-full text-sm font-fahkwang flex gap-1 justify-center items-center px-3 py-2 border-2 rounded cursor-pointer border-none transition-all font-semibold bg-[#FFFFFF] text-primary-darkGrey shadow-[-3px_3px_7px_rgba(0,0,0,0.25)]  "
            >
              Limpiar
            </button>
          </div>
        </article>
        <button
          onClick={() => setFilterMenu(!filterMenu)}
          className=" w-min text-base font-fahkwang flex gap-1 justify-center items-center px-3 py-2 border-2 rounded cursor-pointer border-none transition-all font-semibold bg-[#FFFFFF] text-primary-darkGrey shadow-[-3px_3px_7px_rgba(0,0,0,0.25)]  "
        >
          Filtros <TbFilter />
        </button>
        <div className=" flex flex-col flex-wrap max-w-[980px] w-full gap-2 items-center justify-center self-center ">
          {renderTable}
        </div>
      </div>
    </section>
  );
};

export default Creaciones;
