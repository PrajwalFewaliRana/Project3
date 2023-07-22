import React from 'react'
import img1 from "../assets/main1.jpg"
import img2 from "../assets/main2.jpg"
import img3 from "../assets/main3.jpg"

const Hero = () => {
  return (
    <div className='flex px-[80px] gap-[50px] justify-between mt-[40px]'>
        <div>
            <h1 className='font-bold text-[60px] leading-[90px] '>You can give us a tour to <span className='text1'>Remember</span> forever!</h1>
            <p className='mt-[10px] mb-[30px] font-semibold text-[#000000a2] tracking-wider'>
                We guarantee you that you will get many benifits when you tour <br /> with our agency. we guarantee you that you will get many <br /> benifits when you tour with our agency
            </p>
            <div className='flex gap-[20px]'>
                <button className='bg1 text-white hover:scale-105 duration-150 ease-in-out font-semibold py-[10px] px-[20px] text-[16px] leading-tight rounded-md'>Plan a trip</button>
                <button className='text1 border-[1px] hover:scale-105 duration-150 ease-in-out border-[#0266ff] py-[9px] px-[20px] font-semibold text-[16px] leading-tight rounded-md'>Search a trip</button>
            </div>
        </div>
        <div className='flex w-[40vw] h-[75vh] gap-[7px]'>
            <div className=' h-full w-[20vw] translate-y-[-5px]'>
                <div className='h-[50vh] rounded-xl w-full'>
                    <img src={img1} className='h-full w-full rounded-xl object-cover' alt="hero/img1" />
                </div>
                <div className='h-[25vh] rounded-xl w-full mt-[7px]'>
                    <img src={img2} className='h-full w-full rounded-xl object-cover' alt="hero/img2" />
                </div>
            </div>
            <div className='h-[75vh] w-[20vw] rounded-xl translate-y-[45px]'>
                <img src={img3} alt="hero.img3" className='h-full w-full rounded-xl object-cover' />
            </div>
        </div>
    </div>
  )
}

export default Hero