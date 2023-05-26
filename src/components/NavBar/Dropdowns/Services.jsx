
const Services = ({setServices}) => {
  return (
    <div className="w-full px-5 md:px-36 flex flex-col items-center md:items-start gap-8 md:flex-row md:gap-2 bg-bg-page py-8 md:py-5" onMouseLeave={()=>setServices(false)}>
          <div className="flex items-center md:items-start md:w-1/3">
            <p className="text-lg md:text-base hover:underline cursor-pointer">Joyas personalizadas</p>
          </div>
          <div className="hidden md:inline-block w-px h-7 bg-primary-grey"></div>
          <div className="flex items-center md:items-start md:w-1/3">
            <p className="text-lg md:text-base hover:underline cursor-pointer">Arreglos y restauracion</p>
          </div>
          <div className="hidden md:inline-block w-px h-7 bg-primary-grey"></div>
          <div className="flex items-center md:items-start md:w-1/3">
            <p className="text-lg md:text-base hover:underline cursor-pointer">Grabado</p>
          </div>
          <div className="hidden md:inline-block w-px h-7 bg-primary-grey"></div>
          <div className="flex items-center md:items-start md:w-1/3">
            <p className="text-lg md:text-base hover:underline cursor-pointer">Limpieza</p>
          </div>
        </div>
  )
}

export default Services