import { Link } from "react-router-dom";
import Creations from "./Dropdowns/Creations";
import Information from "./Dropdowns/Information";
import Services from "./Dropdowns/Services";

const ResponsiceBtnNavBar = ({ text, icon, setCreations, setInfo, setServices, info, services, creations }) => {
  return (
    <div className="inline md:hidden">
      {text == "Creaciones" ?
        <>
          <li className='flex justify-center items-center gap-2.5 cursor-pointer md:text-base text-lg' onClick={() => { setCreations(prev => !prev); setInfo(false); setServices(false) }} >
            {text}{icon}
          </li>
          {creations && <>
            <div className="w-full h-px bg-primary-darkGrey mt-2"></div>
            <Creations />
            <div className="w-full h-px bg-primary-lighterGrey mt-2"></div>
          </>}
        </>
        : text == "Información" ?
          <>
            <li className='flex justify-center items-center gap-2.5 cursor-pointer md:text-base text-lg' onClick={() => { setInfo(prev => !prev); setCreations(false); setServices(false) }}>
              {text}{icon}
            </li>
            {info &&
              <>
                <div className="w-full h-px bg-primary-darkGrey mt-2"></div>
                <Information />
                <div className="w-full h-px bg-primary-lighterGrey mt-2"></div>
              </>
            }
          </>
          : text == "Servicios" ?
            <>
              <Link to={'/Servicios'} >
                <li className='flex justify-center items-center gap-2.5 cursor-pointer md:text-base text-lg' onClick={() => { setServices(prev => !prev); setCreations(false); setInfo(false) }}>
                  {text}{icon}
                </li>
              </Link>
              {services &&
                <>
                  <div className="w-full h-px bg-primary-darkGrey mt-2"></div>
                  <Services />
                  <div className="w-full h-px bg-primary-lighterGrey mt-2"></div>
                </>
              }
            </>
            : text == "Sobre Diatomea" ?
              <Link to={'/QuienesSomos'}>
                <li className='flex justify-center items-center gap-2.5 cursor-pointer md:text-base text-lg' >
                  {text}{icon}
                </li>
              </Link>
              :
              text == "FAQ" ?
              <Link to={'/FAQ'}>
                <li className='flex justify-center items-center gap-2.5 cursor-pointer md:text-base text-lg' >
                  {text}{icon}
                </li>
              </Link>
              :
              <li className='flex justify-center items-center gap-2.5 cursor-pointer md:text-base text-lg' >
                {text}{icon}
              </li>}
    </div>
  )
}

export default ResponsiceBtnNavBar