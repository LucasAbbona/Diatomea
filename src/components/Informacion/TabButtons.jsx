import React from "react";

const TabButtons = ({
  textButton,
  setterTanBtnSelected,
  tabBtnSelected,
  id,
}) => {
  console.log(id, tabBtnSelected)
  // Funcion on click donde cambia el estado segun el id del boton seleccionado
  const onClickFX = () => {
    setterTanBtnSelected(id);
  };
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
