import React, { useState } from "react";
import "./checkbox.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropdownFilter = ({ arr, filterArr, setterFilterArr }) => {
  const nameArr = Object.getOwnPropertyNames(arr)[0].replaceAll("_", " ");
  const type = Object.getOwnPropertyNames(arr)[0];
  const [dropdownFilter, setDropdownFilter] = useState(false);
  
  function toSentenceCase(str) {
    return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
  }

  const onChangeFx = (index, type) => {
    // Si ya experimentalStyled, quiero sacarlo

    if (filterArr[type].find((e) => e == index)) {
      setterFilterArr({
        ...filterArr,
        [type]: filterArr[type].filter((e) => e !== index),
      });
    } else {
      setterFilterArr({ ...filterArr, [type]: [...filterArr[type], index] });
    }
  };

  const renderFilter = arr[Object.getOwnPropertyNames(arr)].map(
    (filter, index) => (
      <label
        htmlFor={filter}
        className={
          (dropdownFilter ? " flex " : " hidden ") +
          "flex gap-2 items-center font-nunito font-normal text-sm "
        }
        key={filter + index}
      >
        <input
          type="checkbox"
          name={filter}
          className="checkbox-filter"
          onChange={(e) => onChangeFx(index + 1, type)}
        />
        {toSentenceCase(filter)}
      </label>
    )
  );
  return (
    <div className="flex flex-col gap-3">
      <h4
        onClick={() => setDropdownFilter(!dropdownFilter)}
        className="cursor-pointer  font-fahkwang font-bold text-base py-2 border-b-secondary-darkBrown border-b-2 flex items-center justify-between"
      >
        {toSentenceCase(nameArr)}
        <MdKeyboardArrowDown
          className={dropdownFilter ? " rotate-180 " : " rotate-0 "}
        />
      </h4>
      {renderFilter}
    </div>
  );
};

export default DropdownFilter;
