"use client";

import { useState } from "react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("alla");

  const filtered =
    activeCategory === "alla"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="produkter" className="max-w-[1400px] mx-auto px-8 py-28">
      {/* Section header */}
      <div className="text-center mb-20">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-light tracking-tight">
          Våra produkter
        </h2>
        <p className="mt-4 text-[14px] text-[#717171] max-w-md mx-auto leading-relaxed">
          Noggrant utvalda för lockigt, afro och skruvat hår
        </p>
      </div>

      {/* Category filter */}
      <div
        id="kategorier"
        className="flex flex-wrap justify-center gap-3 mb-16"
      >
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`px-5 py-2.5 text-[12px] tracking-[0.1em] uppercase transition-all duration-300 ${
              activeCategory === cat.slug
                ? "bg-[#333333] text-white"
                : "text-[#717171] hover:text-[#333333]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid — editorial 2-3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
