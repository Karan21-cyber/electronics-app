import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard() {
  return (
    <div className="blog-card-wrapper flex flex-col gap-4 w-[256px]  border ">
      <Link href={`/products/`} className={`image-wrapper relative  `}>
        <Image
          src={"/products/blog-image.png"}
          width={233}
          height={150}
          alt="blog-image"
          className="object-cover transition delay-400 ease-out hover:scale-110"
        />
      </Link>
      <h1 className="blog-description line-clamp-6 ">
        If you’ve recently made a desktop PC or laptop purchase, you might want
        to consider adding peripherals to enhance your home office setup, your
        gaming rig, or your business workspace
      </h1>
      <p className="blog-date text-light-gray ">01.09.2020</p>
    </div>
  );
}

export default BlogCard;
