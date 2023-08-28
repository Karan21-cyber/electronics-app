import { Suspense } from "react";
import ImageSwiper from "./components/home-page/image-swiper";
import NewProductSection from "./components/home-page/new-product-section";
import { Main } from "./dto/dto";
import AdsCard from "./components/home-page/ads-card";
import ProductSection from "./components/home-page/product-section";
import TagsSection from "./components/home-page/tags-section";
import BlogSection from "./components/home-page/blog-section";
import ReviewSection from "./components/home-page/review-section";

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
    <main className="home-page-wrapper flex flex-col mx-2 gap-3">
      <ImageSwiper />
      <Suspense fallback={"loading..."}>
        <NewProductSection data={data} />
      </Suspense>
      <AdsCard />
      <ProductSection data={data} title="Women's Fashion" />
      <ProductSection data={data} title="Men's Fashion" />
      <ProductSection data={data} title="Fashion's Accessories" />
      <TagsSection />
      <BlogSection />
      <ReviewSection />
    </main>
  );
}
