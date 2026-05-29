import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatPrice, type Product } from "@/lib/products";
import { JerseyVisual } from "@/components/JerseyVisual";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/produtos/${product.slug}`} aria-label={`Ver ${product.name}`}>
        <JerseyVisual product={product} />
      </Link>
      <div className="px-1 pb-2 pt-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase text-slate-600">
            {product.tag}
          </span>
          <span className="text-sm font-black text-ink">{formatPrice(product.price)}</span>
        </div>
        <h3 className="text-lg font-black text-ink">{product.name}</h3>
        <p className="mt-1 min-h-10 text-sm leading-5 text-slate-600">{product.subtitle}</p>
        <Link
          href={`/produtos/${product.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-black text-ocean"
        >
          Ver produto <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
