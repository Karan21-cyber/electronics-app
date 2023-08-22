"use client";
import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import Navbar from "../navbar/nav-bar";
import Headers from "../navbar/header";
import Footer from "../footer/footer";
import SideNavbar from "../navbar/drawer/side-drawer";
import { navState } from "@/atom/navbar/nav-bar";

function ContentProvider({ children }: { children: React.ReactNode }) {
  const [openNav, setOpenNav] = useRecoilState(navState);
  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target as Node)
      ) {
        setOpenNav(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openNav]);

  return (
    <div className="relative overflow-hidden">
      {openNav && (
        <div
          ref={sideBarRef}
          className={` absolute animate-side-drawer bg-white z-[99] `}
        >
          <SideNavbar />
        </div>
      )}

      <div className={`${openNav  ? "opacity-60" : ""}`}>
        <Headers />
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default ContentProvider;
