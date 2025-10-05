import { StrictMode, Suspense, type ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const AppProvider = ({ children }: { children: ReactNode }) => (
  <PrimeReactProvider>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  </PrimeReactProvider>
);

export default AppProvider;
