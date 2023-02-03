import React from 'react';
import "./Banner.css";
import Arrow from "../../assets/arrow-right-white.svg";

const Banner = () => {
    return (
        <div className='banner z-50 bg-blue-400 -mb-24 mx-48 rounded-3xl py-6 mt-10'>
            <h1 className='text-3xl font-bold text-white text-center p-5'>Let's Create Big Stories Together</h1>
            <p className='text-xl text-white text-center px-28'>Mobile is in our nerves. We don't just build apps, we create brand. Choosing us will be your best decision.</p>
            <div className='flex mx-auto justify-center'><a href="/" className='bg-red-600 flex  text-white py-3 p-6 my-8 shadow-xl ml-2'>Get A Quote <img className='px-2' src={Arrow} alt="" /> </a>
            
            </div>
        </div>
    );
};

export default Banner;