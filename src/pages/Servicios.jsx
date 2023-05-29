import { useState } from "react"
import Restauraciones from "../components/Restauraciones"
import Limpieza from "../components/Limpieza"
import Custom from "../components/Custom"
import Grabado from "../components/Grabado"
import ResponsiveServicesBar from "../components/ResponsiveServicesBar"

const Servicios = () => {
    const [custom, setCustom] = useState(true)
    const [reparaciones, setReparaciones] = useState(false)
    const [grabado, setGrabado] = useState(false)
    const [clean, setClean] = useState(false)

    return (
        <div>
            <div className='flex items-center flex-col my-10 '>
                <p className='text-2xl font-medium text-primary-darkGrey mb-2'>Servicios</p>
                <div className='h-0.5 w-52 bg-secondary-darkBrown mb-7'></div>
                <p className="md:w-2/5 px-10 md:px-0 text-center text-lg text-primary-darkGrey">Acompáñanos a materializar tus emociones y momentos en una joya perfecta que te acompañará toda tu vida y será legado.</p>
                <p className="md:w-1/3 px-5 md:px-0 text-center text-sm mt-7">Desde DIATOMEA te ofrecemos los siguiente servicios para que tu joya sea única y personalizada de manera artesanal. </p>
            </div>
            {/* Navegation */}
            <div className="hidden md:flex gap-1 justify-center">
            <div className={custom ? "cursor-pointer text-center w-1/5 py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium bg-secondary-darkBrown" : "cursor-pointer text-center w-1/5 py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium outline-secondary-darkBrown  ring-0"} onClick={() => { setCustom(true); setClean(false); setGrabado(false); setReparaciones(false) }}>Joya personalizada</div>
            <div className={reparaciones ? "cursor-pointer text-center w-1/5 py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium bg-secondary-darkBrown" : "cursor-pointer text-center w-1/5 py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium outline-secondary-darkBrown  ring-0"} onClick={() => { setCustom(false); setClean(false); setGrabado(false); setReparaciones(true) }}>Arreglo y restauracion</div>
            <div className={grabado ? "cursor-pointer text-center w-1/5 py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium bg-secondary-darkBrown" : "cursor-pointer text-center w-1/5 py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium outline-secondary-darkBrown  ring-0"} onClick={() => { setCustom(false); setClean(false); setGrabado(true); setReparaciones(false) }}>Grabado</div>
            <div className={clean ? "cursor pointer text-center w-1/5 py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium bg-secondary-darkBrown" : "cursor pointer text-center w-1/5 py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium outline-secondary-darkBrown  ring-0"} onClick={() => { setCustom(false); setClean(true); setGrabado(false); setReparaciones(false) }}>Limpieza</div>
            </div>
            <div className="md:hidden">
                <ResponsiveServicesBar setClean={setClean} setCustom={setCustom} setGrabado={setGrabado} setReparaciones={setReparaciones} reparaciones={reparaciones} clean={clean} custom={custom} grabado={grabado} />
            </div>

            {reparaciones &&
                <Restauraciones />}
            {clean && <Limpieza />}
            {custom && <Custom />}
            {grabado && <Grabado />}
        </div>
    )
}

export default Servicios