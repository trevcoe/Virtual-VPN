import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import './Pricing.css';

function Pricing() {
  return (
    <IconContext.Provider value={{color: '#fff', size: 64}}>
    <div>
        <div className="pricing__section">
            <div className="pricing__wrapper">
                <h1 className="pricing__heading">Pricing</h1>
                <div className="pricing__container">
                    <Link to="/sign-up" className='pricing__container-card'>
                        <div className="pricing__container-cardInfo">
                            <div className="icon">
                                <FaFire />
                            </div>
                            <h3>Starter</h3>
                            <h4>$4.99</h4>
                            <p>per month</p>
                            <ul className="pricing__container-features">
                                <li>10 mbps download speed</li>
                                <li>Access to 24/7 online safety experts</li>
                                <li>50 gb data cap</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>
                                Choose Plan
                            </Button>
                        </div>
                    </Link>
                    <Link to="/sign-up" className='pricing__container-card'>
                        <div className="pricing__container-cardInfo">
                            <div className="icon">
                                <BsXDiamondFill />
                            </div>
                            <h3>Gold</h3>
                            <h4>$9.99</h4>
                            <p>per month</p>
                            <ul className="pricing__container-features">
                                <li>100 mbps download speed</li>
                                <li>High priority connection</li>
                                <li>100 gb per month data cap</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>
                                Choose Plan
                            </Button>
                        </div>
                    </Link>
                    <Link to="/sign-up" className='pricing__container-card'>
                        <div className="pricing__container-cardInfo">
                            <div className="icon">
                                <GiCrystalize />
                            </div>
                            <h3>Diamond</h3>
                            <h4>$24.99</h4>
                            <p>per month</p>
                            <ul className="pricing__container-features">
                                <li>Unlimited download speed</li>
                                <li>Highest priority connection</li>
                                <li>No data caps</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>
                                Choose Plan
                            </Button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </IconContext.Provider>
  )
}

export default Pricing