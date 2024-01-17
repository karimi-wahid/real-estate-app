import React from 'react';
import Propertybox from './Propertybox';
import pimage1 from '../images/p1.png';
import pimage2 from '../images/p2.png';
import pimage3 from '../images/p3.png';

const Properties = () => {
  return (
    <div className='product' id='property'>
        <div className="p-heading">
            <h3>Properties</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, alias.</p>
        </div>
        <div className="product-container">
            <Propertybox image={pimage1} name='Al-Kabara' price='$240,989' />
            <Propertybox image={pimage2} name='Al-Musalla' price='$500,2000' />
            <Propertybox image={pimage3} name='Al-Hafz' price='$700,3500' />
        </div>
    </div>
  )
}

export default Properties;