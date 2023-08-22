import React from "react";
import MobileNav from "./mobile/mobile-nav";
import DesktopNav from "./desktop/desktop-nav";

function Navbar() {
  return (
    <section className="nav-bar-section overflow-hidden">
      <div className="moibile-nav-section md:hidden">
        <MobileNav />
      </div>
      <div className="desktop-nav-section hidden md:block">
        <DesktopNav />
      </div>
    </section>
  );
}

export default Navbar;
