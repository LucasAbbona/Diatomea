import React from "react";

const CardDiseño = ({ title, img }) => {
  return (
    <div
      className="flex flex-col h-96 max-w-[300px] flex-[1_0_280px] justify-end items-center
    rounded hover:shadow-[-6px_6px_15px_rgba(0,0,0,0.25)] hover:transition-all overflow-visible"
    >
      <img src={img} alt="" className="object-center object-cover" />
      <h3 className="px-7 py-6 w-full text-center font-nunito font-normal text-lg">
        {title}
      </h3>
    </div>
  );
};

export default CardDiseño;
