import React from 'react';
import './Categories.css';
import { FaLongArrowAltRight, FaSearch, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import cat1 from '../../../assate/cat1.png';
import cat2 from '../../../assate/cat-2.png';
import cat3 from '../../../assate/cat3.png';
import cat4 from '../../../assate/cat4.png';
import flash1 from '../../../assate/flash1.png';
import flash2 from '../../../assate/flash2.png';



const Categories = () => {

    const items = [
        {
            "id": 1,
            "img": cat1,
            "price": 15.10

        },
        {
            "id": 2,
            "img": cat2,
            "price": 15.10

        },
        {
            "id": 3,
            "img": cat3,
            "price": 15.10

        },
        {
            "id": 4,
            "img": cat4,
            "price": 15.10

        }
    ]

    const flash_sell_item = [
        {
            "id": 1,
            "img": flash1,
        },
        {
            "id": 2,
            "img": flash2,
        }
    ]

    return (
        <div className='my-20 max-w-[1340px] mx-auto px-5'>
            <h1 className='text-4xl uppercase'>Categories</h1>
            <div className='xl:px-5 category'>
                <div className=''>
                    

                    <div className='hidden lg:block'>
                        <div className='flex items-center gap-2 p-2 bg-slate-200 mt-10 rounded-md mb-5'>
                            <div className='px-2'> <FaSearch /></div>
                            <input className='p-2 w-full bg-slate-200 ' placeholder='Search' />
                        </div>
                        <div>
                            <ul className='border-r-2 border-lime-700'>
                                <li className='py-8 cursor-pointer'>Oral care</li>
                                <li className='py-8 cursor-pointer'>Beauty & skin</li>
                                <li className='py-8 cursor-pointer'>Cardiovascular</li>
                                <li className='py-8 cursor-pointer'>Diabetic nutrition</li>
                                <li className='py-8 cursor-pointer'>Diaper & weapers</li>
                                <li className='py-8 cursor-pointer'>Digestion</li>
                                <li className='py-8 cursor-pointer'>Healthcare devices</li>
                            </ul>
                        </div>
                        <div className='mt-5'>
                            <Link className='w-full p-4 bg-black text-white flex items-center gap-2 justify-center rounded-lg'>All Categories <FaLongArrowAltRight /></Link>
                        </div>
                    </div>
                </div>
                <div className='product_by_cat'>
                    {items.map((item) => (
                        <div key={item.id} className='relative '>
                            <img className='w-full h-full' src={item.img} alt="" />
                            <div className='absolute inset-0 flex flex-col items-center justify-center px-6 opacity-0 hover:opacity-100 duration-500 bg-gray-500 bg-opacity-50 rounded-xl'>
                                <p className='text-lg py-3 text-white'>Huggies New Born XS 22 diapers</p>
                                <div className='flex gap-5 w-full bg-gray-300 bg-opacity-25 items-center justify-between text-lg rounded-xl'>
                                    <span className='px-5 sm:text-[16px] text-[12px]'>$: {item.price.toFixed(2)}</span>
                                    <button className='bg-lime-600 text-white px-4 py-2 hover:bg-gray-700 flex items-center gap-2 rounded-xl sm:text-[16px] text-[12px]'>
                                        Add to Cart <FaShoppingBag />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {flash_sell_item.map((item) => (
                        <div key={item.id} className='relative hidden md:block'>
                            <img className='w-full' src={item.img} alt="" />
                            <div className='absolute inset-0 flex flex-col items-center justify-center px-6 duration-500 bg-gray-500 bg-opacity-60 rounded-xl'>
                                <p className='text-4xl font-semibold py-3 text-white'>Flash Sell</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;