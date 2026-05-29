"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { formatPrice, products } from "@/lib/products";
import { JerseyVisual } from "@/components/JerseyVisual";

export function CartClient() {
  const { lines, subtotal, updateQuantity, removeItem } = useCart();
  const shipping = subtotal > 300 || subtotal === 0 ? 0 : 24;
  const total = subtotal + shipping;

  if (lines.length === 0) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-ink">Seu carrinho esta vazio</h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Escolha uma camisa inspirada no futebol brasileiro e volte aqui para revisar seu pedido.
        </p>
        <Link
          href="/#produtos"
          className="mt-8 inline-flex h-12 items-center rounded-md bg-ink px-6 text-sm font-black text-white"
        >
          Ver produtos
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black text-ink sm:text-5xl">Carrinho</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_24rem]">
        <section className="space-y-4">
          {lines.map((line) => {
            const product = products.find((item) => item.slug === line.slug);
            if (!product) return null;
            return (
              <article key={`${line.slug}-${line.size}`} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[9rem_1fr_auto]">
                <JerseyVisual product={product} />
                <div>
                  <h2 className="text-xl font-black text-ink">{product.name}</h2>
                  <p className="mt-1 text-sm text-slate-600">Tamanho {line.size}</p>
                  <p className="mt-3 text-sm font-black text-ink">{formatPrice(product.price)}</p>
                </div>
                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                  <div className="flex h-10 items-center overflow-hidden rounded-md border border-slate-200">
                    <button
                      className="grid h-10 w-10 place-items-center hover:bg-slate-100"
                      aria-label="Diminuir quantidade"
                      onClick={() => updateQuantity(line.slug, line.size, line.quantity - 1)}
                    >
                      <Minus size={16} aria-hidden="true" />
                    </button>
                    <span className="grid h-10 w-10 place-items-center text-sm font-black">{line.quantity}</span>
                    <button
                      className="grid h-10 w-10 place-items-center hover:bg-slate-100"
                      aria-label="Aumentar quantidade"
                      onClick={() => updateQuantity(line.slug, line.size, line.quantity + 1)}
                    >
                      <Plus size={16} aria-hidden="true" />
                    </button>
                  </div>
                  <button
                    className="inline-flex items-center gap-2 text-sm font-bold text-red-600"
                    onClick={() => removeItem(line.slug, line.size)}
                  >
                    <Trash2 size={16} aria-hidden="true" />
                    Remover
                  </button>
                </div>
              </article>
            );
          })}
        </section>
        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-xl font-black text-ink">Resumo</h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Subtotal</span>
              <span className="font-bold text-ink">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Entrega</span>
              <span className="font-bold text-ink">{shipping === 0 ? "Gratis" : formatPrice(shipping)}</span>
            </div>
            <div className="border-t border-slate-200 pt-3">
              <div className="flex justify-between text-lg font-black">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
          <Link
            href="/checkout"
            className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md bg-leaf text-sm font-black text-white transition hover:bg-ink"
          >
            Ir para checkout
          </Link>
        </aside>
      </div>
    </main>
  );
}
