import ImageSwiper from "./components/home-page/image-swiper";
import NewProductSection from "./components/home-page/new-product-section";
import { getProducts } from "./api/route";


export default async function Home() {
  const data = await getProducts();
  return (
    <main className="home-page-wrapper flex flex-col mx-2">
      <ImageSwiper />
      <NewProductSection data={data} />
    </main>
  );
}
