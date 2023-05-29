import React from "react";
import BtnSolid from "../Buttons/BtnSolid";

const CardLink = ({ title, img, btnText }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className=" h-full w-full bg-center bg-cover bg-no-repeat text-[#FFFFFF]
      flex flex-col items-center justify-between p-12"
    >
      <h4 className="w-full font-fahkwang text-3xl font-bold">{title}</h4>
      <BtnSolid btnText={btnText} variation={"white"} path={"/informacion"}></BtnSolid>
    </div>
  );
};

export default CardLink;
