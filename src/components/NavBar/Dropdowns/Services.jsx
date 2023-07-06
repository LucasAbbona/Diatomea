import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="w-full px-5 md:px-36 flex flex-col items-center md:items-start gap-8 md:flex-row md:gap-2 bg-bg-page py-8 md:py-5">
      <div className="flex md:flex-row flex-col md:w-1/3">
        <Link
          to={"/Servicios/Personalizada"}
          className="md:w-1/3 text-lg text-start px-8 md:px-0 md:text-base"
        >
          Ver todo
        </Link>
      </div>
      <div className="flex items-center md:items-start md:w-1/3">
        <Link to={'/Servicios/Personalizada'} className="text-lg md:text-base hover:underline cursor-pointer">
          Joyas personalizadas
        </Link>
      </div>
      <div className="hidden md:inline-block w-px h-7 bg-primary-grey"></div>
      <div className="flex items-center md:items-start md:w-1/3">
        <Link to={'/Servicios/Reparaciones'} className="text-lg md:text-base hover:underline cursor-pointer">
          Arreglos y restauracion
        </Link>
      </div>
      <div className="hidden md:inline-block w-px h-7 bg-primary-grey"></div>
      <div className="flex items-center md:items-start md:w-1/3">
        <Link to={'/Servicios/Grabaciones'} className="text-lg md:text-base hover:underline cursor-pointer">
          Grabado
        </Link>
      </div>
      <div className="hidden md:inline-block w-px h-7 bg-primary-grey"></div>
      <div className="flex items-center md:items-start md:w-1/3">
        <Link to={'/Servicios/Limpieza'} className="text-lg md:text-base hover:underline cursor-pointer">
          Limpieza
        </Link>
      </div>
    </div>
  );
};

export default Services;
