import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App.tsx";
import "./assets/styles/main.scss";
import LoadingProvider from "./contexts/LoadingProvider/LoadingProvider.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <App />
      </LoadingProvider>
      <ToastContainer />
    </BrowserRouter>
  // </StrictMode>
);
