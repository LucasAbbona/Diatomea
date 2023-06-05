import ResponsiveServicesBar from "../components/ResponsiveServicesBar"
import ServiceHeader from "../components/Servicios/ServiceHeader"
import Custom from "../components/Custom"
import Grabado from '../components/Grabado';
import Restauraciones from '../components/Restauraciones'
import Limpieza from '../components/Limpieza'
import BtnSections from "../components/Buttons/BtnSections";

const pages = [{ text: "Joya Personalizada", path: "/Servicios/Personalizada"},
{ text: "Arreglo y restauracion", path: "/Servicios/Reparaciones"},
{ text: "Grabado", path: "/Servicios/Grabaciones"},
{ text: "Limpieza", path: "/Servicios/Limpieza"}]

const Servicios = ({ section }) => {
    return (
        <div className="pt-10 md:mt-0 ">
            <ServiceHeader />
            {/* Navegation */}
            <div className="hidden md:flex gap-1 justify-center">
                <BtnSections text={'Joya Perzonalizada'} path={'/Servicios/Personalizada'} condition={section == 'custom' ? true : false} />
                <BtnSections text={'Arreglo y restauracion'} path={'/Servicios/Reparaciones'} condition={section == 'repair' ? true : false} />
                <BtnSections text={'Grabado'} path={'/Servicios/Grabaciones'} condition={section == 'grabado' ? true : false} />
                <BtnSections text={'Limpieza'} path={'/Servicios/Limpieza'} condition={section == 'clean' ? true : false} />
            </div>
            <div className="md:hidden">
                <ResponsiveServicesBar active={section} elements={pages} />
            </div>
            {section == 'custom' && <Custom />}
            {section == 'grabado' && <Grabado />}
            {section == 'repair' && <Restauraciones />}
            {section == 'clean' && <Limpieza />}
        </div >
    )
}

export default Servicios