import { Link } from "react-router-dom";

const Information = ({}) => {
  return (
    <div className="w-full px-5 md:px-36 flex flex-col md:flex-row gap-8 md:gap-2 bg-bg-page py-8 md:py-5">
      <Link
        to={"/Informacion/medidasjoyas"}
        className="flex md:flex-row flex-col items-center md:items-start md:w-1/4"
      >
        <p className="text-lg md:text-base cursor-pointer hover:underline">
          Medidas de las joyas
        </p>
      </Link>
      <div className="hidden md:inline-block w-px min-h-max bg-primary-grey"></div>
      <Link
        to={"/Informacion/garantia"}
        className="flex md:flex-row flex-col items-center md:items-start md:w-1/4"
      >
        <p className="text-lg md:text-base cursor-pointer hover:underline">
          Certificado de calidad y garantía
        </p>
      </Link>
      <div className="hidden md:inline-block w-px min-h-max bg-primary-grey"></div>
      <Link
        to={"/Informacion/regalos"}
        className="hidden md:flex flex-row items-start w-1/4"
      >
        <p className="text-lg md:text-base hover:underline cursor-pointer">
          Regalos
        </p>
      </Link>
    </div>
  );
};

export default Information;
