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
    <div className="swiper-container flex justify-center">
      <div className="swiper-wrapper w-full lg:w-[80%]">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="my-swiper "
        >
          {Array(4)
            .fill("_")
            .map((_, index) => (
              <SwiperSlide key={index + 1}>
                <ReviewCard />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewSection;
