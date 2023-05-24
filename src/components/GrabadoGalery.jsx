import background from '../assets/Services/Galery/bg.png'
import grab1 from '../assets/Services/Galery/grab1.png'
import grab11 from '../assets/Services/Galery/grab11.png'
import grab12 from '../assets/Services/Galery/grab12.png'
import grab13 from '../assets/Services/Galery/grab13.png'
import grab2 from '../assets/Services/Galery/grab2.png'
import grab21 from '../assets/Services/Galery/grab21.png'
import grab22 from '../assets/Services/Galery/grab22.png'
import grab23 from '../assets/Services/Galery/grab23.png'
import grab3 from '../assets/Services/Galery/grab3.png'
import grab31 from '../assets/Services/Galery/grab31.png'
import grab32 from '../assets/Services/Galery/grab32.png'
import grab33 from '../assets/Services/Galery/grab33.png'


const GrabadoGalery = () => {
    return (
        <div className='w-full px-20 flex flex-col items-center py-10 gap-10 mb-5' style={{ backgroundImage: `url(${background})` }}>
            <p className='text-2xl text-bg-page'>Joyas con grabados</p>
            <div className='hidden md:flex gap-3'>
                <div className='w-1/3 flex flex-col gap-3'>
                    <img src={grab1} className='w-full' alt="" />
                    <img src={grab11} className='w-full' alt="" />
                    <div>
                        <img src={grab12} className='w-full' alt="" />
                        <p className='text-sm text-primary-darkGrey font-normal'>*Dije rectangular</p>
                    </div>
                    <img src={grab13} className='w-full' alt="" />
                </div>
                <div className='w-1/3 flex flex-col gap-3'>
                    <img src={grab2} className='w-full' alt="" />
                    <div>
                        <img src={grab21} className='w-full' alt="" />
                        <p className='text-sm text-primary-darkGrey font-normal'>*Anillo tubo L</p>
                    </div>
                    <img src={grab22} className='w-full' alt="" />
                    <img src={grab23} className='w-full' alt="" />
                </div>
                <div className='w-1/3 flex flex-col gap-3'>
                    <div>
                        <img src={grab3} className='w-full' alt="" />
                        <p className='text-sm text-primary-darkGrey font-normal'>*Dije rectangular</p>
                    </div>
                    <img src={grab31} className='w-full' alt="" />
                    <img src={grab32} className='w-full' alt="" />
                    <img src={grab33} className='w-full' alt="" />
                </div>
            </div>
            <div className='md:hidden flex gap-5'>
                <div className="flex flex-col gap-5 w-1/2">
                    <img src={grab1} className='w-full' alt="" />
                    <div>
                        <img src={grab3} className='w-full' alt="" />
                        <p className='text-xs text-primary-grey font-normal'>*Dije rectangular</p>
                    </div>
                    <div>
                        <img src={grab21} className='w-full' alt="" />
                        <p className='text-xs text-primary-grey font-normal'>*Anillo tubo L</p>
                    </div>
                    <div>
                        <img src={grab12} className='w-full' alt="" />
                        <p className='text-xs text-primary-grey font-normal'>*Dije rectangular</p>
                    </div>
                    <img src={grab22} className='w-full' alt="" />
                    <img src={grab13} className='w-full' alt="" />
                </div>
                <div className="flex flex-col gap-5 w-1/2">
                    <img src={grab2} className='w-full' alt="" />
                    <img src={grab11} className='w-full' alt="" />
                    <img src={grab31} className='w-full' alt="" />
                    <img src={grab32} className='w-full' alt="" />
                    <img src={grab23} className='w-full' alt="" />
                    <img src={grab33} className='w-full' alt="" />
                </div>
            </div>
        </div>
    )
}

export default GrabadoGalery