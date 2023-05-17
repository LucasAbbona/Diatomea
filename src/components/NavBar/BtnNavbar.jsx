import React from 'react'

//Button del navBar
const BtnNavbar = ({text, icon}) => {
  return (
    <li className='flex justify-center items-center gap-2.5'>
        {text}{icon}
    </li>
  )
}

export default BtnNavbar