import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { PopularDestination } from "../data/data";
import "@splidejs/react-splide/css";
import "../pagination.css"

const Popular = () => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: false,
    keyboard: "global",
    gap: "3.6rem",
    pagination: true,
    padding: "0rem",
    arrows: false,
    autoplay:true,
    interval:1700,
    breakpoints: {
      1200: { perPage: 4 },
      991: { perPage: 4 },
      768: { perPage: 1 },
      500: { perPage: 1 },
      425: { perPage: 1 },
    },
  };
  return (
    <div className="mx-[80px] mt-[130px] mb-[150px]">
      <h1 className="text-center font-bold text-[55px] leading-tight mb-[40px]">
        Popular <span className="text1">Destination</span>
      </h1>

      <Splide options={splideOptions}>
        {PopularDestination.map((item, index) => (
          <SplideSlide key={index}>
            <div className="h-[350px] w-[250px] rounded-xl">
              <img
                src={item.img}
                alt="item/img"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <p className="font-semibold text-md leading-tight mt-[10px] tracking-wider">{item.name}</p>
            <div className="flex items-center text-[#000000a5] gap-[5px] my-[3px]">
              <p className="text-[20px] leading-[24px]">{item.icon}</p>
              <p className="leading-[24px] font-medium text-[13px]">{item.location}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-semibold text1 leading-tight">{item.price}</p>
              <button className="bg1 text-white text-[12px] leading-tight rounded-md py-[7px] px-[10px] hover:scale-105">{item.btn}</button>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Popular;
