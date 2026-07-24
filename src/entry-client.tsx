import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

const queryClient = new QueryClient();
const router = getRouter();

// Register the router instance for type safety (TanStack Router best-practice)
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Hydrate or render the app. This is a pure client-side build (SPA), so we use
// createRoot instead of hydrateRoot. GitHub Pages only serves static files.
const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} defaultPreload="intent" />
      </QueryClientProvider>
    </React.StrictMode>,
  );
}
