import React from 'react';

const Subscription = () => {
    return (
        <div>
            <div className="help">
                <h1>Help</h1>
                <a href="/">Contact Us</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Sitemap</a>
                <a href="/">Global</a>
            </div>
            <div className="newsletter">
                <h1>Subscribe To Our Newsletter</h1>
                <p>Stay updated with latest technology trends and topics with us.</p>
                <div>
                    <input type="text" placeholder='Email@company.com' />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="bottom">
                <p>© 2023 <span>Hyperlink InfoSystem</span> | All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Subscription;