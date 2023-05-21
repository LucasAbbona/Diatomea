import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
import logo from '../assets/LOGO.png'
import vector from '../assets/Vector.png'
import { useState } from 'react'
import PoliciesModal from './PoliciesModal'

const Footer = () => {
    const [Modal,setModal] = useState(false)
    
    return (
        <>
        <div className='w-full bg-primary-darkGrey flex flex-col py-10 gap-5 items-center relative overflow-hidden'>
                <img src={logo} className='w-52' alt="logo" />
                <div className='flex gap-4'>
                    <AiOutlineInstagram color='white' size={32}/>
                    <AiFillFacebook color='white' size={32}/>
                </div>
                <p className='text-bg-page text-sm'>Ciudad de Córdoba, Córdoba.</p>
                <p className='text-bg-page text-sm'>+54 9 351 8746943</p>
                <p className='text-bg-page text-sm'>diatomeajoyas@gmail.com</p>
                <button className='text-black px-6 py-3 text-sm font-medium rounded-md bg-bg-page shadow-sm shadow-primary-darkGrey' onClick={()=>setModal((prev)=>!prev)}>Políticas de cambio y devolución</button>
                <img src={vector} alt='' className='hidden md:inline absolute -rotate-6 w-1/5 left-6 -top-0.5'/>
        </div>
        {Modal && 
        <PoliciesModal setting={setModal} />
        }
        </>
    )
}

export default Footer