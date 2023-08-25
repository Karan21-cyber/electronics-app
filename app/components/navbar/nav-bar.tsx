import React from "react";
import MobileNav from "./mobile/mobile-nav";
import DesktopNav from "./desktop/desktop-nav";
import { Category } from "@/app/dto/dto";

interface INavbar{
  categories:Category[];
}
function Navbar({categories}:INavbar) {
  return (
    <section className="nav-bar-section overflow-hidden">
      <div className="moibile-nav-section md:hidden">
        <MobileNav />
      </div>
      <div className="desktop-nav-section hidden md:block">
        <DesktopNav categories={categories}/>
      </div>
    </section>
  );
}

export default Navbar;
