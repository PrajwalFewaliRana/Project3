import React from 'react'
import {BiChevronDown} from "react-icons/bi"

const Navbar = () => {
  return (
    <div className='px-[80px] w-full shadow-xl bg-white flex items-center justify-between py-[20px] '>
        <h1 className='text1 text-[22px] leading-tight font-semibold'>Travellian</h1>
        <ul className='flex items-center font-semibold text-[15px] gap-[60px] leading-tight'>
            <li className='text1 flex items-center cursor-pointer'>Explore <BiChevronDown /> </li>
            <li className='cursor-pointer'>Top Charts</li>
            <li className='cursor-pointer'>Blog</li>
            <li className='cursor-pointer'>Help</li>

        </ul>
        <div className='flex items-center gap-[15px]'>
            <button className='text1 px-[15px] py-[7px] border-[1px] rounded-md border-[#0266ff] font-semibold text-[12px] leading-tight'>Sign In</button>
            <button className='bg1 px-[15px] py-[8px] text-white rounded-md font-semibold text-[12px] leading-tight'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar