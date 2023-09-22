import React from "react";
import ProductBanner from "../reusable/product-banner-card";
import ProductSwiper from "./product-swiper";
import { Main } from "@/dto/data-type";

interface ProductSectionProps {
  data: Main[];
  title:string,
  image:string,
}

function ProductSection({ data ,title , image}: ProductSectionProps) {
  const product = data?.filter((product) => product.category === title.toLocaleLowerCase());

  return (
    <div className="product-section-wrapper flex flex-col sm:flex-row gap-5">
      <ProductBanner
        title={title}
        imageurl={image}
        url={`/products/${title.split(" ").join("-").toLocaleLowerCase()}`}
      />
      <ProductSwiper data={product} type="" />
    </div>
  );
}

export default ProductSection;
