import React from 'react';
import fream1 from '../../../assate/Frame 23.png';

const Banner = () => {
    return (
        <div className='max-w-[1040px] mx-auto py-10 px-5'>
            <img className='w-full' src={fream1} alt="" />
            <div className='flex gap-2 pt-5 justify-center'>
                <span className='w-[50px] h-1 bg-gray-300 hover:bg-gray-700 rounded-md cursor-pointer'></span>
                <span className='w-[30px] h-1 bg-gray-300 hover:bg-gray-700 rounded-md cursor-pointer'></span>
                <span className='w-[20px] h-1 bg-gray-300 hover:bg-gray-700 rounded-md cursor-pointer'></span>
                <span className='w-[10px] h-1 bg-gray-300 hover:bg-gray-700 rounded-md cursor-pointer'></span>
            </div>
        </div>
    );
};

export default Banner;