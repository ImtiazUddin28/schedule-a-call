import React from 'react';
import './SocialMedia.css';
import facebook from '../../assets/fb-icon.svg';
import twitter from '../../assets/tw-icon.svg';
import instagram from '../../assets/insta-icon.svg';
import linkedIn from '../../assets/in-icon.svg';
import youtube from '../../assets/yt-icon.svg';
import topapp from '../../assets/tp-icon.svg';
const SocialMedia = () => {
    return (
        <div className='flex justify-between px-14 py-4'>
            <div className='socialHeading'>
               <h1 className='text-3xl font-bold my-4'><span>Social</span> Media</h1>
               <p className='text-lg'>Don't Miss To Follow Us On Our Social </p>
               <p className='text-lg'>Networks Accounts.</p>      
            </div>
            <div className='flex socialIcons my-6'>
                <div className='w-20 h-20 p-6 mx-3 rounded-xl shadow-xl'><img src={facebook} alt="" /></div>
                <div className='w-20 h-20 p-6 mx-3 rounded-xl shadow-xl'><img src={twitter} alt="" /></div>
                <div className='w-20 h-20 p-6 mx-3 rounded-xl shadow-xl'><img src={instagram} alt="" /></div>
                <div className='w-20 h-20 p-6 mx-3 rounded-xl shadow-xl'><img src={linkedIn} alt="" /></div>
                <div className='w-20 h-20 p-6 mx-3 rounded-xl shadow-xl'><img src={youtube} alt="" /></div>
                <div className='w-20 h-20 p-6 mx-3 rounded-xl shadow-xl'><img src={topapp} alt="" /></div>
                     
            </div>
        </div>
    );
};

export default SocialMedia;