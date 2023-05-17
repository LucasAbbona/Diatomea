import React from "react";
import BtnNavbar from "../Buttons/BtnNavbar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
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
    <nav className="bg-bg-navBar">
      <ul>{renderBtnNavBar}</ul>
    </nav>
  );
};

export default NavBar;
