import React from 'react'
import Image from 'next/image';

export default function SupportTeam() {
    const Icon1 = '/icon1.png';
    const Icon7 = '/icon7.png';
    const SupportTeamImg = '/supportteam.jpg';
  return (
    <div className='pt-[7rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
            <div>
                <h1 className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e]
                leading-[2.4rem] md:leading-[4rem]'>Do you need help? Our Support Team is ready to help you.</h1>
                <p className='text-gray-900 opacity-90 text-[17px] mt-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus.
                Suspendisse in laoreet ex, porttitor pharetra turpis. Integer vulputate scelerisque nibh eget bibendum. 
                Duis pellentesque convallis ante eu scelerisque. In eleifend placerat molestie. Etiam in elit mauris.</p>
                <div className='flex items-center space-x-6 mt-[2rem]'>
                    <Image 
                    src={Icon1}
                    alt='icon1'
                    width={60}
                    height={60}
                    />
                    <div>
                        <h1 className='text-[18px] text-gray-900 font-[500] mb-[0.5rem]'>Email Client Support</h1>
                        <p className='w-[90%] md:w-[70%] text-[15px] text-black opacity-85'>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus. Etiam in elit mauris.</p>
                    </div>
                </div>
                <div className='flex items-center space-x-6 mt-[2rem]'>
                    <Image 
                    src={Icon7}
                    alt='icon7'
                    width={60}
                    height={60}
                    />
                    <div>
                        <h1 className='text-[18px] text-gray-900 font-[500] mb-[0.5rem]'>Live Ticket Support</h1>
                        <p className='w-[90%] md:w-[70%] text-[15px] text-black opacity-85'>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Duis placerat tincidunt sem in dapibus. Etiam in elit mauris.</p>
                    </div>
                </div>
            </div>
            <div 
            data-aos="fade-left"
            //data-aos-delay="600"
            data-aos-anchor-placement="top-center"
            >
                <Image 
                src={SupportTeamImg}
                alt='support'
                 width={800}
                 height={800}
                />
            </div>
        </div>

    </div>
  )
}
