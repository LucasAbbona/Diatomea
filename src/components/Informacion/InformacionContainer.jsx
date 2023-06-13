import React, { useState, useEffect } from "react";
import TabInfo from "./TabInfo";

const InformacionContainer = ({ obj, routInfo }) => {
  // Obtengo el nombre del array para acceder a el
  const nameObj = Object.getOwnPropertyNames(obj)[0];
  //   Accedo al array de objetos
  const arrObj = obj[nameObj][0];
  console.log(arrObj.tabButtons[0].id);
  //   Estado para manejar el renderizado de la informacion de la tab y el boton seleccionado
  //   Por default inicia en anillos
  const [tabBtnSelected, setTabBtnSelected] = useState(arrObj.tabButtons[0].id);
  //   Buscador de array de objetos segun la opcion seleccionada
  const findInfoFx = arrObj.tabInfo.find((e) => e.id == tabBtnSelected);
  //   Estado que define el array segun lo encontrado
  const [tabInfoFind, setTabInfoFin] = useState(findInfoFx);

  //   Use effect que se ejecutara cada vez que cambie el estado del boton seleccionado
  useEffect(() => {
    setTabInfoFin(findInfoFx);
  }, [tabBtnSelected]);
  
console.log("tabBtnSelected",tabBtnSelected)
  return (
    <article className="w-full flex flex-col gap-8 items-center">
      <h3 className=" font-fahkwang font-bold text-2xl text-center border-b-2 border-secondary-darkBrown w-fit px-3 pb-2">
        {arrObj.title}
      </h3>
      <p className=" font-nunito italic font-normal text-base text-center w-[760px] max-[920px]:w-full">
        {arrObj.italicText}
      </p>
      {arrObj.innerText}
      <TabInfo
        tabButtons={arrObj.tabButtons}
        tabInfo={tabInfoFind}
        tabBtnSelected={tabBtnSelected}
        setterTanBtnSelected={setTabBtnSelected}
        routInfo={routInfo}
      ></TabInfo>
    </article>
  );
};

export default InformacionContainer;
