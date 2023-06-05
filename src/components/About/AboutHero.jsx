import background from '../../assets/nosotros.png'
import portada from '../../assets/QS/Portada.png'

const AboutHero = () => {
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
    </>
  )
}

export default AboutHero