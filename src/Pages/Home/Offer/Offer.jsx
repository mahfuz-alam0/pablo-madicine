import React from 'react';
import { FaRegHeart, FaShoppingBasket } from 'react-icons/fa';
import offer1 from '../../../assate/offer1.png';
import offer2 from '../../../assate/offer2.png';
import offer3 from '../../../assate/offer3.png';
import offer4 from '../../../assate/offer4.png';


const items = [
    {
        id: 1,
        img: offer1,
        name: 'Huggies New Born XS 22 diapers',
        price: 18.1,
        discount: '50%',
    },
    {
        id: 2,
        img: offer2,
        name: 'Huggies New Born XS 22 diapers',
        price: 18.1,
        discount: '50%',
    },
    {
        id: 3,
        img: offer3,
        name: 'Huggies New Born XS 22 diapers',
        price: 18.1,
        discount: '50%',
    },
    {
        id: 4,
        img: offer4,
        name: 'Huggies New Born XS 22 diapers',
        price: 18.1,
        discount: '50%',
    },
];

const Offer = () => {
    return (
        <div className="max-w-[1340px] mx-auto px-5 my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {items.map((item) => (
                    <div key={item.id} className="relative bg-white rounded-lg overflow-hidden shadow">
                        <div className="absolute top-0 left-0 px-2 py-1 bg-black text-white font-semibold text-sm">{item.discount} off</div>
                        <button className="absolute top-0 right-0 p-2 shadow-md bg-white text-lime-500 rounded-full">
                            <FaRegHeart />
                        </button>
                        <img className="w-full h-auto object-cover object-center" src={item.img} alt={item.name} />
                        <div className="p-4">
                            <h3 className="text-gray-900 font-medium text-lg">{item.name}</h3>
                            <div className="flex justify-between mt-2">
                                <span className="text-gray-600 text-lg">${item.price}</span>
                                <button className='flex items-center gap-2 p-2 hover:bg-lime-700 rounded-md text-white duration-300 bg-lime-500'>Add to <FaShoppingBasket /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Offer;
