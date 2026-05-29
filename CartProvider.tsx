"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "@/lib/products";

export type CartLine = {
  slug: string;
  size: string;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  addItem: (product: Product, size: string) => void;
  removeItem: (slug: string, size: string) => void;
  updateQuantity: (slug: string, size: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "canarinho-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setLines(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = lines.reduce((sum, line) => {
      const product = products.find((item) => item.slug === line.slug);
      return sum + (product?.price ?? 0) * line.quantity;
    }, 0);

    return {
      lines,
      count,
      subtotal,
      addItem: (product, size) => {
        setLines((current) => {
          const existing = current.find((line) => line.slug === product.slug && line.size === size);
          if (existing) {
            return current.map((line) =>
              line.slug === product.slug && line.size === size
                ? { ...line, quantity: line.quantity + 1 }
                : line
            );
          }
          return [...current, { slug: product.slug, size, quantity: 1 }];
        });
      },
      removeItem: (slug, size) => {
        setLines((current) => current.filter((line) => line.slug !== slug || line.size !== size));
      },
      updateQuantity: (slug, size, quantity) => {
        if (quantity < 1) {
          setLines((current) => current.filter((line) => line.slug !== slug || line.size !== size));
          return;
        }
        setLines((current) =>
          current.map((line) => (line.slug === slug && line.size === size ? { ...line, quantity } : line))
        );
      },
      clearCart: () => setLines([])
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
