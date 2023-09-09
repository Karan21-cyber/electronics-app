import Image from "next/image";
import Link from "next/link";
import React from "react";
import StarRating from "./rating";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Main } from "@/dto/data-type";

interface IProduct {
  product: Main;
  type: string;
}

function ProductCard({ product, type }: IProduct) {
  return (
    <div className={`product-card-wrapper flex py-2 justify-center border `}>
      <div className="product-detail-wrapper flex flex-col gap-2">
        <h1 className="in-stock-wrapper text-light-green text-[10px]  flex items-center gap-2 ">
          <BsFillCheckCircleFill size={10} />
          <span> in stock</span>
        </h1>
        <div className="image-wrapper flex justify-center">
          {" "}
          <Link
            href={`/products/${type}/${product?.id}`}
            className={`image-wrapper relative  items ${
              type === "new" ? "w-[100px] h-[100px]" : "w-[150px] h-[150px]"
            }`}
          >
            <Image
              src={product?.image}
              fill
              alt={product?.title}
              className=" absolute object-contain transition delay-400 ease-out hover:scale-110 "
            />
          </Link>
        </div>

        <div className="rating-wrapper flex items-center gap-2">
          <StarRating rating={product?.rating?.rate} />
          <h1 className="rating-title text-[10px] font-normal text-center text-light-gray">
            Reviews {`(${product?.rating?.count})`}
          </h1>
        </div>

        <h1 className="product-title line-clamp-3 h-[50px] w-[147px] text-[11px] font-normal ">
          {product?.title}
        </h1>
        <h1 className="product-price  text-[14px] font-semibold">
          ${product?.price}
        </h1>
      </div>
    </div>
  );
}

export default ProductCard;
