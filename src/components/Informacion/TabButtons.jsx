import React, { useEffect } from "react";

const TabButtons = ({
  textButton,
  setterTanBtnSelected,
  tabBtnSelected,
  id,
  routInfo,
  index,
}) => {
  console.log(id, tabBtnSelected, routInfo);
  // Funcion on click donde cambia el estado segun el id del boton seleccionado
  const onClickFX = () => {
    setterTanBtnSelected(id);
  };
  // Use effect que analiza si cambió la ruta por lo tanto vuelve a setear el id
  useEffect(() => {
    if (index == 0) setterTanBtnSelected(id);
  }, [routInfo]);
  return (
    <div>
      <button
        className={
          " flex justify-center items-center rounded-t px-12 w-72 py-2 font-fahkwang font-bold cursor-pointer border-x-2 border-t-2 border-secondary-brown " +
          (tabBtnSelected == id ? " bg-secondary-lightBrown " : "")
        }
        onClick={() => onClickFX()}
      >
        {textButton}
      </button>
    </div>
  );
};

export default TabButtons;
