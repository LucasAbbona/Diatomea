import React, { useState, useRef, useEffect } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import productos from "../../../../public/productos/productos.json";
import ItemSearch from "./ItemSearch";
import ItemFilter from "./ItemFilter";
import { useDraggable } from "react-use-draggable-scroll";
const SearchBar = () => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  // Estado que guarda los filtros seleccionados
  const [filterArr, setFilterArr] = useState([]);
  // Estado que guarda el array a renderizar
  const [renderSearchItems, setRenderItems] = useState([]);

  const [searchedItem, setSearchedItem] = useState([]);
  const [value, setValue] = useState("");
  // Renderizo los item
  const renderItems = renderSearchItems.map((item, index) => (
    <ItemSearch item={item} key={index} id={index}></ItemSearch>
  ));

  // Renderizo los filtros
  const renderFilters = productos.categorias[0].tipos_de_joya.map(
    (item, index) => (
      <ItemFilter
        key={index}
        index={index}
        filterArr={filterArr}
        setterFilterArr={setFilterArr}
        item={item}
        setterValue={setValue}
      ></ItemFilter>
    )
  );

  useEffect(() => {
    function someFx(nameArr, prod) {
      if (!filterArr.length) {
        return;
      } else {
        return filterArr.some((e) => prod[nameArr].some((i) => e === i));
      }
    }
    const filterProductos = () => {
      return productos.productos.filter((prod) => {
        if (someFx("tipos_de_joya", prod)) {
          return prod;
        }
      });
    };
    setRenderItems(filterProductos());
  }, [filterArr]);

  const searchFinder = (e) => {
    setValue(e.value);
    if (!e.value.length) {
      return setSearchedItem([]);
    }
    setFilterArr([]);
    setSearchedItem(
      productos.productos.filter((prod) => {
        if (
          prod.nombre
            .trim()
            .toLowerCase()
            .includes(e?.value.trim().toLowerCase())
        ) {
          return prod;
        }
      })
    );
  };

  console.log(filterArr);
  useEffect(() => {
    setRenderItems(searchedItem);
  }, [searchedItem]);
  return (
    <div className=" flex flex-col gap-12 items-center w-full p-24 bg-[#FFFFFF]">
      <div className=" flex justify-between gap-4  w-full max-[1020px]:flex-col">
        <label
          htmlFor="search"
          className="font-nunito flex gap-3 items-center border-b-2 w-1/2 px-2 justify-between max-[1020px]:w-full h-14"
        >
          <input
            type="text"
            placeholder="Busca aquí..."
            id="search"
            value={value}
            className=" w-full focus:outline-0 h-full flex "
            onChange={(e) => searchFinder(e.target)}
          />
          <RxMagnifyingGlass size={"24px"} />
        </label>
        <div className="border-l-2 border-primary-lightGrey w-1/2 p-2 flex flex-col gap-4 max-[1020px]:border-l-0  max-[1020px]:w-full">
          <p className="font-nunito ">Buscar por categoría</p>
          <div className=" flex gap-2 ">{renderFilters}</div>
        </div>
      </div>
      <div className=" flex flex-col w-full gap-4">
        <p className="font-nunito font-bold">
          Resultados <span>({renderSearchItems.length})</span>
        </p>
        <div
          className=" flex w-full overflow-x-scroll no-scrollbar gap-4"
          {...events}
          ref={ref}
        >
          {renderItems}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
