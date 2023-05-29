import React from "react";
import { Link } from "react-router-dom";
const CardServicio = ({ title, img }) => {
  return (
    <Link
      to={"/servicios"}
      style={{ backgroundImage: `url(${img})` }}
      className="flex flex-col h-80 max-w-[300px] flex-[1_0_280px] justify-end items-center
  bg-center bg-cover bg-no-repeat rounded overflow-hidden"
    >
      <h3 className="bg-[#000000B2] px-7 py-6 w-full text-center font-fahkwang font-bold text-[#FFFFFF] text-lg">
        {title}
      </h3>
    </Link>
  );
};

export default CardServicio;
