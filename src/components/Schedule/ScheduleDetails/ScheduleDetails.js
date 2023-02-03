import React from 'react';

import logo from '../../../assets/logo.svg';
import clock from '../../../assets/clock2.png';
const ScheduleDetails = () => {
    return (
        <div className="border-2">
            <div className='border-b-2'>
                <img className='w-4/6 mx-auto py-12' src={logo} alt="" />
            </div>
            <div className='mx-6'>
                <p className='text-gray-400 my-2 font-semibold'>Hyperlink Infosystem</p>
                <h1 className='font-bold text-2xl mr-16'>Introduction Call With Hyperlink Infosystem</h1>
            </div>
            <div className='flex my-3'>
                <img className='w-9 h-9 ml-3' src={clock} alt="" />
                <p className='my-2 font-semibold'>30 min</p>
            </div>
            <div className='mx-6'>
                <p className='py-2'>Agenda:</p>
                <a className='block py-1' href="/">1. Introduction of Hyperlink infosystem</a>
                <a className='block py-1' href="/">2. Requirement understanding</a>
                <a className='block py-1' href="/">3. Similar work showcase</a>
                <a className='block py-1' href="/">4. Next actions</a>
            </div>
            <div className='my-6'>
                <a className='ml-6 text-sm text-blue-600 hover:underline' href="/">Cookie settings</a>
            </div>

        </div>
    );
};

export default ScheduleDetails;