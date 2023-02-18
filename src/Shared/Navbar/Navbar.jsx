import React from 'react';
import './Navbar.css';
import logo from '../../assate/logo.png';
import phone from '../../assate/short_phone.png';
import { FaAngleDown, FaBars, FaMobileAlt, FaRegHeart, FaSearch, FaShoppingBasket, FaStoreAlt, FaUserAlt } from "react-icons/fa";


const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    console.log(isOpen)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const searchBar = <>
        <div className=' gap-2 border border-green-600 rounded-lg md:rounded-full bg-white flex items-center w-full'>
            <div className='flex items-center gap-2 w-[50%]'>
                <div className='text-3xl text-gray-600 pl-2'><FaStoreAlt /></div>
                <div>
                    <span className='text-xs texxt-black'>Select Store</span>
                    <p className='font-semibold text-sm text-gray-500 overflow-hidden h-5 lg:h-auto text-ellipsis'>Pablo Pharmacy Av. de las Adelfas</p>
                </div>
                <div><FaAngleDown /></div>
            </div>
            <span className='w-[3px] h-6 bg-gray-500 rounded-md'></span>
            <div className='flex items-center gap-2 text-gray-500 w-[50%]'>
                <FaSearch /><input className='mr-3 w-full p-2 bg-white' placeholder='Write you Product Name' />
            </div>
        </div>
    </>

    const navbars = <>
        <ul className='flex gap-2 flex-col md:flex-row text-white justify-center py-3 uppercase'>
            <li className='flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-lime-600'>All Catagories <FaAngleDown /></li>
            <li className=' p-2 cursor-pointer rounded-md hover:bg-lime-600'>Brands</li>
            <li className=' p-2 cursor-pointer rounded-md hover:bg-lime-600'>offers</li>
            <li className=' p-2 cursor-pointer rounded-md hover:bg-lime-600'>Featured Products</li>
            <li className=' p-2 cursor-pointer rounded-md hover:bg-lime-600'>Stores</li>
            <li className=' p-2 cursor-pointer rounded-full bg-white text-black hover:bg-gray-200 uppercase flex gap-2 items-center'><FaMobileAlt />Get the app</li>
        </ul>
    </>

    return (
        <div>
            <div className='max-w-[1540px] mx-auto px-5'>
                <div className='nav_item grid items-center py-5 '>
                    <div className='flex gap-3'>
                        <div className='md:hidden'>
                            <FaBars onClick={toggle} />
                        </div>
                        <img className='w-[160px]' src={logo} alt="" />
                    </div>
                    <div className='hidden md:block search_bar mx-auto w-full'>
                        {searchBar}
                    </div>
                    <div className='flex gap-6 text-xl text-gray-500 justify-end'>
                        <FaRegHeart />
                        <FaShoppingBasket />
                        <FaUserAlt />
                    </div>
                </div>
            </div>
            <div className='bg-lime-500'>
                <div className='max-w-[1340px] mx-auto h-auto'>
                    <div className='hidden md:block md:bl'>
                        {navbars}
                    </div>
                    <div className='block md:hidden px-5 py-2'>
                        {searchBar}
                    </div>
                </div>
                <div className={`absolute bg-lime-500 w-full overflow-scroll px-5 z-10  duration-500 origin-top ${!isOpen ? 'scale-y-0  ' : ''}`} >
                    {navbars}
                    <img src={phone} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;