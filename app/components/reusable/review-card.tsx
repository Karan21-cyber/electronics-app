import Image from "next/image";
import React from "react";

function ReviewCard() {
  return (
    <div className="review-card-wrapper  w-full flex flex-col bg-[#F5F7FF] py-4">
      <div className="review-detail-wrapper flex gap-4">
        <Image
          src={"/home/review_icon.png"}
          width={50}
          height={50}
          alt="review-image"
          className="object-contain"
        />
        <h1 className="review-description text-lg font-normal">
          My first order arrived today in perfect condition. From the time I
          sent a question about the item to making the purchase, to the shipping
          and now the delivery, your company, Tecs, has stayed in touch. Such
          great service. I look forward to shopping on your site in the future
          and would highly recommend it.
        </h1>
      </div>
      <h1 className="review-name text-right text-sm font-normal">- John Doe</h1>
      <button className="review-button text-sm w-[200px] mt-10 font-semibold text-center px-6 py-2 text-[#0156FF] border-[#0156FF] border-2 rounded-[50px]">
        Leave Us A Review
      </button>
    </div>
  );
}

export default ReviewCard;
