import BtnNavbar from "./BtnNavbar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Information from "./Dropdowns/Information";
import Creations from "./Dropdowns/Creations";
import Services from "./Dropdowns/Services";

const NavBar = () => {
  //Coleccion de botones NavBar
  const btnNavBarCollection = [
    {
      //Inicio
      text: "Inicio",
      path: "/",
    },
    {
      //Sobre Diatomea
      text: "Sobre Diatomea",
      path: "/QuienesSomos",
    },
    {
      //Creaciones
      text: "Creaciones",
      path: "/Creaciones",
      icon: <MdOutlineKeyboardArrowDown />,
      dropdown: <Creations />,
    },
    {
      //Servicios
      text: "Servicios",
      path: "/Servicios",
      icon: <MdOutlineKeyboardArrowDown />,
      dropdown: <Services />,
    },
    {
      //Información
      text: "Información",
      icon: <MdOutlineKeyboardArrowDown />,
      dropdown: <Information />,
    },
    {
      //FAQ
      text: "FAQ",
      path: "/FAQ",
    },
  ];
  // Estado para definir el menu responsive si esta abierto o no
  const [menu, setMenu] = useState(false);

  // Estado para condicionar y definir el contenido del dropdown para desktop
  const [desktopDropdown, setDesktopDropdown] = useState(false);

  // Funcion para desktop desplegar el dropdown
  const onHoverFx = (component) => {
    setDesktopDropdown(component);
  };

  //Render botones navBar
  const renderBtnNavBar = btnNavBarCollection.map((btn, index) => (
    <BtnNavbar
      text={btn.text}
      icon={btn.icon}
      key={btn.text + index}
      path={btn.path}
      stateMenu={menu}
      setterMenu={setMenu}
      dropdown={btn.dropdown}
      onHoverFx={onHoverFx}
    ></BtnNavbar>
  ));

  return (
    <>
      <nav
        className="bg-bg-navBar py-6 pb-6 px-20 md:px-26 lg:px-40 flex relative justify-center items-center
      max-[768px]:p-0 z-40"
      >
        <button
          className="inline md:hidden absolute z-50 left-5 text-bg-page"
          style={{ top: "-54px" }}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <RxCross1 size={26} /> : <AiOutlineMenu size={26} />}
        </button>
        <ul
          className={
            "flex justify-between flex-col md:flex-row w-full md:gap-2 gap-8 max-[768px]:justify-start" +
            // Condicional que estila según si el menu esta activo o no
            (menu
              ? " max-[768px]:flex max-[768px]:h-[calc(100vh_-_80px)] max-[768px]:overflow-y-scroll max-[768px]:p-12 no-scrollbar"
              : " max-[768px]:hidden ")
          }
        >
          {renderBtnNavBar}
          <SearchBar></SearchBar>
        </ul>
      </nav>
      <div
        className="hidden md:inline-block w-full"
        onMouseLeave={(e) => onHoverFx(false)}
      >
        {/* renderizo si existe y ademas el componente pasado */}
        {desktopDropdown}
      </div>
    </>
  );
};

export default NavBar;
