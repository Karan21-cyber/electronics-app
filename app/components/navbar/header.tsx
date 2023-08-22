"use client";
import React, { useEffect, useRef, useState } from "react";
import MobileHeader from "./mobile/mobile-header";
import DesktopHeader from "./desktop/desktop-header";
import Drawer from "./drawer/top-drawer";

function Headers() {
  const [showDate, setShowDate] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleShowDate = () => {
    setShowDate(true);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setShowDate(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showDate]);

  return (
    <div className="w-full relative">
      <div
        ref={drawerRef}
        className={`absolute bg-white z-[99] w-full origin-top  transform ${
          showDate
            ? "animate-top-drawer translate-y-10 transition ease-in-out duration-700 delay-1000"
            : "hidden"
        }`}
      >
        <Drawer />
      </div>
      <div className="mobile-header md:hidden relative px-3 sm:px-6 bg-black">
        <MobileHeader showDate={showDate} setShowDate={handleShowDate} />
      </div>
      <div className="desktop-header hidden md:block px-3 bg-black">
        <DesktopHeader showDate={showDate} setShowDate={handleShowDate} />
      </div>
    </div>
  );
}

export default Headers;
