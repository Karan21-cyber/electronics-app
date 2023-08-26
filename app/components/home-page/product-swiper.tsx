"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Main } from "@/app/dto/dto";
import ProductCard from "../reusable/product-card";

interface InewProduct {
  data: Main[];
}

const ProductSwiper = ({ data }: InewProduct) => {
  return (
    <div className="swiper-container relative flex flex-wrap ">
      <Swiper
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 2,
          },
          375: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1440: {
            slidesPerView: 6.5,
          },
        }}
        freeMode
        navigation={{
          nextEl: ".new-custom-button-next",
          prevEl: ".new-custom-button-prev",
        }}
        modules={[Navigation]}
        className="my-swiper"
      >
        {data?.slice(0, 8).map((product) => (
          <SwiperSlide
            key={Math.random()}
            className="swiper-product min-w-[190px] min-h-[256px] w-[190px] h-[256px]"
          >
            <ProductCard product={product} type="new" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="new-custom-button-next absolute right-0 text-white text-[20px] p-2 rounded-[50%] bg-slate-800 font-bold z-10  top-[50%] transform -translate-y-[50%]">
        {">"}
      </div>
      <div className="new-custom-button-prev absolute left-0 top-[50%] text-white text-[20px] p-2 rounded-[50%] bg-slate-800 font-bold z-10 -translate-y-[50%]">
        {"<"}
      </div>
    </div>
  );
};

export default ProductSwiper;
