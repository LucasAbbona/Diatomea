import { Link } from "react-router-dom";
const Creations = ({}) => {
  return (
    <div className="w-full px-5 md:px-44 flex md:flex-row flex-col items-center md:items-start gap-8 md:gap-4 bg-bg-page md:py-8 py-8">
      <div className="flex md:flex-row flex-col md:w-1/3">
        <Link
          to={"/Creaciones"}
          className="md:w-1/4 text-lg text-start px-8 md:px-0 md:text-base"
        >Ver todo</Link>
      </div>
      <div className="flex md:flex-row flex-col md:w-1/3">
        <p className="md:w-1/4 text-lg text-start px-8 md:px-0 md:text-base">
          Joyas
        </p>
        <div className="md:w-1/2 w-2/3 md:mt-5 ml-32 md:ml-0 gap-4 md:gap-3 flex flex-col items-start ">
          <p className="w-full text-base cursor-pointer hover:underline">
            Anillos
          </p>
          <p className="w-full text-base cursor-pointer hover:underline">
            Aros
          </p>
          <p className="w-full text-base cursor-pointer hover:underline">
            Colgantes
          </p>
          <p className="w-full text-base cursor-pointer hover:underline">
            Dijes
          </p>
          <p className="w-full text-base cursor-pointer hover:underline">
            Pulseras y tobilleras
          </p>
        </div>
      </div>
      <div className="hidden md:inline-block w-px h-48 bg-primary-grey"></div>
      <div className="flex md:flex-row flex-col md:gap-5 md:w-1/3">
        <p className="text-lg text-start md:text-base w-full md:w-auto">
          Cápsulas
        </p>
        <p className="md:mt-5 cursor-pointer w-2/3 ml-24 md:ml-0 hover:underline">
          Personalizables
        </p>
      </div>
      <div className="md:hidden flex md:flex-row flex-col md:gap-5 md:w-1/3">
        <p className="ml-10 text-lg text-start md:text-base w-full md:w-auto">
          Regalos
        </p>
        <div
          className="w-2/3 flex flex-col gap-4"
          style={{ marginLeft: "136px" }}
        >
          <p className=" cursor-pointer hover:underline">Gift Cards</p>
          <p className=" cursor-pointer hover:underline">Packaging de diseño</p>
        </div>
      </div>
    </div>
  );
};

export default Creations;
