import React from 'react'

import logo from '../../images/Mesh_Relay_Logo.png'
import './header.css'

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="Mesh Relay Logo" />
    </header>
  )
}

export default Header
