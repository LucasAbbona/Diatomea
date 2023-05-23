import pict11 from '../assets/Services/Picture11.png'
import {ImInfinite} from 'react-icons/im'
import heart from '../assets/Services/heart.png'
import star from '../assets/Services/star.png'

const Grabado = () => {
    return (
        <div className='w-full px-5 md:px-32 flex flex-col gap-8 items-center mt-20 mb-16'>
            <p className='text-2xl font-bold'>Grabado</p>
            <p className='mt-5 md:w-2/3 text-start'>Graba las palabras que deseas que siempre te acompañen. ¡Podes personalizar tu joya ideal con el grabado que más te guste! Con la frase, nombre o palabras que necesites.</p>
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='flex flex-col gap-6'>
                    <p className='w-1/2 md:w-full font-bold text-2xl md:text-lg'>¿Qué podes grabar en tus joyas? </p>
                    <p className='mt-8 md:mt-0'>Podes grabar letras y números. También podes consultarnos si es posible grabar algún dibujo o ilustración que quieras. <br /><br />
                        Podes elegir entre letras mayúsculas, minúsculas, cursivas o imprenta, y no se pueden combinar entre estos estilos. El tipo de fuente es a elegir y podes consultar con nosotros estas.
                        <br /><br />
                        Podes incluir los siguientes símbolos como parte del texto:
                    </p>
                    <div className='flex gap-10 w-full md:w-3/5 justify-around my-8 md:my-0 mb:mb-5 '>
                        <div className='flex flex-col items-center'>
                            <ImInfinite size={30} />
                            <p>(infinito)</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={heart} alt="" />
                            <p>(corazon)</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={star} alt="" />
                            <p>(estrella)</p>
                        </div>
                    </div>
                    <p className='font-bold w-2/3 md:w-full text-2xl md:text-lg'>¿Cuántos caracteres puedo grabar? </p>
                    <p className='mt-8 md:mt-0'>Existe un máximo de caracteres de acuerdo al tipo de joya que se desea grabar:</p>
                    <p>
                        <b>Pulseras:</b> máximo de 25 caracteres.
                        <br /><b>Dije rectangular:</b> máximo de 12 caracteres.
                        <br /><b>Dije doble:</b> máximo de 23 caracteres.
                        <br /><b>Esfera pequeña:</b> máximo de 5 caracteres.
                        <br /><b>Tubito:</b> máximo de 5 caracteres.
                        <br /><b>Dije circular M:</b> máximo de 15 caracteres.
                        <br /><b>Dije circular S:</b> máximo de 7 caracteres.
                        <br /><b>Dije circular XS:</b> máximo de 15 caracteres.
                        <br /><b>Esclava:</b> máximo de 25 caracteres.
                        <br /><b>Anillo cinta S:</b> máximo de 15 caracteres.
                        <br /><b>Anillo tubo L:</b> máximo de 15 caracteres.</p>
                </div>
                <img src={pict11} className='md:w-1/2' alt="" />
            </div>
        </div>
    )
}

export default Grabado