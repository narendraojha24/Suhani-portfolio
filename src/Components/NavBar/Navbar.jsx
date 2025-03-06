import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nabvar'>
      
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>   
        <li>Portfolio</li>
        <li>Contact</li>    
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar