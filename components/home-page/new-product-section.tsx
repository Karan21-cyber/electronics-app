import Link from "next/link";
import React, { Suspense } from "react";
import ProductSwiper from "./product-swiper";
import { Main } from "@/dto/data-type";

interface InewProduct {
  data: Main[];
}
function NewProductSection({ data }: InewProduct) {
  return (
    <section className="new-product-section flex flex-col gap-3 mt-5">
      <div className="new-product-section-header flex justify-between items-center">
        <h1 className="new-product-title text-lg lg:text-[22px] font-semibold text-center ">
          New Products
        </h1>
        <Link
          href={`/products/new`}
          className="newproduct-link text-[10px] lg:text-[13px] font-normal text-right text-sky-blue underline "
        >
          See more new Products
        </Link>
      </div>

      <div className="new-product-lists">
        <ProductSwiper data={data} type="new" />
      </div>
    </section>
  );
}

export default NewProductSection;
