"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#2C2C2C]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />

      {/* Background image placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
          filter: "brightness(0.7)",
        }}
      />

      {/* Fallback gradient if no image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C2C2C] via-[#3D3229] to-[#1A1A1A]" />

      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#D4A574] text-sm tracking-[0.4em] uppercase mb-6"
        >
          Hårvård för dig
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-white text-4xl sm:text-5xl md:text-7xl font-light tracking-tight leading-[1.1] mb-6"
        >
          Omfamna dina
          <br />
          <span className="italic font-normal">naturliga lockar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Handplockade premiumvarumärken för lockigt, afro och skruvat hår.
          Produkter som faktiskt fungerar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#produkter"
            className="bg-white text-[#1A1A1A] px-8 py-3.5 text-sm tracking-[0.15em] uppercase hover:bg-[#D4A574] hover:text-white transition-all duration-300"
          >
            Shoppa nu
          </a>
          <a
            href="#om-oss"
            className="border border-white/30 text-white px-8 py-3.5 text-sm tracking-[0.15em] uppercase hover:bg-white/10 transition-all duration-300"
          >
            Vår filosofi
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"
        />
      </motion.div>
    </section>
  );
}
