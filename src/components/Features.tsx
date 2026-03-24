"use client";

import { motion } from "framer-motion";
import { Truck, Leaf, Heart, RotateCcw } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fri frakt",
    description: "På alla ordrar över 499 kr",
  },
  {
    icon: Leaf,
    title: "Clean beauty",
    description: "Noggrant utvalda ingredienser",
  },
  {
    icon: Heart,
    title: "Expertval",
    description: "Handplockade för din hårtyp",
  },
  {
    icon: RotateCcw,
    title: "Öppet köp",
    description: "14 dagars ångerrätt",
  },
];

export function Features() {
  return (
    <section className="border-y border-[#E8E6E3] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <feature.icon
                size={24}
                strokeWidth={1}
                className="mx-auto mb-4 text-[#D4A574]"
              />
              <h3 className="text-sm font-medium tracking-wide mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-[#6B6B6B]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
