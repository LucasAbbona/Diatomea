import { Link } from "react-router-dom";

const BtnNavbar = ({ text, icon, setCreations, setInfo, setServices, info, services, creations }) => {
  return (
    <>
      <div className="md:inline hidden">
        {text == "Creaciones" ? <li className='flex justify-center items-center gap-2.5 cursor-pointer md:text-base text-lg' onClick={() => { setCreations(prev => !prev); setInfo(false); setServices(false) }} >
          {text}{icon}
        </li> : text == "Información" ?
          <li className='flex justify-center items-center gap-2.5 cursor-pointer md:text-base text-lg' onClick={() => { setInfo(prev => !prev); setCreations(false); setServices(false) }}>
            {text}{icon}
          </li> : text == "Servicios" ?
            <Link to={'/Servicios'}>
              <li className='flex justify-center items-center gap-2.5 cursor-pointer md:text-base text-lg' onClick={() => { setServices(prev => !prev); setCreations(false); setInfo(false) }}>
                {text}{icon}
              </li>
            </Link> : text == 'Sobre Diatomea' ?
              <Link to={'/QuienesSomos'}>
                <li className='flex justify-center items-center gap-2.5 cursor-pointer md:text-base text-lg' >
                  {text}{icon}
                </li>
              </Link> :
              text == 'FAQ' ?
              <Link to={'/FAQ'}>
                <li className='flex justify-center items-center gap-2.5 cursor-pointer md:text-base text-lg' >
                  {text}{icon}
                </li>
              </Link> :
              <li className='flex justify-center items-center gap-2.5 cursor-pointer md:text-base text-lg' >
                {text}{icon}
              </li>
        }
      </div>
    </>
  )
}

export default BtnNavbar