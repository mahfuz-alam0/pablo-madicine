import React from 'react';
import './Footer.css';
import logo from '../../assate/logo.png';
import googlePlay from '../../assate/googlePlay.png';
import appStore from '../../assate/AppStore.png';
import { FaEnvelope, FaFacebook, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1340px] mx-auto px-5'>
            <div className='grid footer'>
                <div>
                    <img src={logo} alt="" />
                    <div>
                        <ul className='flex items-center my-5 gap-4'>
                            <li className='bg-black text-white p-2 rounded-full text-lg cursor-pointer'><FaFacebook /></li>
                            <li className='bg-black text-white p-2 rounded-full text-lg cursor-pointer'><FaTwitter /></li>
                            <li className='bg-black text-white p-2 rounded-full text-lg cursor-pointer'><FaLinkedinIn /></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='grid grid-cols-2 gap-2'>
                            <div>
                                <ul>
                                    <li className='text-lg font-bold mb-6'>Quick Link</li>
                                    <li className='my-3 cursor-pointer hover:underline'>Brands</li>
                                    <li className='my-3 cursor-pointer hover:underline'>Offer</li>
                                    <li className='my-3 cursor-pointer hover:underline'>Fearther Products</li>
                                    <li className='my-3 cursor-pointer hover:underline'>Stores</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className='text-lg font-bold mb-6'>Legal</li>
                                    <li className='my-3 cursor-pointer hover:underline'>Terms & Condition</li>
                                    <li className='my-3 cursor-pointer hover:underline'>Privacy polici</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li className='text-lg font-bold mb-6'>Reach us</li>
                                <li className='flex gap-3 my-3'><FaPhoneAlt className='text-xl' />+1012 3456 789</li>
                                <li className='flex gap-3 my-3'><FaEnvelope className='text-xl' />demo@gmail.com</li>
                                <li className='flex gap-3 my-3'><FaMapMarkerAlt className='text-5xl' />132 Dartmouth Street Boston, Massachusetts 02156 United States</li>
                            </ul>
                        </div>
                    </div>
                    <div className='my-5'>
                        <div className='grid grid-cols-2 gap-3 max-w-[500px]'>
                            <img src={googlePlay} alt="" />
                            <img src={appStore} alt="" />
                        </div>
                        <p className='sm:text-[22px]'>&copy; Pablo Pharmacy 2022. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;