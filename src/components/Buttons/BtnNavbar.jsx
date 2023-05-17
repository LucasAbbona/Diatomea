import React from 'react'

//Button del navBar
const BtnNavbar = ({text, icon}) => {
  return (
    <li>
        {text}{icon}
    </li>
  )
}

export default BtnNavbar