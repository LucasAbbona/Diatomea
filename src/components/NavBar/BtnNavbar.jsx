import { useState } from "react";
import { Link } from "react-router-dom";

const BtnNavbar = ({
  text,
  icon,
  path,
  stateMenu,
  setterMenu,
  dropdown,
  onHoverFx,
  searchbar
}) => {
  // Estado para manejar el estilado del dropdown
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  // Fx onclick que se fija si contiene un dropdown para ver si lo desplega o no,
  // sino cierra el menu (la navegacion esta en link to=)
  const onClickFx = () => {
    if (dropdown) {
      setIsOpenDropdown(!isOpenDropdown);
    } else {
      setterMenu(!stateMenu);
    }
  };

  return (
    <div>
      <Link to={path}>
        <li
          className="flex justify-center items-center gap-2.5 cursor-pointer md:text-base text-lg"
          onClick={() => onClickFx()}
          onMouseEnter={() => onHoverFx(dropdown)}
        >
          {text}
          {icon}
        </li>
        {/* Si hay un dropdown prepara el div con esa data */}
        {dropdown && (
          <div
            className={
              "hidden w-full h-auto bg-primary-darkGrey mt-2 border-y-2" +
              // Condicional que estila el dropdown si está seleccionado
              (isOpenDropdown ? " max-[768px]:flex " : " max-[768px]:hidden ")
            }
            // onClick={(e) => {setterMenu(!stateMenu)}}
          >
            {dropdown}
          </div>
        )}
      </Link>
    </div>
  );
};

export default BtnNavbar;
