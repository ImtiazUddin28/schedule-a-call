import React from 'react';
import './Subscription.css';
const Subscription = () => {
    return (
        <div className='mt-20'>
            <div className='grid grid-cols-3'>
            <div className="help ">
                <h1 className='text-3xl font-bold py-5 help_header'>Help</h1>
                <a className='block py-2 hover:text-red-600' href="/">Contact Us</a>
                <a className='block py-2 hover:text-red-600' href="/">Privacy Policy</a>
                <a className='block py-2 hover:text-red-600' href="/">Sitemap</a>
                <a className='block py-2 hover:text-red-600' href="/">Global</a>
            </div>
            <div className="newsletter col-span-2 ">
                <h1 className='text-3xl font-bold py-5'><span className='subscribe'>Subscribe</span> To Our Newsletter</h1>
                <p className='py-3'>Stay updated with latest technology trends and topics with us.</p>
                <div>
                    <input type="email" className='mr-3 shadow-inner text-white rounded py-5 px-6 w-8/12 text-sm bg-gray-900 border-b border-gray-700' placeholder='Email@company.com' />
                    <button className='-ml-28'>Subscribe</button>
                </div>
            </div>
            </div>
            <div className="bottom mt-12">
                <p className='text-center'>© 2023 <span>Hyperlink InfoSystem</span> | All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Subscription;