import React from 'react';
import MainLogo from '../../assets/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-between px-16 shadow-lg py-4 z-50 sticky'>
            <div className="logo">
                
                <img src={MainLogo} alt="" />
               
            </div>
            <div className='menus my-4'>
                    <a href='/' className='px-2 text-lg' >Company </a>
                    <a href='/' className='px-2 text-lg'>Services</a>
                    <a href='/' className='px-2 text-lg'>Hire Developers</a>
                    <a href='/' className='px-2 text-lg'>Case Study</a>
                    <a href='/' className='px-2 text-lg'>Resources</a>
                    <a href='/' className='px-2 text-lg'>Contact Us</a>
                    <a href='/' className='bg-white py-4 font-semibold px-6 rounded-full shadow-xl ml-2'>Get A Free Quote</a>
            </div>
        </div>
    );
};

export default Header;