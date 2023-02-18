import React from 'react';
import logo from '../../assate/logo.png';
import { FaAngleDown, FaSearch, FaShoppingBasket, FaStoreAlt, FaUserAlt } from "react-icons/fa";

const Topbar = () => {

    return (
        <div className='max-w-[1340px] mx-auto px-5'>
            <div className='flex justify-between items-center py-5 '>
                <div>
                    <img className='w-[160px]' src={logo} alt="" />
                </div>
                <div className='ml-[-100px] gap-2 border border-green-600 rounded-full flex items-center max-w-[800px]'>
                    <div className='flex items-center gap-2'>
                        <div className='text-3xl text-gray-600 pl-2'><FaStoreAlt /></div>
                        <div>
                            <span className='text-xs'>Select Store</span>
                            <p className='font-semibold text-sm text-gray-500'>Pablo Pharmacy Av. de las Adelfas</p>
                        </div>
                        <div><FaAngleDown /></div>
                    </div>
                    <span className='w-[3px] h-6 bg-gray-500 rounded-md'></span>
                    <div className='flex items-center gap-2 text-gray-500'><FaSearch /><input className='mr-3 w-[300px] p-2' placeholder='Write you Product Name' /></div>
                </div>
                <div className='max-w-[260px] flex gap-6 text-xl text-gray-500'>
                    <FaShoppingBasket />
                    <FaUserAlt />
                </div>
            </div>
        </div>
    );
};

export default Topbar;