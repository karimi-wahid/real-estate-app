import React from 'react';
import logo from '../images/logo1.png';

const Navbar = () => {
  return (
    <nav id='navbar'>
        <a href='#' className='logo'>
            <img src={logo} alt='logo' />
        </a>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' for='menu-btn' >
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href='#header' className='active'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#agents'>Agents</a></li>
            <li><a href='#property'>Property</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        <a href='#' className='property'>Properties</a>

    </nav>
  )
}

export default Navbar