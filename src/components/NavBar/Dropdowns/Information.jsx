import { Link } from "react-router-dom";

const Information = ({}) => {
  return (
    <div className="w-full px-5 md:px-36 flex flex-col md:flex-row gap-8 md:gap-2 bg-bg-page py-8 md:py-5">
      <div className="flex md:flex-row flex-col md:w-1/3">
        <Link
          to={"/Informacion"}
          className="md:w-1/4 text-lg text-start px-8 md:px-0 md:text-base"
        >
          Ver todo
        </Link>
      </div>
      <div className="flex md:flex-row flex-col items-center md:items-start md:w-1/4">
        <p className="text-lg md:text-base cursor-pointer hover:underline">
          Medidas de las joyas
        </p>
      </div>
      <div className="hidden md:inline-block w-px min-h-max bg-primary-grey"></div>
      <div className="flex md:flex-row flex-col items-center md:items-start md:w-1/4">
        <p className="text-lg md:text-base cursor-pointer hover:underline">
          Certificado de calidad y garantía
        </p>
      </div>
      <div className="hidden md:inline-block w-px min-h-max bg-primary-grey"></div>
      <div className="hidden md:flex flex-row items-start w-1/4">
        <p className="text-lg md:text-base hover:underline cursor-pointer">
          Regalos
        </p>
      </div>
    </div>
  );
};

export default Information;
