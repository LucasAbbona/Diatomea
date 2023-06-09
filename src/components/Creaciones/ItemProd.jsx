import React from "react";
const ItemProd = ({ nombre, img, idRow }) => {
  return (
    <div
      style={{ backgroundImage: `url(productos/${img}.jpg)` }}
      className={
        " relative bg-cover bg-no-repeat bg-center flex flex-col justify-end w-full max-w-[320px] shadow-[-2px_4px_7px_rgba(0,0,0,0.25);] rounded group overflow-hidden transition-all " +
        (idRow == 1
          ? "h-[50vh] first:h-[20vh] last:h-[30vh]"
          : idRow == 2
          ? "h-[20vh] first:h-[30vh] last:h-[50vh]"
          : "h-[30vh] first:h-[50vh] last:h-[20vh]")
      }
    >
      <div className=" rounded bg-[#000000B2] w-full h-16 font-fahkwang text-[#FFFFFF] items-center text-center justify-center flex translate-y-[100%] group-hover:translate-y-0 transition-all">{nombre}</div>
    </div>
  );
};

export default ItemProd;
