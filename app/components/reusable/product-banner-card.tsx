import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Ibanner {
  url: string;
  imageurl: any;
  title: string;
}
function ProductBanner({ url, imageurl, title }: Ibanner) {
  const bannerStyle = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: "cover",
  };

  return (
    <div
      className={`banner-wrappper relative  w-full sm:min-w-[190px] sm:w-[230px] h-[82px] sm:h-[256px]`}
      style={bannerStyle}
    >
      <Image
        src={imageurl}
        fill
        alt={title}
        className=" absolute object-cover"
        priority
      />
      <div className="absolute  z-1 w-full flex flex-col py-2 gap-2 justify-center items-center text-white top-[50%] transform -translate-y-[50%]">
        <h1 className="banner-title text-lg font-bold">{title}</h1>
        <Link href={url} className="banner-link text-xs font-normal text-center underline">
          See All Products
        </Link>
      </div>
    </div>
  );
}

export default ProductBanner;
