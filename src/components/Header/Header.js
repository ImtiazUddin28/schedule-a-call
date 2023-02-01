import React from 'react';
import MainLogo from '../../assets/logo.svg'

const Header = () => {
    return (
        <div>
            <div className="logo">
                
                <img src={MainLogo} alt="" />
               
            </div>
            <div className='menus'>
                <ul>
                    <li>Company</li>
                    <li>Servies</li>
                    <li>Hire Developers</li>
                    <li>Case Study</li>
                    <li>Resources</li>
                    <li>Contact Us</li>
                </ul>
                <button>Get A Free Quote</button>
            </div>
        </div>
    );
};

export default Header;