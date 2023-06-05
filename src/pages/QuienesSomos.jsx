import logo from '../assets/logoBig.png'
import AboutHero from '../components/About/AboutHero'
import PageLabel from '../components/PageLabel'
import About3PhotosGalery from '../components/About/About3PhotosGalery'
import AboutRing from '../components/About/AboutRing'
import AboutValues from '../components/About/AboutValues'
import AboutFooter from '../components/About/AboutFooter'

const QuienesSomos = () => {
  return (
    <>
      <AboutHero />
      {/* About */}
      <PageLabel label={'Diatomea'}/>
      {/* About Text */}
      <p className='px-5 nd:px-32'>Hola, soy Natalia, la creadora de DIATOMEA, una marca de joyería artesanal. Desde pequeña, siempre he disfrutado trabajando con diferentes materiales y experimentando con procesos de fabricación artesanal. Descubrí que tenía un talento para crear cosas y que mi entorno apreciaba lo que hacía. Así que comprendí que había encontrado mi pasión.<br /><br />Después de trabajar como artesana con alpaca, alambre y macramé, descubrí que podía encontrar belleza y potencial creativo en elementos de la naturaleza y en objetos cotidianos. Pero siempre sentí la necesidad de explorar nuevas formas de creación, así que decidí estudiar orfebrería en la escuela Auroom. Allí me formé como orfebre y comencé a construir mi marca de joyería artesanal, DIATOMEA.<br /> <br />Desde entonces, he dedicado todo mi tiempo y esfuerzo a construir mi taller creativo y a desarrollar mi marca. Aunque me defino principalmente como artista plástica, la orfebrería se ha convertido en una de mis grandes pasiones. <br /><br />En resumen, DIATOMEA es el resultado del amor y la dedicación que he puesto en mi pasión por el arte y la creación, que descubrí desde que era una niña; así como de mi amor por la orfebrería. Espero que te haya gustado mi historia y que disfrutes de mis joyas tanto como yo disfruto creándolas. ¡Gracias por estar aquí conmigo en este camino!</p>
      {/* Logo */}
      <img src={logo} className='w-2/3 mx-auto my-32' alt="" />
      {/* Three Photos and phrase */}
      <About3PhotosGalery/>
      <p className='text-2xl md:text-3xl md:w-2/3 px-5 md:px-0 text-center mx-auto my-20 md:font-medium'>&quot;Deseo que todas las joyas que nacen de mi taller conecten con vos de manera única y especial.&quot;</p>
      {/* Ring */}
      <AboutRing />
      {/* Identity */}
      <div className='flex flex-col md:flex-row md:flex-wrap justify-center gap-20 md:gap-10 mt-32'>
        <AboutValues title={'Misión'} description={'Nuestra misión es inspirar momentos de felicidad mediante el diseño y creación de las más bellas joyas personalizadas.'}/>
        <AboutValues title={'Visión'} description={'Como marca soñamos con formar parte de los momentos de felicidad de nuestros clientes.'}/>
        <AboutValues title={'Valores'} description={'Somos apasionados por lo que hacemos y es por ello que nuestros valores nos ayudan a mantenernos enfocados en nuestra misión.'}/>
      </div>
      <div className='w-full flex flex-col'>
        <p className='ml-5 text-lg md:text-base md:ml-72 mx-auto text-start mt-10 md:mt-5 mb-2'>Nos basamos en: </p>
        <p className='mr-5 text-lg md:text-base self-end text-center md:mr-0 w-1/2 md:w-full '>Identidad, compromiso, honestidad, confianza, seriedad, calidad. </p>
      </div>
      {/* Page End */}
      <AboutFooter />
    </>
  )
}

export default QuienesSomos