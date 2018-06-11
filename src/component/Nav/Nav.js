import React from 'react';
import './Nav.css';
// home , aboutus,contactus, search doctors, Help

const nav = () => {
    return(
        <div className='Outerdiv'>
            <img alt = 'Logo' src='../../assests/Logo/medical-app.png' className='Logo'/>
            <div className='innerdivButtons'>    
                <button className='navButton'>Home</button>
                <button className='navButton'>About Us</button>
                <button className='navButton'>Search Doctors</button>
                <button className='navButton'>Contact Us</button>
                <button className='navButton'>Help</button>
            </div>
        </div>
    );
}
export default nav;