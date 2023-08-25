"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import ContentProvider from "./content-Provider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function Providers({ children }: { children: React.ReactNode }) {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return (
    <QueryClientProvider client={client}>
      <RecoilRoot>
        <ContentProvider>{children}</ContentProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default Providers;
