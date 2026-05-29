"use client";

import { useState } from "react";
import { Check, ShoppingCart } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import type { Product } from "@/lib/products";

export function AddToCartButton({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0]);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  return (
    <div className="space-y-4">
      <div>
        <span className="text-sm font-black uppercase text-slate-500">Tamanho</span>
        <div className="mt-2 grid grid-cols-4 gap-2 sm:max-w-sm">
          {product.sizes.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSize(item)}
              className={[
                "h-11 rounded-md border text-sm font-black transition",
                size === item ? "border-ink bg-ink text-white" : "border-slate-200 bg-white text-ink hover:border-ink"
              ].join(" ")}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          addItem(product, size);
          setAdded(true);
          window.setTimeout(() => setAdded(false), 1500);
        }}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-leaf px-6 text-sm font-black text-white shadow-soft transition hover:bg-ink sm:w-auto"
      >
        {added ? <Check size={19} aria-hidden="true" /> : <ShoppingCart size={19} aria-hidden="true" />}
        {added ? "Adicionado" : "Adicionar ao carrinho"}
      </button>
    </div>
  );
}
