import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./components/Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="mx-2 md:mx-6">
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
