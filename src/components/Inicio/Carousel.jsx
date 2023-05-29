import React from "react";
import BtnOutlined from "../Buttons/BtnOutlined";

const Carousel = ({ title, description, btnText, img, path }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className=" h-full w-full bg-center bg-cover bg-no-repeat text-[#FFFFFF] 
      flex justify-between transition-all
      relative before:z-10 before:absolute before:w-full before:h-full before:bg-[#0000005C]
      "
    >
      <div
        className="z-20 relative pt-40 flex flex-col justify-between w-full 
        max-[1200px]:pt-28
        max-[970px]:items-center
        max-[620px]:justify-center
        max-[620px]:pt-0
      
      
      "
      >
        <div
          className="pl-24 w-6/12 flex flex-col gap-8 [&>*:last-child]:self-center
        max-[1200px]:gap-12
        max-[970px]:pl-0
        max-[620px]:w-full
        max-[620px]:px-12
        "
        >
          <h3 className="font-fahkwang font-bold text-2xl">{title}</h3>
          <p
            className="font-nunito font-normal text-lg h-[56px]
          max-[1200px]:h-24
          max-[620px]:h-32"
          >
            {description}
          </p>
          <BtnOutlined btnText={btnText} path={path}></BtnOutlined>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
