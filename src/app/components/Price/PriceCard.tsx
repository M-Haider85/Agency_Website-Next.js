import React from 'react'
import ButtonBlue from '../Buttons/ButtonBlue';
import ButtonRed from '../Buttons/ButtonRed';
import { CheckIcon } from '@heroicons/react/16/solid';

interface Props {
    bg:string;
    price:string;
    num:string;
    plan:string;
}

export default function PriceCard({bg, price, num, plan}: Props) {
    const largeCard = num == "2" ? 'lg:scale-110 scale-100 z-[100]' : "";
  return (
    <div className={`relative ${largeCard} bg-gray-100 shadow-md transform`}>
        <div className={`${bg} h-[200px] flex flex-col items-center justify-center rounded-t-md`}>
            <p className='text-[20px] text-[#ffedd8] font-[700] mb-[1.5rem]'>{plan}</p>
            <h1 className='text-[20px] text-white'>
                <span className='text-[30px] text-[#90e0ef] font-bold'>${price}/</span>
                month.
            </h1>
        </div>
        <div className='p-4 mt-[1rem] text-center'>
            <p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 
            text-black opacity-90 mb-[1rem]'>Full Access Library</p>
            <p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 
            text-black opacity-90 mb-[1rem]'>Multiple Websites</p>
            <p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 
            text-black opacity-90 mb-[1rem]'>Next JS Project</p>
            <p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 
            text-black opacity-90 mb-[1rem]'>Mern Stact Project</p>
            <p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 
            text-black opacity-90 mb-[1rem]'>Cloud Security Integration</p>

            <div className='mt-[1.5rem] mb-[1.5rem] text-center'>
                {num != "2" && <ButtonRed text='Choose Plan'/>}
                {num == "2" && <ButtonBlue text='Choose Plan'/>}
            </div>
        </div>
    </div>
  )
}
