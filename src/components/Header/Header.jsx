import React from 'react'

import logo from '../../images/Mesh_Relay_Logo_Dark.png'

import './header.css'

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="Mesh Relay Logo - Crypto. For Us." />
    </header>
  )
}

export default Header
