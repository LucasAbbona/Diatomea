import BtnNavbar from "./BtnNavbar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import SearchBar from "./SearchBar";
import { useState } from "react";
import Information from './Dropdowns/Information'
import Creations from './Dropdowns/Creations'
import Services from './Dropdowns/Services'
import ResponsiceBtnNavBar from "./ResponsiceBtnNavBar";

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
  const [creations, setCreations] = useState(false)
  const [services, setServices] = useState(false)
  const [info, setInfo] = useState(false)
  const [Menu, setMenu] = useState(false)

  //Render botones navBar
  const renderBtnNavBar = btnNavBarCollection.map((btn) => (
    <BtnNavbar text={btn.text} icon={btn.icon} key={btn.text} setCreations={setCreations} setInfo={setInfo} setServices={setServices} info={info} services={services} creations={creations}></BtnNavbar>
  ));
  //Render botones responsive navBar
  const renderResponsiveBtnNavBar = btnNavBarCollection.map((btn) => (
    <ResponsiceBtnNavBar text={btn.text} icon={btn.icon} key={btn.text} setCreations={setCreations} setInfo={setInfo} setServices={setServices} info={info} services={services} creations={creations}></ResponsiceBtnNavBar>
  ));
  return (
    <>
      <nav className="bg-bg-navBar py-6 pb-6 px-20 md:px-26 lg:px-40 flex relative justify-center items-center">
        <ul className="hidden md:flex justify-between flex-col md:flex-row w-full md:gap-2 gap-8">
          {renderBtnNavBar}
          <SearchBar></SearchBar>
        </ul>
        <button className="inline md:hidden absolute z-50 left-5 text-bg-page" style={{top:'-54px'}} onClick={() => setMenu(prev => !prev)}>{Menu ? <RxCross1 size={26}/> :<AiOutlineMenu size={26}/>}</button>
        {Menu &&
          <ul className="flex md:hidden justify-between flex-col md:flex-row w-full md:gap-2 gap-8">
            {renderResponsiveBtnNavBar}
            <SearchBar></SearchBar>
          </ul>}
      </nav>
      <div className="hidden md:inline-block w-full">
        {creations && <Creations setCreations={setCreations} />}
        {services && <Services setServices={setServices} />}
        {info && <Information setInfo={setInfo} />}
      </div>
    </>
  );
};

export default NavBar;
