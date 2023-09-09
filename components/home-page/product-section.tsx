import React from "react";
import ProductBanner from "../reusable/product-banner-card";
import ProductSwiper from "./product-swiper";
import { Main } from "@/dto/data-type";

function ProductSection({ data ,title}: { data: Main[],title:string }) {
  return (
    <div className="product-section-wrapper flex flex-col sm:flex-row gap-5">
      <ProductBanner
        title={title}
        imageurl="/home/pc_background.png"
        url="/products/womens"
      />
      <ProductSwiper data={data} type="" />
    </div>
  );
}

export default ProductSection;
