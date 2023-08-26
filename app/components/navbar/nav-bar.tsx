"use router"
import MobileNav from "./mobile/mobile-nav";
import DesktopNav from "./desktop/desktop-nav";
import { Category } from "@/app/dto/dto";
import { getAllCategory } from "@/app/api/route";

async function Navbar() {

  const categories: Category[] = await getAllCategory();

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
