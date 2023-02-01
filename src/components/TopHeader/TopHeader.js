import React from 'react';
import indFlag from '../../assets/indiaflag.png';
import usaFlag from '../../assets/usaflag.png';
import ukFlag from '../../assets/ukflag.png';

import './TopHeader.css';


const TopHeader = () => {
    return (
        <div className='flex justify-between'>
            <div className="left flex">
                <div className="flex">
                <img src={indFlag} alt="" />
                    <h1>+91 8000 161161</h1>
                </div>
                <div className="flex">
                <img src={usaFlag} alt="" />
                    <h1>+1 309 791 4105</h1>
                </div>
                <div className="flex">
                <img src={ukFlag} alt="" />
                    <h1>+44 20 8133 8639</h1>
                </div>
                
            </div>
            <div className="right">
                <button className='w-32'>Press Release</button>
                <button>Our Fresh Work</button>
                <button>Schedule Call</button>
            </div>
        </div>
    );
};

export default TopHeader;