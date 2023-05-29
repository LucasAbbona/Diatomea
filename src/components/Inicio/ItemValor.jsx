import React from "react";

const ItemValor = ({ img, text }) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 text-lg
    max-[724px]:w-[15%] max-[624px]:text-base max-[424px]:w-[25%]
     "
    >
      <img src={img} alt={text + "imagen"} className="w-full max-w-[56px]" />
      <h5 className="h-4 text-center font-fahkwang">{text}</h5>
    </div>
  );
};

export default ItemValor;
