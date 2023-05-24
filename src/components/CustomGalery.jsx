import galeria1 from '../assets/Services/Galery/gal1.png'
import galeria2 from '../assets/Services/Galery/gal2.png'
import galeria3 from '../assets/Services/Galery/gal3.png'
import galeria4 from '../assets/Services/Galery/gal4.png'
import galeria5 from '../assets/Services/Galery/gal5.png'
import galeria6 from '../assets/Services/Galery/gal6.png'
import galeria7 from '../assets/Services/Galery/gal7.png'
import galeria8 from '../assets/Services/Galery/gal8.png'
import galeria10 from '../assets/Services/Galery/gal10.png'
import background from '../assets/Services/Galery/bg.png'


const CustomGalery = () => {
    return (
        <div className='md:px-20 px-5 flex flex-col items-center gap-10 py-10' style={{ backgroundImage: `url(${background})` }}>
            <p className='text-2xl text-bg-page'>Proceso de creación</p>
            <div className='hidden md:flex gap-3'>
                <div className='w-1/3 flex flex-col gap-3'>
                    <img src={galeria1} className='w-full' alt="" />
                    <img src={galeria4} className='w-full' alt="" />
                    <img src={galeria5} className='w-full' alt="" />
                </div>
                <div className='w-1/3 flex flex-col gap-3'>
                    <img src={galeria2} className='w-full' alt="" />
                    <img src={galeria6} className='w-full' alt="" />
                    <img src={galeria7} className='w-full' alt="" />
                </div>
                <div className='w-1/3 flex flex-col gap-3'>
                    <img src={galeria3} className='w-full' alt="" />
                    <img src={galeria8} className='w-full' alt="" />
                    <img src={galeria10} className='w-full' alt="" />
                </div>
            </div>
            <div className='md:hidden flex gap-5'>
                <div className='w-1/2 flex flex-col gap-5
                '>
                    <img src={galeria1} className='w-full' alt="" />
                    <img src={galeria3} className='w-full' alt="" />
                    <img src={galeria4} className='w-full' alt="" />
                    <img src={galeria8} className='w-full' alt="" />
                    <img src={galeria7} className='w-full' alt="" />

                </div>
                <div className='w-1/2 flex flex-col gap-5'>
                    <img src={galeria2} className='w-full' alt="" />
                    <img src={galeria6} className='w-full' alt="" />
                    <img src={galeria5} className='w-full' alt="" />
                    <img src={galeria10} className='w-full' alt="" />

                </div>
            </div>
        </div>
    )
}

export default CustomGalery