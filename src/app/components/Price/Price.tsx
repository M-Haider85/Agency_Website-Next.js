import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import PriceCard from './PriceCard'

export default function Price() {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <SectionHeading headingMini={'Deal for your business'} headingPrimary={'Meet Our Pricing Plan That Suits You'} />
        <div className='w-[80%] mx-auto grid pt-[6rem] gap-[2rem] lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
            <div 
            data-aos="fade-right"
            //data-aos-delay="600"
            data-aos-anchor-placement="top-center"
            >
                <PriceCard bg="bg-[#007f5f]" price='19.99' num='1' plan='Starter'/>
            </div>
            <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor-placement="top-center"
            >
                <PriceCard bg="bg-[#023e8a]" price='34.99' num='2' plan='Premium'/>
            </div>
            <div
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-anchor-placement="top-center"
            >
                <PriceCard bg="bg-[#7b2cbf]" price='49.99' num='3' plan='Premium Pro'/>
            </div>
        </div>
    </div>
  )
}
//2d0e56
