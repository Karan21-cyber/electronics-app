"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import Navbar from "../navbar/nav-bar";
import Headers from "../navbar/header";
import Footer from "../footer/footer";
import Socialtags from "../footer/social-tags";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <Headers />
      <Navbar />
      {children}
      <Socialtags />
      <Footer />
    </RecoilRoot>
  );
}

export default Providers;
