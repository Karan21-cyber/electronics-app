import ImageSwiper from "./components/home-page/image-swiper";
import NewProductSection from "./components/home-page/new-product-section";

export default function Home() {
  return (
    <main className="home-page-wrapper flex flex-col mx-2">
      <ImageSwiper />
      <NewProductSection />
    </main>
  );
}
