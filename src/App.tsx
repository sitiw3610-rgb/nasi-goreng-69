import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import MenuPage from "./pages/MenuPage.tsx";
import PromoPage from "./pages/PromoPage.tsx";
import OutletPage from "./pages/OutletPage.tsx";
import FaqPage from "./pages/FaqPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/tentang" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/promo" element={<PromoPage />} />
            <Route path="/outlet" element={<OutletPage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
