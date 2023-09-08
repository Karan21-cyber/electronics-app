"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import ReviewCard from "../reusable/review-card";

function ReviewSection() {
  return (
    <div className="swiper-container flex w-full lg:px-[10%] lg:py-10 justify-center ">
      <div className="swiper-wrapper relative ">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true, el: ".review-swiper-pagination" }}
          modules={[Pagination, Autoplay]}
          className="review-swiper-container "
        >
          {Array(4)
            .fill("_")
            .map((_, index) => (
              <SwiperSlide key={index + 1} >
                <ReviewCard />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="review-swiper-pagination absolute top-[100%]  z-[99] flex gap-3"></div>{" "}
      </div>
    </div>
  );
}

export default ReviewSection;
