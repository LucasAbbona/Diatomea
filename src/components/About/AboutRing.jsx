import photo4 from '../../assets/QS/photo4.png'

const AboutRing = () => {
  return (
    <>
    <img src={photo4} className='md:w-1/3 mx-auto mt-10' alt="" />
      <div className='flex gap-8 w-full justify-center mt-14 items-center'>
        <div className='h-3 w-3 rounded-full bg-primary-darkGrey'></div>
        <div className='h-2 w-2 rounded-full bg-primary-darkGrey'></div>
        <div className='h-2 w-2 rounded-full bg-primary-darkGrey'></div>
      </div>
    </>
  )
}

export default AboutRing