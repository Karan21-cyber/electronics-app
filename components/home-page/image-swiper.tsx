"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const images = ["/home/image1.png", "/home/image1.png", "/home/image1.png"];

const ImageSwiper = () => {
  return (
    <div className="swiper-container relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{
          nextEl: ".custom-button-next", // Corrected class selector
          prevEl: ".custom-button-prev", // Corrected class selector
        }}
        modules={[Navigation, Autoplay]}
        className="my-swiper "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[82px] lg:h-[355px] sm:h-[173px]">
              <Image
                src={image}
                fill
                alt={`Image ${index + 1}`}
                className="absolute object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-button-next absolute right-0 text-white text-[20px] p-2 bg-slate-800 font-bold z-10  top-[50%] transform -translate-y-[50%]">
        {">"}
      </div>
      <div className="custom-button-prev absolute left-0 top-[50%] text-white text-[20px] p-2 bg-slate-800 font-bold z-10 -translate-y-[50%]">
        {"<"}
      </div>
    </div>
  );
};

export default ImageSwiper;
