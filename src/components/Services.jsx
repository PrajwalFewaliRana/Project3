import React from "react";
import img1 from "../assets/services1.jpg";
import img2 from "../assets/services2.jpg";
import img3 from "../assets/services3.jpg";
import img4 from "../assets/services4.jpg";

const Services = () => {
  return (
    <div className=" mx-[80px] flex items-center gap-[100px]">
      <div className=" grid grid-cols-2 grid-rows-2 gap-[15px] w-[35.5vw]  ">
        <div className="w-[235px] rounded-xl h-[40vh]">
          <img
            src={img1}
            alt="img/1"
            className="rounded-xl h-full w-full object-cover"
          />
        </div>
        <div className="w-[235px] rounded-xl h-[40vh]">
          <img
            src={img2}
            alt="img/2"
            className="rounded-xl h-full w-full object-cover"
          />
        </div>
        <div className="w-[235px] rounded-xl h-[40vh]">
          <img
            src={img3}
            alt="img/3"
            className="rounded-xl h-full w-full object-cover"
          />
        </div>
        <div className="w-[235px] rounded-xl h-[40vh]">
          <img
            src={img4}
            alt="img/4"
            className="rounded-xl h-full w-full object-cover"
          />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-[40px] leading-2">
            We always try you to give the <br />
           <span className="text1">best service</span>
        </h1>
        <p className="text-[#00000062] font-[500] text-[14px] leading-tight my-[20px] tracking-wide">We always want all our customers to get a good entertainment from our trip. <br />
            So we have put in a lot of entertainment. You will really understand everything <br />
            on the trip with us. Besides, there will be no shortage of any kind on our trip, no <br />
            matter which site it is.
        </p>
        <div className="flex items-center justify-center gap-[130px]">
          <div className="">
            <p className="text1 font-semibold text-[35px] text-center">3k+</p>
            <p className="text-[14px] text-[#000000a2] font-semibold leading-tight">
              Success Tour
            </p>
          </div>
          <div>
            <p className="text1 font-semibold text-[35px] text-center">8k+</p>
            <p className="text-[14px] text-[#000000a2] font-semibold leading-tight">
              Happy Travelers
            </p>
          </div>
          <div>
            <p className="text1 font-semibold text-[35px] text-center">12+</p>
            <p className="text-[14px] text-[#000000a2] font-semibold leading-tight">
              Year Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
