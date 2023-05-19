import background from '../assets/nosotros.png'
import logo from '../assets/logoBig.png'
import photo1 from '../assets/QS/photo1.png'
import photo2 from '../assets/QS/photo2.png'
import photo3 from '../assets/QS/photo3.png'
import photo4 from '../assets/QS/photo4.png'
import photo5 from '../assets/QS/photo5.png'
import portada from '../assets/QS/Portada.png'
import foot from '../assets/QS/foot.png'

const QuienesSomos = () => {
  return (
    <>
      <div className='w-full relative mb-20'>
          <img src={background} className='w-full hidden md:inline-block' alt="" />
          <div className='hidden w-1/3 h-full absolute top-0 md:flex flex-col items-start justify-center gap-12 ml-28 pb-16'>
              <i className='text-3xl font-medium text-primary-darkGrey'>Joyas para la vida y el alma</i>
              <i className='text-2xl text-primary-darkGrey'>Pequeño taller de orfebrería donde surge la magia y nacen joyas únicas .</i>
          </div>
          {/* Responsive */}
          <img src={portada} className='md:hidden w-full' alt="" />
          <div className='w-full h-full absolute top-0 md:hidden flex items-center justify-center'>
          <p className='w-full text-center text-3xl font-medium text-primary-darkGrey'>Joyas para la vida y el alma</p>
          </div>
      </div>
      {/* Responsive Text */}
      <p className='text-lg w-2/3 mx-auto mb-20  text-primary-darkGrey  md:hidden text-center'>Pequeño taller de orfebrería donde surge la magia y nacen joyas únicas .</p>
      
      {/* About */}
      <div className='flex items-center flex-col my-10'>
        <p className='text-2xl font-medium text-primary-darkGrey mb-2'>Diatomea</p>
        <div className='h-0.5 w-52 bg-secondary-darkBrown'></div>
      </div>
      <p className='px-5 nd:px-32'>Hola, soy Natalia, la creadora de DIATOMEA, una marca de joyería artesanal. Desde pequeña, siempre he disfrutado trabajando con diferentes materiales y experimentando con procesos de fabricación artesanal. Descubrí que tenía un talento para crear cosas y que mi entorno apreciaba lo que hacía. Así que comprendí que había encontrado mi pasión.<br /><br />Después de trabajar como artesana con alpaca, alambre y macramé, descubrí que podía encontrar belleza y potencial creativo en elementos de la naturaleza y en objetos cotidianos. Pero siempre sentí la necesidad de explorar nuevas formas de creación, así que decidí estudiar orfebrería en la escuela Auroom. Allí me formé como orfebre y comencé a construir mi marca de joyería artesanal, DIATOMEA.<br /> <br />Desde entonces, he dedicado todo mi tiempo y esfuerzo a construir mi taller creativo y a desarrollar mi marca. Aunque me defino principalmente como artista plástica, la orfebrería se ha convertido en una de mis grandes pasiones. <br /><br />En resumen, DIATOMEA es el resultado del amor y la dedicación que he puesto en mi pasión por el arte y la creación, que descubrí desde que era una niña; así como de mi amor por la orfebrería. Espero que te haya gustado mi historia y que disfrutes de mis joyas tanto como yo disfruto creándolas. ¡Gracias por estar aquí conmigo en este camino!</p>
      
      {/* Logo */}
      <img src={logo} className='w-2/3 mx-auto my-32' alt="" />
      
      {/* Three Photos and phrase */}
      <div className='w-full md:px-20 flex gap-3 justify-center md:justify-normal md:flex-nowrap flex-wrap'>
        <img src={photo1} className='md:w-1/3 w-5/12 md:mb-56' alt="" />
        <img src={photo2} className='md:w-1/3 w-5/12 md:mt-56' alt="" />
        <img src={photo3} className='md:w-1/3 w-5/12 md:mb-56' alt="" />
      </div>
      <p className='text-2xl md:text-3xl md:w-2/3 px-5 md:px-0 text-center mx-auto my-20 md:font-medium'>&quot;Deseo que todas las joyas que nacen de mi taller conecten con vos de manera única y especial.&quot;</p>
      
      {/* Ring */}
      <img src={photo4} className='md:w-1/3 mx-auto mt-10' alt="" />
      <div className='flex gap-8 w-full justify-center mt-14 items-center'>
        <div className='h-3 w-3 rounded-full bg-primary-darkGrey'></div>
        <div className='h-2 w-2 rounded-full bg-primary-darkGrey'></div>
        <div className='h-2 w-2 rounded-full bg-primary-darkGrey'></div>
      </div>

      {/* Identity */}
      <div className='flex flex-col md:flex-row md:flex-wrap justify-center gap-20 md:gap-10 mt-32'>
        <div className='md:w-1/3 gap-8 flex px-5 md:px-20 flex-col items-center'>
          <p className=' text-2xl text-primary-darkGrey font-bold'>Misión</p>
          <p className='text-justify text-lg md:text-base'>Nuestra misión es inspirar momentos de felicidad mediante el diseño y creación de las más bellas joyas personalizadas.</p>
        </div>
        <div className='md:w-1/3 gap-8 flex px-5 md:px-20 flex-col items-center'>
          <p className=' text-2xl text-primary-darkGrey font-bold'>Visión</p>
          <p className='text-justify text-lg md:text-base'>Como marca soñamos con formar parte de los momentos de felicidad de nuestros clientes.</p>
        </div>
        <div className='md:w-1/3 gap-8 flex px-5 md:px-20 flex-col items-center'>
          <p className=' text-2xl text-primary-darkGrey font-bold'>Valores</p>
          <p className='text-justify text-lg md:text-base'>Somos apasionados por lo que hacemos y es por ello que nuestros valores nos ayudan a mantenernos enfocados en nuestra misión.</p>
        </div>
      </div>
      <div className='w-full flex flex-col'>
        <p className='ml-5 text-lg md:text-base md:ml-72 mx-auto text-start mt-10 md:mt-5 mb-2'>Nos basamos en: </p>
        <p className='mr-5 text-lg md:text-base self-end text-center md:mr-0 w-1/2 md:w-full '>Identidad, compromiso, honestidad, confianza, seriedad, calidad. </p>
      </div>
      
      {/* Page End */}
      <img src={photo5} className='mt-44 hidden md:inline-block' alt="" />
      <img src={foot} className='mt-52 w-full md:hidden' alt="" />
    </>
  )
}

export default QuienesSomos