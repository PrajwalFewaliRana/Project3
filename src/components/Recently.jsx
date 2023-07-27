import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { RecentTrips } from "../data/data";
import "@splidejs/react-splide/css";
import "../pagination.css"

const Recently = () => {
  const splideOptions = {
    perPage: 3,
    perMove: 1,
    type: "loop",
    rewind: false,
    keyboard: "global",
    gap: "2rem",
    pagination: true,
    padding: "0rem",
    arrows: false,
    autoplay:true,
    interval:1700,
    pauseOnFocus:false,
    pauseOnHover:false,
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 4 },
      768: { perPage: 1 },
      500: { perPage: 1 },
      425: { perPage: 1 },
    },
  };
  return (
    <div className="mx-[80px] mt-[130px] mb-[150px]">
      <h1 className="text-center font-bold text-[55px] leading-tight mb-[20px]">
        <span className="text1">Recently</span> Viewed Trips
      </h1>
      <p className="text-center font-semibold tracking-wider leading-tight text-[#000000a2] mb-[40px]">Some recent trip photos are shared in front of you</p>

      <Splide options={splideOptions}>
        {RecentTrips.map((item, index) => (
          <SplideSlide key={index}>
            <div className="h-[310px] w-[370px] rounded-xl">
              <img
                src={item.img}
                alt="item/img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <p className="font-semibold text-2xl leading-tight mt-[10px] tracking-wider">{item.name}</p>
            <div className="flex items-center gap-[7px] my-[10px]">
              <span className="text-[#FFD700]">{item.icon}</span>
              <span className="text-[#FFD700]">{item.icon}</span>
              <span className="text-[#FFD700]">{item.icon}</span>
              <span className="text-[#FFD700]">{item.icon}</span>
              <span className="text-[#FFD700]">{item.icon}</span>
              <span className="text-[14px] leading-tight font-medium text-[#000000d2]">{item.ratings}</span>
            </div>
            <p className="text-sm text-[#00000088]">{item.text}</p>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Recently;
