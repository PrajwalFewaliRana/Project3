import React from "react";
import img1 from "../assets/about1.jpg";
import img2 from "../assets/about2.jpg";
import img3 from "../assets/about3.jpg";

const About = () => {
  return (
    <div className="mx-[80px]">
      <h1 className="text-center font-bold text-[60px] leading-tight">
        <span className="text1">About</span> Us
      </h1>
      <p className="text-center font-semibold tracking-wider leading-tight text-[#000000a2] mb-[40px] mt-[10px]">
        We plan beautiful destination every weekend.
      </p>
      <div className="flex items-center justify-between h-[75vh]">
        <div className="h-full w-[27vw] rounded-lg">
          <img src={img1} className="h-full w-full object-cover rounded-lg" alt="" />
        </div>
        <div className="h-full w-[27vw] rounded-lg">
        <img src={img2} className="h-full w-full object-cover rounded-lg" alt="" />

        </div>
        <div className="h-full w-[27vw] rounded-lg">
        <img src={img3} className="h-full w-full object-cover rounded-lg" alt="" />

        </div>
      </div>
      <p className="text-center text-[#000000a2] my-[30px] font-semibold tracking-wider leading-tight">
        Arranging a healthy and beautiful trip is our main goal. We <br />{" "}
        consider our success to be able to offer our users the right <br />{" "}
        journey and a beautiful trip.
      </p>
      <div className="flex items-center justify-center gap-[130px]">
        <div>
          <p className="text1 font-semibold text-[35px]">4.5k+</p>
          <p className="text-[14px] text-[#000000a2] font-semibold leading-tight">Our Explores</p>
        </div>
        <div>
          <p className="text1 font-semibold text-[35px]">15k+</p>
          <p className="text-[14px] text-[#000000a2] font-semibold leading-tight">Destinations</p>
        </div>
        <div>
          <p className="text1 font-semibold text-[35px]">35+</p>
          <p className="text-[14px] text-[#000000a2] font-semibold leading-tight">Work Experience</p>
        </div>
      </div>
    </div>
  );
};

export default About;
