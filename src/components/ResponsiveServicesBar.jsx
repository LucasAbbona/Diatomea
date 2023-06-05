import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper";
import BtnSections from "./Buttons/BtnSections";

const ResponsiveServicesBar = ({ active,elements }) => {
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={8}
            freeMode={true}
            modules={[FreeMode]}
            className="md:hidden flex w-full pr-5">
            <SwiperSlide className="ml-5">
                <BtnSections text={'Joya Personalizada'} path={'/Servicios/Personalizada'} condition={active == 'custom' ? true : false} />
            </SwiperSlide>
            <SwiperSlide>
                <BtnSections text={'Arreglo y reparaciones'} path={'/Servicios/Reparaciones'} condition={active == 'repair' ? true : false} />
            </SwiperSlide>
            <SwiperSlide>
                <BtnSections text={'Grabado'} path={'/Servicios/Grabaciones'} condition={active == 'grabado' ? true : false} />
            </SwiperSlide>
            <SwiperSlide>
                <BtnSections text={'Limpieza'} path={'/Servicios/Limpieza'} condition={active == 'clean' ? true : false} />
            </SwiperSlide>
        </Swiper>
    )
}

export default ResponsiveServicesBar