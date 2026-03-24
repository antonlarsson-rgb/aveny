"use client";

import { motion } from "framer-motion";

export function Newsletter() {
  return (
    <section className="bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-[#D4A574] text-xs tracking-[0.4em] uppercase mb-3">
            Nyhetsbrev
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            Få 10% på första köpet
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Prenumerera på vårt nyhetsbrev för exklusiva erbjudanden,
            hårvårdstips och nyheter direkt i din inbox.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Din e-postadress"
              className="flex-1 bg-white/10 border border-white/20 px-5 py-3.5 text-sm placeholder:text-white/40 focus:outline-none focus:border-[#D4A574] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#D4A574] text-white px-8 py-3.5 text-xs tracking-[0.15em] uppercase hover:bg-[#C49464] transition-colors duration-300 whitespace-nowrap"
            >
              Prenumerera
            </button>
          </form>

          <p className="text-white/30 text-[10px] mt-4">
            Genom att prenumerera godkänner du vår integritetspolicy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
