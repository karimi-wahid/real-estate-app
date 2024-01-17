import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='header' id="header">
        <Navbar />
        <div className='intro'>
            <p>Looking for a Property</p>
            <h1><span>Buy</span>and<span>Sell</span>Properties</h1>
            <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum enim debitis quae at itaque veritatis repudiandae ipsum, dolorum iure.</p>
            <a href='#' className='header-btn'>Details</a>
        </div>
    </div>
  )
}

export default Header