import React from 'react';
import './Logo.css';
import homer from './homer.png';
import Tilt from 'react-tilt';


const Logo = () => {
    return (
        <div className='logo'>
            <Tilt className="Tilt" options={{ max : 45 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner"><img src={homer} alt="logo"/> </div>
            </Tilt>     
        </div>
    )
}

export default Logo