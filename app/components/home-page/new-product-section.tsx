"use client";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import ProductCard from "../reusable/product-card";
import { Main } from "@/app/dto/dto";
import ProductLoading from "../loading/productloading";

interface InewProduct {
  data: Main[];
  loading: boolean;
}
function NewProductSection({ data, loading }: InewProduct) {
  return (
    <section className="new-product-section flex flex-col gap-3 mt-5">
      <div className="new-product-section-header flex justify-between items-center">
        <h1 className="new-product-title text-lg lg:text-[22px] font-semibold text-center ">
          New Products
        </h1>
        <Link
          href={"#"}
          className="newproduct-link text-[10px] lg:text-[13px] font-normal text-right text-sky-blue underline "
        >
          See more new Products
        </Link>
      </div>

      <div className="new-product-lists flex gap-1 items-center flex-wrap">
        {loading ? (
          <ProductLoading />
        ) : (
          <>
            {data?.map((item) => (
              <ProductCard key={item?.id} product={item} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default NewProductSection;
