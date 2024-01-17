import React from 'react';
import aboutImage from '../images/about.png';

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-mode1'>
            <img src={aboutImage} alt="about image" />
        </div>
        <div className='about-text'>
            <h2>We are the best Real Estate Company</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sapiente asperiores! Quam, blanditiis quisquam. Iure iusto sint ipsam vel corporis neque unde quisquam suscipit ut animi at quo quis amet esse illum in saepe inventore exercitationem quaerat, nemo libero soluta.</p>
            <button>View More Details</button>
        </div>
    </div>
  )
}

export default About