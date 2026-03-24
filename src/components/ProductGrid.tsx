"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products, categories } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("alla");

  const filtered =
    activeCategory === "alla"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="produkter" className="max-w-7xl mx-auto px-6 py-24">
      {/* Section header */}
      <div className="text-center mb-16">
        <p className="text-[#D4A574] text-xs tracking-[0.4em] uppercase mb-3">
          Kollektion
        </p>
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
          Våra produkter
        </h2>
      </div>

      {/* Category filter */}
      <div
        id="kategorier"
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-200 ${
              activeCategory === cat.slug
                ? "bg-[#1A1A1A] text-white"
                : "bg-transparent text-[#6B6B6B] hover:text-[#1A1A1A] border border-[#E8E6E3]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
      >
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
