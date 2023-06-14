import React, { useEffect, useState } from "react";

const ItemFilter = ({ item, setterFilterArr, filterArr, index, setterValue }) => {
  function toSentenceCase(str) {
    return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
  }
  const [selected, setSelected] = useState(false);

  // Fx para agregar o sacar del array de fitler arr las categorias
  const applyFilterFx = (index) => {
    // Si ya experimentalStyled, quiero sacarlo
    if (filterArr.find((e) => index == e)) {
      setterFilterArr([...filterArr.filter((e) => e !== index)]);
    } else {
      setterFilterArr([...filterArr, index]);
    }
    setterValue("")
    setSelected(!selected);
  };
  useEffect(() => {
    if (!filterArr.length) {
      setSelected(false);
    }
  }, [filterArr]);
  return (
    <div
      className={
        " flex justify-center items-center px-2 font-nunito font-bold text-primary-darkGrey" +
        " border-2 border-primary-lightGrey rounded cursor-pointer select-none w-fit text-sm" +
        (selected
          ? " border-secondary-lightBrown bg-secondary-lightBrown "
          : " border-primary-lightGrey bg-none ")
      }
      onClick={() => applyFilterFx(index + 1)}
    >
      {toSentenceCase(item)}
    </div>
  );
};

export default ItemFilter;
