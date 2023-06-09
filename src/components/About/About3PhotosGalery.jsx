import photo1 from '../../assets/QS/photo1.png'
import photo2 from '../../assets/QS/photo2.png'
import photo3 from '../../assets/QS/photo3.png'

const About3PhotosGalery = () => {
  return (
    <div className='w-full md:px-20 flex gap-3 justify-center md:justify-normal md:flex-nowrap flex-wrap'>
        <img src={photo1} className='md:w-1/3 w-5/12 md:mb-56' alt="" />
        <img src={photo2} className='md:w-1/3 w-5/12 md:mt-56' alt="" />
        <img src={photo3} className='md:w-1/3 w-5/12 md:mb-56' alt="" />
      </div>
  )
}

export default About3PhotosGalery