import React from 'react';
import MainLogo from '../../assets/logo.svg'

const Header = () => {
    return (
        <div className='flex justify-between'>
            <div className="logo">
                
                <img src={MainLogo} alt="" />
               
            </div>
            <div className='menus'>
                
                    <button>Company</button>
                    <button>Servies</button>
                    <button>Hire Developers</button>
                    <button>Case Study</button>
                    <button>Resources</button>
                    <button>Contact Us</button>
                    <button>Get A Free Quote</button>
            </div>
        </div>
    );
};

export default Header;