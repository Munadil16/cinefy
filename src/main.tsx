import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@/index.css";
import App from "@/App";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import VideoCardLoader from "./loaders/video-card-loader";
import { ThemeProvider } from "@/components/theme/theme-provider";

const Home = lazy(() => import("@/pages/home"));
const Video = lazy(() => import("@/pages/video"));
const Search = lazy(() => import("@/pages/search"));
const Trending = lazy(() => import("@/pages/trending"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<VideoCardLoader />}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="" element={<Home />} />
              <Route path="video" element={<Video />} />
              <Route path="search" element={<Search />} />
              <Route path="trending" element={<Trending />} />
            </Route>
          </Routes>
        </Suspense>
        <Footer />
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
