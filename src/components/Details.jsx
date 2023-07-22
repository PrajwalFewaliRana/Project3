import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

const Details = () => {
  return (
    <div className="mx-[80px] mt-[90px] mb-[60px]">
      <div className="shadow1  p-[20px] flex items-center justify-between  bg-white rounded-lg">
        <div>
          <div className="flex items-center gap-[3px]">
            <CiLocationOn className="text1 h-5 w-5" />
            <p className="font-semibold">Location</p>
            <BiChevronDown className="h-5 w-5 text-[#000000a2]" />
          </div>
          <p className=" text-[#000000a2] text-[14px] tracking-wider">
            Where do you wanna go?
          </p>
        </div>
        <div>
          <div className="flex items-center gap-[3px]">
            <BsPeople className="text1 h-5 w-5 " />
            <p className="font-semibold">People</p>
            <BiChevronDown className="h-5 w-5 text-[#000000a2]" />
          </div>
          <p className=" text-[#000000a2] text-[14px] tracking-wider">
            How many people?
          </p>
        </div>
        <div>
          <div className="flex items-center gap-[3px]">
            <MdOutlineDateRange className="text1 h-5 w-5" />
            <p className="font-semibold">Date</p>
            <BiChevronDown className="h-5 w-5 text-[#000000a2]" />
          </div>
          <p className=" text-[#000000a2] text-[14px] tracking-wider">
            When do you want to go there?
          </p>
        </div>
        <button className="bg1 text-white font-[530] text-[14px] tracking-wider py-[7px] px-[15px] rounded-md">
          Explore
        </button>
      </div>
      <div className="mt-[20px]">Popular Searches: <span className="text-[#000000a2]">Hiking, Starbucks, Fishing, Hotels</span></div>
    </div>
  );
};

export default Details;
