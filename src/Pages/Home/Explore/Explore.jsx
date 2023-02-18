import React from 'react';
import './Explore.css';
import playStore from '../../../assate/googlePlay.png';
import shortPhone from '../../../assate/short_phone.png';
import { FaApple, FaGooglePlay } from 'react-icons/fa';


const Explore = () => {
    return (
        <div className='max-w-[1340px] mx-auto px-5 my-10'>
            <div className='bg-lime-500 rounded-md relative'>
                <div>
                    <h2 className='font-semibold text-center text-white md:text-3xl py-5'>Explore whole new experiences</h2>
                    <p className='text-sm text-center md:text-xl text-white'>Order & track your medicines on the move </p>
                    <p className='text-center text-white md:text-xl my-3'>Download the App now</p>
                </div>
                <div className='flex gap-4 px-5 max-w-[400px] mx-auto pb-5'>
                    <div className='px-3 flex items-center border w-full bg-white rounded-md gap-2'>
                        <div className='text-2xl'><FaApple/></div>
                        <div>
                            <span className='text-[8px]'>Download on the</span>
                            <p className='text-[12px]'>App Store</p>
                        </div>
                    </div>
                    <div className='px-3 flex items-center border w-full bg-white rounded-md gap-2'>
                        <div className='text-2xl'><FaGooglePlay/></div>
                        <div>
                            <span className='text-[8px]'>Get it on</span>
                            <p className='text-[12px]'>Google Play</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;