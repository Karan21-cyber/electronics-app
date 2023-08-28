import Image from "next/image";
import React from "react";

function ReviewCard() {
  return (
    <div className="review-card-wrapper  w-full flex flex-col gap-4 bg-[#F5F7FF] py-4 px-3">
      <div className="flex justify-center">
        <Image
          src={"/home/review_icon.png"}
          width={20}
          height={20}
          alt="review-image"
          className="object-contain md:w-[50] md:h-[50] text-center "
        />
      </div>
      <h1 className="review-description text-xs md:text-lg font-normal">
        My first order arrived today in perfect condition. From the time I sent
        a question about the item to making the purchase, to the shipping and
        now the delivery, your company, Tecs, has stayed in touch. Such great
        service. I look forward to shopping on your site in the future and would
        highly recommend it.
      </h1>
      <h1 className="review-name text-right text-[10px] md:text-sm font-normal">- John Doe</h1>
      <button className="review-button text-sm w-[200px] mt-2 font-semibold text-center px-6 py-2 text-[#0156FF] border-[#0156FF] border-2 rounded-[50px]">
        Leave Us A Review
      </button>
    </div>
  );
}

export default ReviewCard;
