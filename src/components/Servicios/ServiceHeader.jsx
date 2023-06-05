import PageLabel from "../PageLabel"

const ServiceHeader = () => {
    return (
        <div className='flex items-center flex-col my-10 '>
            <PageLabel label={'Servicios'} />
            <p className="md:w-2/5 px-10 md:px-0 text-center text-lg text-primary-darkGrey">Acompáñanos a materializar tus emociones y momentos en una joya perfecta que te acompañará toda tu vida y será legado.</p>
            <p className="md:w-1/3 px-5 md:px-0 text-center text-sm mt-7">Desde DIATOMEA te ofrecemos los siguiente servicios para que tu joya sea única y personalizada de manera artesanal. </p>
        </div>
    )
}

export default ServiceHeader