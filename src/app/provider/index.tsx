import { StrictMode, Suspense, type ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../../shared/style/index.css";

const client = new QueryClient();

const AppProvider = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </QueryClientProvider>
      </BrowserRouter>
    </PrimeReactProvider>
  </StrictMode>
);

export default AppProvider;
