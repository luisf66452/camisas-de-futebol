import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { AddToCartButton } from "@/components/AddToCartButton";
import { JerseyVisual } from "@/components/JerseyVisual";
import { formatPrice, getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/#produtos" className="inline-flex items-center gap-2 text-sm font-black text-slate-600 hover:text-ink">
        <ArrowLeft size={17} aria-hidden="true" />
        Voltar para produtos
      </Link>
      <section className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <JerseyVisual product={product} large />
        <div className="flex flex-col justify-center">
          <span className="w-fit rounded-full bg-canary px-3 py-1 text-xs font-black uppercase text-ink">
            {product.tag}
          </span>
          <h1 className="mt-4 text-4xl font-black text-ink sm:text-6xl">{product.name}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{product.description}</p>
          <div className="mt-6 flex items-end gap-3">
            <span className="text-3xl font-black text-ink">{formatPrice(product.price)}</span>
            {product.previousPrice ? (
              <span className="pb-1 text-sm font-bold text-slate-400 line-through">
                {formatPrice(product.previousPrice)}
              </span>
            ) : null}
          </div>
          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {product.details.map((detail) => (
              <div key={detail} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle2 size={18} color={product.accent} aria-hidden="true" />
                {detail}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
