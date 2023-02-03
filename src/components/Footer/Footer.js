import React from 'react';
import Location from './Location/Location';
import Services from './Services/Services';
import Subscription from './Subscription/Subscription';
const Footer = () => {
    return (
        <div className="footer bg-black absolute -z-10  text-white py-16 px-16">
            <Services></Services>
            <Location></Location>
            <Subscription></Subscription>
        </div>
    );
};

export default Footer;