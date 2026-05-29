import type { CSSProperties } from "react";
import type { Product } from "@/lib/products";

export function JerseyVisual({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <div
      className={[
        "jersey-panel relative isolate overflow-hidden rounded-lg border border-white/60 shadow-soft",
        large ? "min-h-[24rem]" : "aspect-[4/3]"
      ].join(" ")}
      style={{ "--kit-bg": product.kitStyle } as CSSProperties}
    >
      <div className="absolute inset-x-[18%] top-[14%] h-[70%] rounded-b-[2rem] rounded-t-[4rem] bg-white/15 shadow-inner" />
      <div className="absolute left-[9%] top-[24%] h-[36%] w-[24%] -rotate-12 rounded-full bg-white/18" />
      <div className="absolute right-[9%] top-[24%] h-[36%] w-[24%] rotate-12 rounded-full bg-white/18" />
      <div className="absolute inset-x-[24%] bottom-[18%] h-1 rounded-full bg-white/40" />
    </div>
  );
}
