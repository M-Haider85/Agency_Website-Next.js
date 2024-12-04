import { XMarkIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'

interface Props{
  nav: boolean;
  closeNav: () => void;
}

export default function MobileNav({nav, closeNav}:Props) {
  const navOpenStyle = nav ? "translate-x-0" : 'translate-x-[-100%]';

  return (
    <div className={`transform transition-all ${navOpenStyle} duration-500 fixed top-0 left-0 z-[200] h-[100vh]
    right-0 bottom-0 bg-[#07beb8]`}>
      <XMarkIcon 
      onClick={closeNav} 
      className='w-[2rem] h-[2rem] absolute top-[2rem] text-white hover:text-yellow-300 z-[202] right-[2rem]'/>
      <ul className='relative z-[201] space-y-10 flex flex-col justify-center h-[100%] items-center'>
            <li className='text-[25px] font-semibold cursor-pointer text-yellow-300'>
                <Link href='/'>Home</Link>
            </li>
            <li className='text-[25px] font-semibold cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
                <Link href='/'>About</Link>
            </li>
            <li className='text-[25px] font-semibold cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
                <Link href='/'>Services</Link>
            </li>
            <li className='text-[25px] font-semibold cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
                <Link href='/'>Clients</Link>
            </li>
            <li className='text-[25px] font-semibold cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
                <Link href='/'>Blogs</Link>
            </li>
        </ul>
      
      </div>
  )
}
