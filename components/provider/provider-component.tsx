"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import Headers from "../navbar/header";
import Navbar from "../navbar/nav-bar";
import Socialtags from "../footer/social-tags";
import Footer from "../footer/footer";

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
