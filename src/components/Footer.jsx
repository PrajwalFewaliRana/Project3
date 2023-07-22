import React from "react";
import {
  BsPinterest,
  BsInstagram,
  BsTwitter,
  BsFacebook,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex justify-between mx-[80px] my-[50px]">
      <div>
        <div>
          <h1 className="font-semibold text-[25px] leading-tight">Travellian</h1>
          <p className="text-[#000000a5] font-[500] text-[14px] leading-tight my-[15px]">Continue Travellian 2023 all rights reserved</p>
        </div>
        <div>
          <h1 className="font-semibold text-[25px] leading-tight mt-[40px]">Follow Us On</h1>
          <div className="flex items-center text-[#000000a5] gap-[25px] mt-[15px]">
            <BsPinterest className="h-5 w-5"/>
            <BsInstagram className="h-5 w-5" />
            <BsTwitter className="h-5 w-5" />
            <BsFacebook className="h-5 w-5" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="cursor-ponter font-semibold text-[25px] leading-tight mb-[10px]">Menu</h1>
        <p className="cursor-ponter text-[#000000c4] font-[500] text-[16px] leading-[35px]">Home</p>
        <p className="cursor-ponter text-[#000000c4] font-[500] text-[16px] leading-[35px]">Explore</p>
        <p className="cursor-ponter text-[#000000c4] font-[500] text-[16px] leading-[35px]">Blog</p>
        <p className="cursor-ponter text-[#000000c4] font-[500] text-[16px] leading-[35px]">Cities</p>
        <p className="cursor-ponter text-[#000000c4] font-[500] text-[16px] leading-[35px]">Help</p>
      </div>
      <div>
        <h1 className="cursor-ponter font-semibold text-[25px] leading-tight mb-[10px]">Information</h1>
        <p className="cursor-ponter text-[#000000c4] font-[500] text-[16px] leading-[35px]">Destination</p>
        <p className="cursor-ponter text-[#000000c4] font-[500] text-[16px] leading-[35px]">About Us</p>
        <p className="cursor-ponter text-[#000000c4] font-[500] text-[16px] leading-[35px]">Things</p>
        <p className="cursor-ponter text-[#000000c4] font-[500] text-[16px] leading-[35px]">Recently Trip</p>
        <p className="cursor-ponter text-[#000000c4] font-[500] text-[16px] leading-[35px]">Best Service</p>
        <p className="cursor-ponter text-[#000000c4] font-[500] text-[16px] leading-[35px]">Discount</p>
      </div>
      <div>
        <h1 className="font-semibold text-[25px] leading-tight mb-[10px]">Contact</h1>
        <p className="text-[#000000c4] font-[500] text-[16px] leading-[35px]">+123 456 789</p>
        <p className="text-[#000000c4] font-[500] text-[16px] leading-[35px]">Explore</p>
        <p className="text-[#000000c4] font-[500] text-[16px] leading-[35px]">Info@Travellian.com</p>
        <p className="text-[#000000c4] font-[500] text-[16px] leading-[35px]">1245,New York,USA</p>
      </div>
    </div>
  );
};

export default Footer;
