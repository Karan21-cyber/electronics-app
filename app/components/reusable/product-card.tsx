import { Main } from "@/app/dto/dto";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface IProduct {
  product: Main;
  type: string;
}

function ProductCard({ product, type }: IProduct) {
  const router = useRouter();
  return (
    <div
      className={`product-card-wrapper flex-col gap-4 items-center px-3 md:px-6 py-2  border `}
      onClick={() => router.push(`/products/${product?.id}`)}
    >
      <h1 className="in-stock-wrapper text-light-green text-[10px] text-center ">
        in stock
      </h1>
      <div className={`image-wrapper relative flex justify-center ${type==='small'? "w-[100px] h-[100px]" : "w-[150px] h-[150px]"}`}>
        <Image
          src={product?.image}
          fill
          alt={product?.title}
          className=" absolute object-contain items-center"
        />
      </div>

      <h1 className="product-title">{product?.title}</h1>
    </div>
  );
}

export default ProductCard;
