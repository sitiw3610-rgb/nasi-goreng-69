import { Outlet } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { CartSheet } from "@/components/CartSheet";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FloatingInstagram } from "@/components/FloatingInstagram";
import { FloatingCart } from "@/components/FloatingCart";
import { FloatingAccents } from "@/components/FloatingAccents";
import { Footer } from "@/components/sections/Footer";

export const Layout = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <div className="relative min-h-screen bg-background flex flex-col">
            <FloatingAccents />
            <Navbar />
            <main className="flex-1">
              <Outlet />
            </main>
            <Footer />
            <CartSheet />
            <FloatingWhatsApp />
            <FloatingInstagram />
            <FloatingCart />
          </div>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};
