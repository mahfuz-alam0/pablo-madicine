import React from 'react';
import pres from '../../../assate/pres.png';
import './Prescription.css';

const Prescription = () => {

    const uploadButton = <>
        <div className='flex justify-center lg:ml-[-100px]'>
            <button className=' mt-5 w-full text-[14px] px-2 py-2 bg-lime-500 text-white rounded-full'>Upload Prescription</button>
        </div>
    </>

    const smallDevice = <>
        <div className='bg-slate-200 p-4 md:hidden rounded-md'>
            <div>
                <h2 className='text-[18px]  font-semibold head_test'>Upload your prescription and we’ll ship your medicines</h2>
            </div>
            <div className='grid small_grid gap-4 items-center'>
                <div>
                    <p className='mt-3 text-[14px]'>Our pharmacist will contact you to confirm your order and ship your meds</p>
                    {uploadButton}</div>
                <div>
                    <img src={pres} alt="" />
                </div>
            </div>
        </div>
    </>

    return (
        <div className='max-w-[1340px] mx-auto my-10 px-5'>
            <div className='main_grid p-5 bg-slate-200 rounded-lg hidden md:grid'>
                <div className='col_7 hidden lg:block'>
                    <div className='flex items-center rounded-full py-2'>
                        <div className='w-[60px] h-[35px] flex items-center  p number_round z-0'>
                            <p className='bg-white w-6 h-6 ml-1 rounded-full flex items-center justify-center'>1</p>
                        </div>
                        <div className='bg-white pl-5 ml-[-35px] rounded-r-full pr-3 p-[6px] '>
                            <p className='text-[13px]'>Upload a photo of your prescription</p>
                        </div>
                    </div>
                    <div className='flex items-center rounded-full py-2'>
                        <div className='w-[60px] h-[35px] flex items-center  p number_round z-0'>
                            <p className='bg-white w-6 h-6 ml-1 rounded-full flex items-center justify-center'>1</p>
                        </div>
                        <div className='bg-white pl-5 ml-[-35px] rounded-r-full pr-3 p-[6px] '>
                            <p className='text-[13px]'>Set delivery location and place the order</p>
                        </div>
                    </div>
                </div>

                {/* Upload button section/ midle section start// */}
                <div className='col_13 text-center'>
                    <h2 className='md:text-[24px] text-[12px] font-semibold head_test'>Upload your prescription and we’ll ship your medicines</h2>
                    <p className='mt-3'>Our pharmacist will contact you to confirm your order and ship your meds</p>
                </div>
                {/* Upload button section/ midle section end// */}

                <div className='img_col'>
                    <img src={pres} alt="" />
                </div>

                <div className='col_10 hidden lg:block'>
                    <div className='flex items-center rounded-full py-2'>
                        <div className='w-[60px] h-[35px] flex items-center number_round z-0'>
                            <p className='bg-white w-6 h-6 ml-1 rounded-full flex items-center justify-center'>1</p>
                        </div>
                        <div className='bg-white pl-5 ml-[-35px] rounded-r-full pr-3 p-[6px] '>
                            <p className='text-[13px]'>Pharmacist will check and add the medicines</p>
                        </div>
                    </div>
                    <div className='flex items-center rounded-full py-2'>
                        <div className='w-[60px] h-[35px] flex items-center number_round z-0'>
                            <p className='bg-white w-6 h-6 ml-1 rounded-full flex items-center justify-center'>1</p>
                        </div>
                        <div className='bg-white pl-5 ml-[-35px] rounded-r-full pr-3 p-[6px] '>
                            <p className='text-[13px]'>Review and approve the order. Your meds will be delivered</p>
                        </div>
                    </div>
                </div>
                <div className='col_10 button_upload mx-auto'>
                    {uploadButton}
                </div>
            </div>
            <div>
                {smallDevice}
            </div>
        </div>
    );
};

export default Prescription;