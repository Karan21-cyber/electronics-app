import React from "react";
import { RecoilRoot } from "recoil";
import Navbar from "../navbar/nav-bar";
import Headers from "../navbar/header";
import Footer from "../footer/footer";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Headers />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Providers;
