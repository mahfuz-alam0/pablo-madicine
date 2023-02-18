import React from 'react';
import { FaRegHeart, FaShoppingBasket } from 'react-icons/fa';
import fearther1 from '../../../assate/fearther1.png';
import fearther2 from '../../../assate/fearther2.png';
import fearther3 from '../../../assate/fearther3.png';
import fearther4 from '../../../assate/fearther4.png';


const FeartherProducts = () => {

    const items = [
        {
            "id": 111,
            "img": fearther1,
            "name": "Huggies New Born XS 22 diapers",
            "price": 15.10
        },
        {
            "id": 222,
            "img": fearther2,
            "name": "Huggies New Born XS 22 diapers",
            "price": 15.10
        },
        {
            "id": 333,
            "img": fearther3,
            "name": "Huggies New Born XS 22 diapers",
            "price": 15.10
        },
        {
            "id": 444,
            "img": fearther4,
            "name": "Huggies New Born XS 22 diapers",
            "price": 15.10
        }
    ]

    function Product({ id, img, name, price }) {
        return (
            <div className="relative overflow-hidden border rounded-md">
                <img src={img} alt={name} className="w-full h-auto" />
                <button className="absolute mr-3 mt-3 top-0 right-0 p-2 shadow-md bg-white text-lime-500 rounded-full">
                    <FaRegHeart />
                </button>
                <p className='px-5 font-semibold'>{name}</p>
                <div className='flex justify-between items-center  px-5 my-3'>
                    <span>$ {price.toFixed(2)}</span>
                    <button className='flex items-center gap-2 p-2 hover:bg-lime-500 rounded-md hover:text-white duration-300 bg-white'>Add to <FaShoppingBasket /></button>
                </div>
            </div>
        );
    }

    return (

        <div>
            <div className='max-w-[1340px] mx-auto px-5'>
                <div className='flex justify-between items-center my-10'>
                    <span className='text-xl md:text-3xl'>Fearther <span className='font-semibold'>Projucts</span></span>
                    <span className='hover:underline cursor-pointer uppercase text-sm'>View all</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {items.map(item => (
                        <Product key={item.id} {...item} />
                    ))}
                </div>



            </div>
        </div>
    );
};

export default FeartherProducts;