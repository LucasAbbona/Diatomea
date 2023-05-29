import React from "react";
import { Link } from "react-router-dom";

const BtnOutlined = ({ path, btnText, variation }) => {
  return (
    <Link to={path}>
      <button
        className={
          " text-base font-fahkwang flex justify-center items-center px-3 py-2 min-w-[140px] rounded cursor-pointer transition-all  hover:transition-all font-medium " +
          (variation == "brown"
            ? " text-primary-darkGrey border-2 border-secondary-darkBrown hover:shadow-[0px_4px_8px_rgba(0,0,0,0.25)]"
            : "text-[#FFFFFF] border-2 border-[#FFFFFF] hover:shadow-[0px_4px_8px_rgba(226,195,170,0.5)]")
        }
      >
        {btnText}
      </button>
    </Link>
  );
};

export default BtnOutlined;
