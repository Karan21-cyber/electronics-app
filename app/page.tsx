import ImageSwiper from "./components/home-page/image-swiper";
import NewProductSection from "./components/home-page/new-product-section";

async function getProducts() : Promise<any>{
  const res= await fetch('https://fakestoreapi.com/products');
  if(!res.ok){
      throw new Error('Failed to fetch data');
  }
  
  return res.json();
}
export default async function Home() {
  const data:any = await getProducts();

  return (
    <main className="home-page-wrapper flex flex-col mx-2">
      <ImageSwiper />
      <NewProductSection data={data} />
    </main>
  );
}
