import React from "react";
import { Link } from "react-router-dom";

const BtnSolid = ({ path, btnText, variation, disabled }) => {
  return (
    <Link to={path}>
      <button
        className={
          " text-base font-fahkwang flex justify-center items-center px-3 py-2 min-w-[140px] border-2 rounded cursor-pointer border-none transition-all font-medium " +
          // Modificacion de estado: primero me fijo si es disabled,
          // luego agrego el hover que tendran ambas variaciones
          // y despues pregunto que variacion es
          (disabled
            ? " bg-primary-lightGrey text-[#FFFFFF]"
            : " shadow-[-3px_3px_15px_rgba(0,0,0,0.25)]  hover:bg-secondary-brown hover:text-primary-darkGrey hover:transition-all " +
              (variation == "white"
                ? "bg-[#FFFFFF] text-primary-darkGrey"
                : "bg-primary-darkGrey text-[#FFFFFF]"))
        }
      >
        {btnText}
      </button>
    </Link>
  );
};

export default BtnSolid;
