"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import ContentProvider from "./content-Provider";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <ContentProvider>{children}</ContentProvider>
    </RecoilRoot>
  );
}

export default Providers;
