import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const FloatingCart = () => {
  const { count, setOpen } = useCart();
  return (
    <button
      onClick={() => setOpen(true)}
      aria-label="Buka keranjang"
      className="fixed bottom-[10.5rem] right-6 z-40 group"
    >
      <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-brand text-brand-foreground shadow-glow transition-all hover:scale-105">
        <ShoppingBag className="w-5 h-5" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 grid place-items-center rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold border-2 border-background">
            {count}
          </span>
        )}
      </span>
    </button>
  );
};
