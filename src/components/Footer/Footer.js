import React from 'react';
import Location from './Location/Location';
import Services from './Services/Services';
import Subscription from './Subscription/Subscription';

const Footer = () => {
    return (
        <div>
            <Services></Services>
            <Location></Location>
            <Subscription></Subscription>
        </div>
    );
};

export default Footer;