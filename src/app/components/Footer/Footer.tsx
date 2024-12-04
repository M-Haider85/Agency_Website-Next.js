import React from 'react'

export default function Footer() {
  return (
    <div className='pt-[2rem] pb-[3rem] mb-[2px] bg-[#e9ecef] rounded-3xl'>
        <div className='w-[80%] mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-[2rem] md:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] items-start'>
          <div className='md:mx-auto mx-0'>
            <h1 className='text-[17px] text-gray-900 font-semibold mb-[1.5rem]'>Company</h1>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>About</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Affiliate</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Careers</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Blog</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Press</p>
          </div>
          <div className='md:mx-auto mx-0'>
            <h1 className='text-[17px] text-gray-900 font-semibold mb-[1.5rem]'>My Account</h1>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Press Inquiries</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Social Media</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Directories</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Image & B-roll</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Permissions</p>
          </div>
          <div className='md:mx-auto mx-0'>
            <h1 className='text-[17px] text-gray-900 font-semibold mb-[1.5rem]'>Information</h1>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Return Policy</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Terms & Conditions</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Privacy Policy</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Site Map</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>News & Offers</p>
          </div>
          <div className='md:mx-auto mx-0'>
            <h1 className='text-[17px] text-gray-900 font-semibold mb-[1.5rem]'>About Us</h1>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Support Center</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Offices Locations</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Customer Care</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Copyright & Claims</p>
            <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>FAQs</p>
          </div>
        </div>
        <div className='w-[80%] mx-auto mt-[1rem] text-[15px] text-gray-500 text-center'>Copyright © 2025 by WebSinc.</div>
    </div>
  )
}
