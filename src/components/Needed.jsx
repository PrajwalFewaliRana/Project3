import React from "react";
import { HiOutlineLogin } from "react-icons/hi";
import { FaCreditCard } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";

const Needed = () => {
  return (
    <div className="mx-[80px] mt-[150px] mb-[70px]">
      <h1 className="text-center font-bold text-[55px] leading-tight">
        Things you need to
      </h1>
      <p className="text-center font-semibold tracking-wider leading-tight text-[#000000a2] my-[35px]">
        Our goal is to provide you with a well-planned,safe <br /> vacation at a
        price you can afford.
      </p>
      <div className="flex items-center justify-between w-full mt-[50px]">
        <div className="px-[50px] py-[40px] group rounded-xl border-[1px] border-[#0266ff] hover:bg-[#0266ff] hover:shadow-2xl hover:shadow-[#0266ff] shadow-lg shadow-[#000000a2]  w-[31%] cursor-pointer active:scale-105 duration-150 ease-in-out">
          <HiOutlineLogin className="text-[75px] group-hover:text-white mb-[25px]" />
          <h3 className="my-[15px] group-hover:text-white font-semibold text-[20px] leading-tight">
            Sign Up
          </h3>
          <p className="group-hover:text-[#ffffffa2] text-[#000000a2] font-[500] text-[14px] leading-tight">
            Complete all the work associated with planning and processing.
          </p>
        </div>
        <div className="px-[50px] py-[40px] group rounded-xl border-[1px] border-[#0266ff] hover:bg-[#0266ff] hover:shadow-2xl hover:shadow-[#0266ff] shadow-lg shadow-[#000000a2]  w-[31%] cursor-pointer active:scale-105 duration-150 ease-in-out">
          <FaCreditCard className="text-[75px] group-hover:text-white mb-[25px] " />
          <h3 className="my-[15px] group-hover:text-white font-semibold text-[20px] leading-tight">
            Worth of Money
          </h3>
          <p className="group-hover:text-[#ffffffa2] text-[#000000a2] font-[500] text-[14px] leading-tight">
            After successfull access then book from exclusive deals and prizing.
          </p>
        </div>
        <div className="px-[50px] py-[40px] group rounded-xl border-[1px] border-[#0266ff] hover:bg-[#0266ff] hover:shadow-2xl hover:shadow-[#0266ff] shadow-lg shadow-[#000000a2]  w-[31%] cursor-pointer active:scale-105 duration-150 ease-in-out">
          <SiYourtraveldottv className="text-[75px] group-hover:text-white mb-[25px] " />
          <h3 className="my-[15px] group-hover:text-white font-semibold text-[20px] leading-tight">
            Exciting Travel
          </h3>
          <p className="group-hover:text-[#ffffffa2] text-[#000000a2] font-[500] text-[14px] leading-tight">
            Start and explore a wide range of exciting travel and experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Needed;
