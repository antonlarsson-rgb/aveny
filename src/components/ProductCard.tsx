"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-[#F0EEEB] overflow-hidden mb-4">
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[#1A1A1A] text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1.5">
              {product.badge}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

        {/* Quick add button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-4 left-4 right-4 bg-[#1A1A1A] text-white py-3 text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Lägg i varukorg
        </motion.button>
      </div>

      {/* Info */}
      <div className="space-y-1">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B]">
          {product.brand}
        </p>
        <h3 className="text-sm font-normal leading-snug group-hover:text-[#D4A574] transition-colors duration-200">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 pt-1">
          <span className="text-sm">{formatPrice(product.price)}</span>
          {product.comparePrice && (
            <span className="text-xs text-[#6B6B6B] line-through">
              {formatPrice(product.comparePrice)}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
