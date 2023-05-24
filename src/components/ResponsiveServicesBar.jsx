import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper";

const ResponsiveServicesBar = ({clean,custom,grabado,reparaciones,setClean,setCustom,setGrabado,setReparaciones}) => {
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={8}
            freeMode={true}
            modules={[FreeMode]}
            className="md:hidden flex w-full  pr-5"
        >
            <SwiperSlide className="ml-5">
                <div className={custom ? "cursor-pointer text-center w-full py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium bg-secondary-darkBrown" : "cursor-pointer text-center w-full py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium outline-secondary-darkBrown  ring-0"} onClick={() => { setCustom(true); setClean(false); setGrabado(false); setReparaciones(false) }}>Joya personalizada</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={reparaciones ? "cursor-pointer text-center w-full py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium bg-secondary-darkBrown" : "cursor-pointer text-center w-full py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium outline-secondary-darkBrown  ring-0"} onClick={() => { setCustom(false); setClean(false); setGrabado(false); setReparaciones(true) }}>Arreglo y restauracion</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={grabado ? "cursor-pointer text-center w-full py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium bg-secondary-darkBrown" : "cursor-pointer text-center w-full py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium outline-secondary-darkBrown  ring-0"} onClick={() => { setCustom(false); setClean(false); setGrabado(true); setReparaciones(false) }}>Grabado</div>
            </SwiperSlide>
            <SwiperSlide className="pr-5">
                <div className={clean ? "cursor pointer text-center w-full py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium bg-secondary-darkBrown" : "cursor pointer text-center w-full py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium outline-secondary-darkBrown  ring-0"} onClick={() => { setCustom(false); setClean(true); setGrabado(false); setReparaciones(false) }}>Limpieza</div>
            </SwiperSlide>
        </Swiper>
    )
}

export default ResponsiveServicesBar