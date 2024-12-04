import Link from 'next/link'
import React from 'react'
import ButtonBlue from '../Buttons/ButtonBlue'
import Buttonred from '../Buttons/ButtonRed'
import { Bars3BottomRightIcon } from '@heroicons/react/16/solid'

interface Props {
    openNav: () => void;
}

export default function Nav({openNav}:Props) {
  return (
    <div className='h-[12vh] bg-[#e9ecef] shadow-md'>
        <div className='w-[85%] flex items-center justify-between mx-auto h-[12vh]'>
        <h1 className='text-[16px] md:text-[25px] font-bold text-slate-800'>
            <span className='text-[27px] md:text-[40px] text-red-600'>W</span>
            eb
            <span className='text-[27px] md:text-[40px] text-red-600'>S</span>
            inc.
        </h1>
        <ul className='hidden lg:flex items-center space-x-10'>
            <li className='text-[17px] font-medium cursor-pointer text-red-500'>
                <Link href='/'>Home</Link>
            </li>
            <li className='text-[17px] font-medium cursor-pointer hover:text-red-500 transition-all duration-200'>
                <Link href='/'>About</Link>
            </li>
            <li className='text-[17px] font-medium cursor-pointer hover:text-red-500 transition-all duration-200'>
                <Link href='/'>Services</Link>
            </li>
            <li className='text-[17px] font-medium cursor-pointer hover:text-red-500 transition-all duration-200'>
                <Link href='/'>Clients</Link>
            </li>
            <li className='text-[17px] font-medium cursor-pointer hover:text-red-500 transition-all duration-200'>
                <Link href='/'>Blogs</Link>
            </li>
        </ul>
        <div className='flex items-center space-x-2 md:space-x-5'>
            {/* Login Button*/}
            <ButtonBlue text={'Login'} />
            {/* Sign Up Button */}
            <Buttonred text={'Sign Up'} />
            <Bars3BottomRightIcon onClick={openNav}
            className='w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer'/>
        </div>
    </div>
    </div>
  )
}
