import picture5 from '../assets/Services/pict5.png'

const Limpieza = () => {
  return (
    <div className='my-20 lg:w-1/2 md:w-3/5 mx-auto flex flex-col md:flex-row gap-10'>
        <p className='md:hidden order-1 text-2xl pl-5 font-semibold self-start'>Limpieza</p>
        <div className='gap-8 flex flex-col order-3 md:order-1'>
            <p className='hidden md:inline text-2xl font-semibold self-start'>Limpieza</p>
            <p className='md:text-xs text-base text-justify px-5 md:px-0'>Fusce volutpat lectus et nisl consectetur finibus. In vitae scelerisque augue, in varius eros. Nunc sapien diam, euismod et pretium id, volutpat et tortor. In vulputate lorem quis dui vestibulum, vitae imperdiet diam bibendum. Maecenas scelerisque orci a dolor vestibulum sagittis. Etiam quis finibus arcu, vel efficitur diam. Curabitur felis eros, vestibulum sed nisi eu, sodales aliquet lacus. Mauris lacinia quam quis feugiat laoreet. Etiam lobortis aliquet euismod. Nunc dictum, sapien at egestas rutrum, dui dui fringilla erat, a commodo augue augue vel magna. Sed tincidunt ante turpis, rhoncus commodo risus fringilla vel. Maecenas lacinia nisl a sem ornare pharetra. Donec imperdiet justo et elementum iaculis.</p>
        </div>
        <img src={picture5} className='md:w-1/2 px-5 md:px-0 rounded-lg order-1 md:order-2' alt="" />
    </div>
  )
}

export default Limpieza