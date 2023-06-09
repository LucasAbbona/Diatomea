import React from "react";
import ItemProd from "./ItemProd";
const ColumnProdGallery = ({ arr, idRow, idTable }) => {
  const renderItem = arr.map((item, index) => (
    <ItemProd
      nombre={item.nombre}
      img={item.img}
      key={"item" + index}
      idRow={idRow}
    ></ItemProd>
  ));

  return (
    <div
      className={
        "  flex flex-col w-full h-auto gap-3 max-[620px]:items-center " +
        (idTable % 2 !== 0 && idRow == 1 ? " order-first " : "")
      }
    >
      {renderItem}
    </div>
  );
};

export default ColumnProdGallery;
