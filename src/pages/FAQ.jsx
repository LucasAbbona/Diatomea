import AccordionComponenet from "../components/Accordion";


const Faq = () => {
    return (
        <div className="w-full">
            <div className="w-2/3 mx-auto flex flex-col items-center gap-2 my-20">
                <p className="text-3xl text-center text-primary-darkGrey font-semibold">Preguntas frecuentes (FAQ) </p>
                <div className="h-0.5 w-full lg:w-5/12 bg-secondary-darkBrown"></div>
                <p className="text-sm md:w-4/12 text-center text-primary-darkGrey mt-5">Encuentra la información a las dudas que puedas tener sobre nuestros productos y servicios.</p>
            </div>

            {/* Accordion */}
            <div className='w-full px-5 md:px-20 flex flex-col gap-8'>
                <AccordionComponenet title={"¿Cuál es el tiempo de demora que lleva personalizar una joya?"} description={"El tiempo de demora dependerá de la complejidad de la pieza que se encargue. Por lo general el tiempo es de 7 a 10 días hábiles, pero para saber con exactitud le pedimos que consulte."} />
                <AccordionComponenet title={"¿Qué medios de pago recibís? "} description={"El tiempo de demora dependerá de la complejidad de la pieza que se encargue. Por lo general el tiempo es de 7 a 10 días hábiles, pero para saber con exactitud le pedimos que consulte."} />
                <AccordionComponenet title={"¿Trabajas con otros materiales que no sea plata u oro?"} description={"El tiempo de demora dependerá de la complejidad de la pieza que se encargue. Por lo general el tiempo es de 7 a 10 días hábiles, pero para saber con exactitud le pedimos que consulte."} />
                <AccordionComponenet title={"¿Cuál es el tiempo de demora que lleva personalizar una joya?"} description={"El tiempo de demora dependerá de la complejidad de la pieza que se encargue. Por lo general el tiempo es de 7 a 10 días hábiles, pero para saber con exactitud le pedimos que consulte."} />
                <AccordionComponenet title={"¿Qué tipo de arreglos realizan?"} description={"El tiempo de demora dependerá de la complejidad de la pieza que se encargue. Por lo general el tiempo es de 7 a 10 días hábiles, pero para saber con exactitud le pedimos que consulte."} />
                <AccordionComponenet title={"¿Cómo tomo las medidas para mi joya?"} description={"El tiempo de demora dependerá de la complejidad de la pieza que se encargue. Por lo general el tiempo es de 7 a 10 días hábiles, pero para saber con exactitud le pedimos que consulte."} />
                <AccordionComponenet title={"¿Cómo limpio mis joyas?"} description={"El tiempo de demora dependerá de la complejidad de la pieza que se encargue. Por lo general el tiempo es de 7 a 10 días hábiles, pero para saber con exactitud le pedimos que consulte."} />
                <AccordionComponenet title={"¿Puedo grabar lo que sea?"} description={"El tiempo de demora dependerá de la complejidad de la pieza que se encargue. Por lo general el tiempo es de 7 a 10 días hábiles, pero para saber con exactitud le pedimos que consulte."} />
                <AccordionComponenet title={"¿Hacen envíos?"} description={"El tiempo de demora dependerá de la complejidad de la pieza que se encargue. Por lo general el tiempo es de 7 a 10 días hábiles, pero para saber con exactitud le pedimos que consulte."} />
                <AccordionComponenet title={"¿Los productos tienen garantía?"} description={"El tiempo de demora dependerá de la complejidad de la pieza que se encargue. Por lo general el tiempo es de 7 a 10 días hábiles, pero para saber con exactitud le pedimos que consulte."} />
                <AccordionComponenet title={"¿Con qué gemas/piedras trabajas?"} description={"El tiempo de demora dependerá de la complejidad de la pieza que se encargue. Por lo general el tiempo es de 7 a 10 días hábiles, pero para saber con exactitud le pedimos que consulte."} />
                <AccordionComponenet title={"¿Qué es el certificado de calidad?"} description={"El tiempo de demora dependerá de la complejidad de la pieza que se encargue. Por lo general el tiempo es de 7 a 10 días hábiles, pero para saber con exactitud le pedimos que consulte."} />
                <AccordionComponenet title={"¿Puedo devolver o cambiar un producto?"} description={"El tiempo de demora dependerá de la complejidad de la pieza que se encargue. Por lo general el tiempo es de 7 a 10 días hábiles, pero para saber con exactitud le pedimos que consulte."} />
                
            </div>

            {/* Contact */}
            <div className="md:w-2/3 mx-auto my-20">
                <p className="text-xl font-semibold text-center">¿No encontrarte la respuesta a tu duda o problema?<br />¡No te preocupes! </p>
                <p className="w-2/3 text-center md:w-2/5 mx-auto mt-8 text-sm">Comunícate con nosotros a través de Whatsapp o a nuestro correo y te responderemos en la brevedad.</p>
            </div>
        </div>
    )
}

export default Faq;