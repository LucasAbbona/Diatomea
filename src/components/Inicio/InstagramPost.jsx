import React from "react";
import { Link } from "react-router-dom";
const InstagramPost = ({ img, link }) => {
  return (
    <Link to={link} className=" aspect-square max-w-[300px] 
    max-[675px]:flex-[0_0_180px]
    max-[500px]:flex-[0_0_125px]">
      <img src={img} alt="" className="w-full rounded" />
    </Link>
  );
};

export default InstagramPost;
