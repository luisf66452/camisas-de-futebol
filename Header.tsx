"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/CartProvider";

export function Header() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/88 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-black text-canary">
            CS
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-[0.18em] text-ink">Canarinho Supply</span>
            <span className="block text-xs text-slate-500">futebol brasileiro, desenho independente</span>
          </span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link className="hidden text-sm font-semibold text-slate-700 hover:text-ink sm:inline" href="/#produtos">
            Produtos
          </Link>
          <Link
            href="/carrinho"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-soft transition hover:scale-105"
            aria-label="Abrir carrinho"
          >
            <ShoppingBag size={20} aria-hidden="true" />
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-canary px-1 text-xs font-black text-ink">
                {count}
              </span>
            ) : null}
          </Link>
        </nav>
      </div>
    </header>
  );
}
