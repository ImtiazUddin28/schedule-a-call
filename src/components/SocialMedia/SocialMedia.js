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
        <div>
            <div className='socialHeading'>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedIn} alt="" />
                <img src={youtube} alt="" />
                <img src={topapp} alt="" />
            </div>
            <div className='socialIcons'></div>
        </div>
    );
};

export default SocialMedia;