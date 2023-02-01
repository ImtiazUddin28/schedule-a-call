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
        <div className='flex'>
            <div className='socialHeading'>
               <h1>Social Media</h1>
               <p>Don’t Miss To Follow Us On Our Social
                    Networks Accounts.</p>
            </div>
            <div className='flex socialIcons'>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedIn} alt="" />
                <img src={youtube} alt="" />
                <img src={topapp} alt="" />
            </div>
        </div>
    );
};

export default SocialMedia;