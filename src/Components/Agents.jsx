import React from 'react';
import Agentbox from './Agentbox';
import agentImage1 from '../images/s1.png';
import agentImage2 from '../images/s2.png';
import agentImage3 from '../images/s3.png';

const Agents = () => {
  return (
    <div className='agent' id='agents'>
        <div className='a-heading'>
            <h1>Agents</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quam.</p>
        </div>
        <div className='b-container'>
            <Agentbox image={agentImage1} name='Nadim' />
            <Agentbox image={agentImage2} name='Sadaf' />
            <Agentbox image={agentImage3} name='Massouda' />
        </div>
    </div>
  )
}

export default Agents