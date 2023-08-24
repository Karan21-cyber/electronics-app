"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import ContentProvider from "./content-Provider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({defaultOptions:{queries:{staleTime:Infinity,}}});

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ContentProvider>{children}</ContentProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default Providers;
