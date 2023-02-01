import React from 'react';
import indFlag from '../../assets/ind-flag.png';
import usaFlag from '../../assets/us-flag.png';
import ukFlag from '../../assets/uk-flag.png';

import './TopHeader.css';


const TopHeader = () => {
    return (
        <div className='TopHeader flex justify-between px-14 py-4'>
            <div className="left flex">
                <div className="flex px-2">
                <img className='px-2' src={indFlag} alt="" />
                    <a href='/'>+91 8000 161161</a>
                </div>
                <div className="flex px-2">
                <img className='px-2' src={usaFlag} alt="" />
                    <a href='/'>+1 309 791 4105</a>
                </div>
                <div className="flex px-2">
                <img className='px-2' src={ukFlag} alt="" />
                    <a href='/' >+44 20 8133 8639</a>
                </div>
                
            </div>
            <div className="right">
                <a href='/' className='bg-white py-2 px-5 rounded-full shadow-xl'>Press Release</a>
                <a href='/' className='bg-white mx-4 py-2 px-5 rounded-full shadow-xl'>Our Fresh Work</a>
                <a href='/' className=' text-white  py-2 px-5 rounded-full ScheduleButton shadow-xl'>Schedule Call</a>
            </div>
        </div>
    );
};

export default TopHeader;