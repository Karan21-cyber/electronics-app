import Image from "next/image";
import Link from "next/link";
import React from "react";

function AdsCard() {
  return (
    <div className="ads-wrapper py-4 bg-[#F5F9FF] text-[#272560] flex flex-col sm:flex-row gap-5 justify-center items-center">

      <Image
        src="/home/ads_image.png"
        width={37}
        height={16}
        alt="ads-logo"
        className="ads-logo object-contain md:w-[77] md:h-[27] "
      />
      <p className="sm:pl-4 sm:border-l-2 sm:border-[#00AEB8] text-xs sm:text-base md:text-lg"><span className="font-semibold">own</span> it now, up to 6 months interest free</p>
      <Link href={"#"} className="learn-more cursor-pointer underline text-sm sm:text-base">learn more</Link>
    </div>
  );
}

export default AdsCard;
