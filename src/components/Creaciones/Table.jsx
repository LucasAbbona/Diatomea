import React from "react";
import ColumnProdGallery from "./ColumnProdGallery";
const Table = ({ arr, idTable }) => {
  // Divido mi array y se lo paso al componente row
  const renderColumn = arr.map((item, index) => (
    <ColumnProdGallery
      arr={item}
      key={"rowGallery" + index}
      idRow={index}
      idTable={idTable}
    ></ColumnProdGallery>
  ));
  return (
    <div className={" w-full flex justify-center gap-3 max-[620px]:flex-col max-[620px]:items-center "}>
      {renderColumn}
    </div>
  );
};

export default Table;
