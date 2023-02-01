import React from 'react';
import Logo from '../../assets/logosite.png';
import icon from '../../assets/in-icon.svg';
const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={Logo} alt="" />
                <img src={icon} alt=""/>
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