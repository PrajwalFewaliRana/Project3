import React from 'react'
import img from "../assets/50.png"

const OurOffers = () => {
  return (
    <div className='flex items-center gap-[240px] mt-[60px] mx-[80px]'>
        <div>
            <h1 className='font-bold text-[60px] leading-[70px]'>Let's enjoy the <br />
                world's beauty <br />
                with <span className='text1'>50% off</span>
            </h1>
            <p className='text-[#00000075] font-[500] text-[14px] leading-[20px] my-[20px]'>We are running a special offer of 50% off. Don't <br />
                forget to take a trip on this offer.
            </p>
            <div className='flex items-center gap-[15px]'>
                <button className='bg1 text-white hover:scale-105 duration-150 ease-in-out font-medium py-[10px] px-[20px] text-[16px] leading-tight rounded-md'>Trip with offer</button>
                <button className='text1 border-[1px] hover:scale-105 duration-150 ease-in-out border-[#0266ff] py-[9px] px-[20px] font-medium text-[16px] leading-tight rounded-md'>See more offer</button>
            </div>
        </div>
        <div className='h-[70vh] w-auto'>
            <img src={img} alt="img/50" className='h-full w-full object-cover' />
        </div>
    </div>
  )
}

export default OurOffers