import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group cursor-pointer">
      {/* Image */}
      <div className="relative aspect-[3/4] bg-[#F0EEEB] overflow-hidden mb-5">
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-500"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#717171]">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <p className="text-[11px] tracking-[0.15em] uppercase text-[#717171]">
          {product.brand}
        </p>
        <h3 className="text-[15px] font-normal leading-snug text-[#333333]">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 pt-1">
          <span className="text-[14px] text-[#333333]">
            {formatPrice(product.price)}
          </span>
          {product.comparePrice && (
            <span className="text-[13px] text-[#717171] line-through">
              {formatPrice(product.comparePrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
