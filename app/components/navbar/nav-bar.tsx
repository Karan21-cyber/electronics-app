import MobileNav from "./mobile/mobile-nav";
import DesktopNav from "./desktop/desktop-nav";
import { Category } from "@/app/dto/dto";

async function getAllCategory(): Promise<any> {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function Navbar() {
  const categories: any = await getAllCategory();

  return (
    <section className="nav-bar-section overflow-hidden">
      <div className="moibile-nav-section md:hidden">
        <MobileNav categories={categories} />
      </div>
      <div className="desktop-nav-section hidden md:block">
        <DesktopNav categories={categories} />
      </div>
    </section>
  );
}

export default Navbar;
