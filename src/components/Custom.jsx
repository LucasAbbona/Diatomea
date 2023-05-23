import picture6 from '../assets/Services/pict6.png'
import picture7 from '../assets/Services/pict7.png'
import picture8 from '../assets/Services/pict8.png'
import picture9 from '../assets/Services/pict9.png'
import picture10 from '../assets/Services/pict10.png'


const Custom = () => {
    return (
        <>
            <div className="md:w-2/3 px-5 md:px-0 mx-auto my-20">
                <div className='flex gap-8 flex-col md:flex-row'>
                    <div className='flex flex-col items-start gap-8'>
                        <p className='inline text-2xl font-semibold self-start'>Joya personalizada</p>
                        <p className='md:text-xs text-base text-justify'>Las joyas fueron, son y serán objetos de gran valor estético y emocional. Las llevamos con nosotros, las obsequiamos a nuestros seres amados y deseamos que cuando las usen se sientan más cerca nuestro, como si dentro del metal o gema estuviera encriptado un mensaje, un deseo de amor o nuestra compañía. Muchas veces elegimos escribir un nombre, una fecha o una frase que sea sellada en el tiempo, por eso escogemos metales nobles como el oro o la plata y también utilizamos técnicas variadas para acercarnos a la idea de esa joya especial. Quizás esta se transformará en un objeto de valor que se llevará de generación en generación. <br /><br />Las joyas personalizadas son objetos de diseño e identidad que encierran etapas y momentos de nuestra vida, por esta razón es que dedicamos amorosamente tiempo y dedicación en la creación de cada joya fabricada totalmente a mano, pensando en cada detalle que llevará quien la porte.</p>
                    </div>
                    <img src={picture7} className='md:w-1/2' alt="" />
                </div>
                <div className='mt-16 flex flex-col items-center gap-8'>
                    <p className='inline text-2xl font-semibold w-1/2 text-center'>Conoce la historia de esta joya </p>
                    <div className='w-full flex gap-10'>
                        <img src={picture6} className='hidden md:inline md:w-1/2' alt="" />
                        <div className='flex flex-col items-center gap-10'>
                            <p className='text-sm text-justify'>Grandes momentos, relatos e historias se funden para transformarse en una nueva historia, nuevas joya que cuentan una historia actual, pero con las raíces antiguas de nuestras familias. Las alianzas que creamos cuentan un poco esto, esas historias donde se necesitan otras para surgir. Este suceso y creación de alianzas comienza con varias joyas de ambos integrantes de una pareja, algunos anillos del abuelo de ella, otro aro de la otra abuela, un dije de cuando ella era niña, una cadena traída de marruecos …y así todas esas historias de personas, viajes, recuerdos y lugares se funden para dar un nuevo significado a otras joyas, ahora con un diseño más contemporáneo y simple tipo tubo con una frase muy poderosa:</p>
                            <p className='text-xl text-center w-1/2 md:w-full'>“Que sea eterno todo aquello que nos haga bien”.</p>
                            <p className='text-sm text-justify'>Estas alianzas fueron realizadas totalmente a mano, se reciclo y fundió oro 18 kt.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full px-5 md:px-20 my-20 flex flex-col items-center gap-10'>
                <p className='text-2xl font-semibold'>Joya final</p>
                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <img src={picture10}  className='md:w-1/3' alt="" />
                    <img src={picture9} className='md:w-1/3' alt="" />
                    <img src={picture8} className='md:w-1/3' alt="" />
                </div>
            </div>
        </>
    )
}

export default Custom