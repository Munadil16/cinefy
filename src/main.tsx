import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@/index.css";
import App from "@/App";
import Home from "@/pages/home";
import Video from "@/pages/video";
import Search from "@/pages/search";
import Trending from "@/pages/trending";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="video" element={<Video />} />
            <Route path="search" element={<Search />} />
            <Route path="trending" element={<Trending />} />
          </Route>
        </Routes>
        <Footer />
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
