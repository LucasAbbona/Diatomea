import React from "react";
import BtnNavbar from "./BtnNavbar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SearchBar from "./SearchBar";
const NavBar = () => {
  //Coleccion de botones NavBar
  const btnNavBarCollection = [
    {
      //Inicio
      text: "Inicio",
    },
    {
      //Sobre Diatomea
      text: "Sobre Diatomea",
    },
    {
      //Creaciones
      text: "Creaciones",
      icon: <MdOutlineKeyboardArrowDown />,
    },
    {
      //Servicios
      text: "Servicios",
      icon: <MdOutlineKeyboardArrowDown />,
    },
    {
      //Información
      text: "Información",
      icon: <MdOutlineKeyboardArrowDown />,
    },
    {
      //FAQ
      text: "FAQ",
    },
  ];
  //Render botones navBar
  const renderBtnNavBar = btnNavBarCollection.map((btn) => (
    <BtnNavbar text={btn.text} icon={btn.icon} key={btn.text}></BtnNavbar>
  ));

  return (
    <nav className="bg-bg-navBar py-6 pb-6 	pl-40 pr-40 flex justify-center items-center">
      <ul className="flex justify-between w-full">
        {renderBtnNavBar}
        <SearchBar></SearchBar>
      </ul>
    </nav>
  );
};

export default NavBar;
