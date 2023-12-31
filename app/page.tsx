import AdsCard from "@/components/home-page/ads-card";
import BlogSection from "@/components/home-page/blog-section";
import ImageSwiper from "@/components/home-page/image-swiper";
import NewProductSection from "@/components/home-page/new-product-section";
import ProductSection from "@/components/home-page/product-section";
import ReviewSection from "@/components/home-page/review-section";
import TagsSection from "@/components/home-page/tags-section";
import { Main } from "@/dto/data-type";
import { Suspense } from "react";

async function getProducts(): Promise<Main[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data: Main[] = await getProducts();

  return (
    <main className="home-page-wrapper flex flex-col mx-2 md:mx-16 gap-3">
      <ImageSwiper />
      <Suspense fallback={"loading..."}>
        <NewProductSection data={data} />
      </Suspense>
      <AdsCard />
      <ProductSection data={data} title="Women's Fashion" />
      <ProductSection data={data} title="Men's Fashion" />
      <ProductSection data={data} title="Fashion's Items" />
      <TagsSection />
      <BlogSection />
      <ReviewSection />
    </main>
  );
}
