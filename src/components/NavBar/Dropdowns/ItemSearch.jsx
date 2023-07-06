import React from "react";

const ItemSearch = ({ item }) => {

  return (
    <div className=" flex flex-col items-center gap-4 selected-none">
      <img
        src={item.img}
        alt=""
        className=" rounded w-40 h-40  "
      />
      <h3 className=" w-40 text-center ">
        {item.nombre}
      </h3>
    </div>
  );
};

export default ItemSearch;
