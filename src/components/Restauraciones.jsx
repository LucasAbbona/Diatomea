import picture1 from '../assets/Services/Picture1.png'
import picture2 from '../assets/Services/pict2.png'
import picture3 from '../assets/Services/pict3.png'
import picture4 from '../assets/Services/pict4.png'

const Restauraciones = () => {
  return (
    <div className='w-full mt-20'>
        <div className="md:w-1/2 mx-auto flex flex-col md:flex-row gap-10 md:justify-center items-center md:items-start px-5 md:px-0">
            <p className='md:hidden text-2xl font-semibold mb-5 self-start'>Arreglo y restauración</p>
            <img src={picture1} className='md:w-1/2 rounded-lg' alt="" />
            <div className='flex flex-col gap-8'>
                <p className='hidden md:inline text-2xl font-semibold'>Arreglo y restauración</p>
                <p className='md:text-xs'>Las joyas a restaurar o reparar pasan por un proceso de selección ya que es importante evaluar las posibilidades de cada una. Restauramos y arreglamos solo joyas de plata 925 y oro 18kt . <br /> <br />Este anillo es un legado familiar. Llega al taller con algunos faltantes de piedras y desgaste natural del metal por el uso, decidimos hacer recambio completo de engarces, limado y pulido para darle nueva vida a ese anillo de abuela.</p>
            </div>
        </div>
        <div className='md:w-1/2 px-5 md:px-0 mx-auto flex gap-4 mt-10 mb-20'>
            <img src={picture2} className='w-1/2 rounded-lg' alt="" />
            <img src={picture3} className='w-1/2 rounded-lg' alt="" />
        </div>
        <p className='text-center w-full font-semibold text-2xl mb-8'>Joya final</p>
        <img src={picture4} className='md:w-2/5 px-5 md:px-0 mx-auto mb-20 rounded-lg' alt="" />
    </div>
  )
}

export default Restauraciones