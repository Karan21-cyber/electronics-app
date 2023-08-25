import { Main } from "@/app/dto/dto";
import React from "react";
interface IProduct {
  product: Main;
}

function ProductCard({ product }: IProduct) {
  return (
    <div
      className={`product-card-wrapper w-full flex-col items-center mx-[25px] border`}
    >
      <div className="in-stock-wrapper">{product?.title}</div>
    </div>
  );
}

export default ProductCard;
