import React from 'react';
import indFlag from '../../../assets/ind-flag.png';
import usaFlag from '../../../assets/us-flag.png';
import ukFlag from '../../../assets/uk-flag.png';
import Mumbai from '../../../assets/mumbai.png'
import India from '../../../assets/india.png';
import Usa from '../../../assets/usa.png';
import Uk from '../../../assets/uk.png';

import './Location.css';
const Location = () => {
    return (
        <div>
            <h1 className='location-heading text-3xl font-bold py-5 my-6 '>Locate US</h1>
            <div className='grid grid-cols-4 gap-2'>
                <div className='flex'>

                        <img className='w-20 h-24' src={Mumbai} alt="" />
                        <div className=''>
                            <div className='flex px-3'>
                            <img className='w-6 h-4 my-1 mr-2' src={indFlag} alt="" />
                            <h1 className='font-bold'>INDIA &#40;HQ&#41;</h1>
                            </div>
                            <p className='text-xs px-3'>C-106/B, Ganesh Meridian, Opp. Gujarat High Court, S. G. Highway, Ahmedabad, Gujarat, 380061</p>
                            <h2 className='text-sm px-3'>+91 8000-161161</h2>
                        </div>
                   
                </div>
                <div className='flex'>
                    
                        <img className='w-20 h-24' src={India} alt="" />
                    
                        <div>
                            <div className='flex px-3'>
                            <img className='w-6 h-4 my-1 mr-2' src={indFlag} alt="" />
                            <h1 className='font-bold'>MUMBAI OFFICE</h1>
                            </div>
                            <p className='text-xs px-3'>Level 8, Vibgyor Towers, G Block, C62 Bandra Kurla Complex, Mumbai 400 098</p>
                            <h2 className='text-sm px-3'>+91 8000-161161</h2>
                        </div>
                    
                </div>
                <div className='flex'>
                    
                        <img className='w-20 h-24' src={Usa} alt="" />
                    
                    
                        <div>
                            <div className='flex px-3'>
                            <img className='w-6 h-4 my-1 mr-2' src={usaFlag} alt="" />
                            <h1 className='font-bold'>USA OFFICE</h1>
                            </div>
                            <p className='text-xs px-3'>One World Trade Center, 285 Fulton Street suite 8500, New York, NY 10007, United States.</p>
                            <h2 className='text-sm px-3'>+1 309 791 4105</h2>
                        </div>
                    
                </div>
                <div className='flex'>
                    
                        <img className='w-20 h-24' src={Uk} alt="" />
                        <div>
                            <div className='flex pl-3'>
                            <img className='w-6 h-4 my-1 mr-2' src={ukFlag} alt="" />
                            <h1 className='font-bold'>UK OFFICE</h1>
                            </div>
                            <p className='text-xs pl-3'>evel 30, The Leadenhall Building, 122 Leadenhall Street, London EC3V 4AB</p>
                            <h2 className='text-sm pl-3'>+44 20 8133 8639</h2>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Location;