import React from 'react'
import ButtonBlue from '../Buttons/ButtonBlue'
import ButtonRed from '../Buttons/ButtonRed'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto'>
            <div className='col-span-2'>
                <h1 
                data-aos="fade-left"
                className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e]
                leading-[2.4rem] md:leading-[4rem]'>Exploring Innovative Paths To Cultivate Your Business</h1>
                <p 
                data-aos="fade-right"
                data-aos-delay="200"
                className='md:text-[17px] text-[15px] mb-[2rem] text-black opacity-90 font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus.
                Suspendisse in laoreet ex, porttitor pharetra turpis. Integer vulputate scelerisque nibh eget bibendum. 
                Duis pellentesque convallis ante eu scelerisque. In eleifend placerat molestie. Etiam in elit mauris.</p>
                <div 
                data-aos="zoom-in"
                data-aos-delay="400"
                className='flex items-center space-x-4 md:space-x-6 mt-5'>
                    <ButtonBlue text="Get Started"/>
                    <ButtonRed text="Explore Features"/>
                </div>
            </div>
            <div 
            data-aos="fade-left"
            data-aos-delay="600"
            className='col-span-3 hidden sm:block'>
                <Image 
                src='/hero.svg'
                alt='Hero'
                width={800}
                height={800}
                />
            </div>
        </div>
    </div>
  )
}
