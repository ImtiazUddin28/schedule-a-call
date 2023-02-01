import React from 'react';
import indFlag from '../../../assets/ind-flag.png';
import usaFlag from '../../../assets/us-flag.png';
import ukFlag from '../../../assets/uk-flag.png';
import Mumbai from '../../../assets/mumbai.png'
import India from '../../../assets/india.png';
import Usa from '../../../assets/usa.png';
import Uk from '../../../assets/uk.png';

const Location = () => {
    return (
        <div>
            <h1>Locate US</h1>
            <div>
                <div>
                    <div>
                        <img src={Mumbai} alt="" />
                    </div>
                    <div>
                        <div>
                            <img src={indFlag} alt="" />
                            <h1>INDIA &#40;HQ&#41;</h1>
                            <p>C-106/B, Ganesh Meridian, Opp. Gujarat High Court, S. G. Highway, Ahmedabad, Gujarat, 380061</p>
                            <h2>+91 8000-161161</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={India} alt="" />
                    </div>
                    <div>
                        <div>
                            <img src={indFlag} alt="" />
                            <h1>MUMBAI OFFICE</h1>
                            <p>Level 8, Vibgyor Towers, G Block, C62 Bandra Kurla Complex, Mumbai 400 098</p>
                            <h2>+91 8000-161161</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={Usa} alt="" />
                    </div>
                    <div>
                        <div>
                            <img src={usaFlag} alt="" />
                            <h1>USA OFFICE</h1>
                            <p>One World Trade Center, 285 Fulton Street suite 8500, New York, NY 10007, United States.</p>
                            <h2>+1 309 791 4105</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={Uk} alt="" />
                    </div>
                    <div>
                        <div>
                            <img src={ukFlag} alt="" />
                            <h1>UK OFFICE</h1>
                            <p>evel 30, The Leadenhall Building, 122 Leadenhall Street, London EC3V 4AB</p>
                            <h2>+44 20 8133 8639</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;