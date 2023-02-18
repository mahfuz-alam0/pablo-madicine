import React from 'react';
import brand1 from '../../../assate/brand1.png';
import brand2 from '../../../assate/brand2.png';
import brand3 from '../../../assate/brand3.png';
import brand4 from '../../../assate/brand4.png';


const Brands = () => {
    const items = [
        {
            "id": 1,
            "img": brand1
        },
        {
            "id": 2,
            "img": brand2
        },
        {
            "id": 3,
            "img": brand3
        },
        {
            "id": 4,
            "img": brand4
        }
    ]
    return (
        <div className='max-w-[1340px] mx-auto px-5'>
            <div className='flex justify-between items-center my-10'>
                <span className='text-3xl'>Brands <span className='font-semibold'>For you</span></span>
                <span className='hover:underline cursor-pointer uppercase text-sm'>View all</span>
            </div>
            <div className='flex justify-between gap-3 my-10'>
                {
                    items.map(item => (
                        <div key={item.id} className='border p-3 rounded-md'>
                            <img className='rounded-md' src={item.img} alt="" />
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Brands;