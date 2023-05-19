import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
    return (
        <div className="w-full">
            <div className="w-2/3 mx-auto flex flex-col items-center gap-2 my-20">
                <p className="text-3xl text-center text-primary-darkGrey font-semibold">Preguntas frecuentes (FAQ) </p>
                <div className="h-0.5 w-full lg:w-5/12 bg-secondary-darkBrown"></div>
                <p className="text-sm md:w-4/12 text-center text-primary-darkGrey mt-5">Encuentra la información a las dudas que puedas tener sobre nuestros productos y servicios.</p>
            </div>

            {/* Accordion */}
            <div className='w-full px-20'>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>¿Cuál es el tiempo de demora que lleva personalizar una joya?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        El tiempo de demora dependerá de la complejidad de la pieza que se encargue. Por lo general el tiempo es de 7 a 10 días hábiles, pero para saber con exactitud le pedimos que consulte.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
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