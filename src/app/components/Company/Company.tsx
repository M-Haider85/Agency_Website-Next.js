import React from 'react'
import Image from 'next/image'

export default function Company() {
    const CompanyImg = '/company.png';
  return (
    <div className='pt-[6rem] pb-[3rem]'>
        <h1 className='mb-[1.5rem] font-bold text-[22px] text-center md:text-[30px] text-[#02073e]'>
            Companies who also worked with us.
        </h1>
        <p className='w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto text-[17px] text-center text-gray-950
        opacity-80'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus.
                Suspendisse in laoreet ex, porttitor pharetra turpis. Integer vulputate scelerisque nibh eget bibendum. 
                Duis pellentesque convallis ante eu scelerisque. In eleifend placerat molestie. Etiam in elit mauris.
        </p>
        <p className='text-center mt-[1.7rem] font-[500] cursor-pointer 
        text-blue-500 hover:text-blue-800 hover:underline'>Explore Details</p>
        <div className='text-center mt-[2rem] w-[60%] mx-auto'>
            <Image
            src={CompanyImg}
            alt='Companies'
            width={900}
            height={900}
            />
        </div>
    </div>
  )
}
