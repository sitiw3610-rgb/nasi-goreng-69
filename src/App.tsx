import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Beranda from "./pages/Beranda";
import CeritaKami from "./pages/CeritaKami";
import Menu from "./pages/Menu";
import Outlet from "./pages/Outlet";
import Review from "./pages/Review";
import Promo from "./pages/Promo";
import TentangKami from "./pages/TentangKami";
import NotFound from "./pages/NotFound";
import FloatingButtons from "./components/FloatingButtons";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/beranda" replace />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/cerita-kami" element={<CeritaKami />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/outlet" element={<Outlet />} />
          <Route path="/review" element={<Review />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingButtons />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
