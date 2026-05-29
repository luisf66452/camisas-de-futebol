"use client";

import { CreditCard, MapPin, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/products";

export function CheckoutClient() {
  const { subtotal } = useCart();
  const shipping = subtotal > 300 || subtotal === 0 ? 0 : 24;
  const total = subtotal + shipping;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_24rem]">
        <section>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-leaf">Checkout visual</p>
          <h1 className="mt-2 text-3xl font-black text-ink sm:text-5xl">Finalize seu pedido</h1>
          <div className="mt-8 grid gap-4">
            <CheckoutBlock icon={<MapPin size={22} />} title="Entrega">
              <div className="grid gap-3 sm:grid-cols-2">
                <input className="h-12 rounded-md border border-slate-200 px-4" placeholder="Nome completo" />
                <input className="h-12 rounded-md border border-slate-200 px-4" placeholder="Telefone" />
                <input className="h-12 rounded-md border border-slate-200 px-4 sm:col-span-2" placeholder="Endereco" />
                <input className="h-12 rounded-md border border-slate-200 px-4" placeholder="Cidade" />
                <input className="h-12 rounded-md border border-slate-200 px-4" placeholder="CEP" />
              </div>
            </CheckoutBlock>
            <CheckoutBlock icon={<CreditCard size={22} />} title="Pagamento">
              <div className="grid gap-3">
                <input className="h-12 rounded-md border border-slate-200 px-4" placeholder="Numero do cartao" />
                <div className="grid grid-cols-2 gap-3">
                  <input className="h-12 rounded-md border border-slate-200 px-4" placeholder="MM/AA" />
                  <input className="h-12 rounded-md border border-slate-200 px-4" placeholder="CVV" />
                </div>
              </div>
            </CheckoutBlock>
          </div>
        </section>
        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-xl font-black text-ink">Pedido</h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Produtos</span>
              <span className="font-bold">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Entrega</span>
              <span className="font-bold">{shipping === 0 ? "Gratis" : formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-3 text-lg font-black">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
          <button
            type="button"
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-ink text-sm font-black text-white"
          >
            <ShieldCheck size={18} aria-hidden="true" />
            Confirmar compra
          </button>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            Demonstracao visual de checkout. Nenhum pagamento real sera processado.
          </p>
        </aside>
      </div>
    </main>
  );
}

function CheckoutBlock({
  icon,
  title,
  children
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-canary text-ink">{icon}</span>
        <h2 className="text-xl font-black text-ink">{title}</h2>
      </div>
      {children}
    </section>
  );
}
