"use client";
import { useQuery } from "@tanstack/react-query";
import ImageSwiper from "./components/home-page/image-swiper";
import NewProductSection from "./components/home-page/new-product-section";
import axios from "axios";

export default function Home() {
  const { data, isLoading, isError, error } = useQuery(
    ["trending-products"],
    () => axios.get("https://fakestoreapi.com/products")
  );

  console.log("products", data);
  return (
    <main className="home-page-wrapper flex flex-col mx-2">
      <ImageSwiper />
      <NewProductSection data={data?.data} loading={isLoading} />
    </main>
  );
}
