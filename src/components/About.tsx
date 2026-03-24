"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="om-oss" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="aspect-[4/5] bg-[#F0EEEB] relative overflow-hidden"
          >
            <img
              src="/products/oil.jpg"
              alt="AVENY hårvårdsprodukter"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <div>
              <p className="text-[#D4A574] text-xs tracking-[0.4em] uppercase mb-3">
                Vår filosofi
              </p>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight leading-snug">
                Hår som ser ut som dig — bara bättre
              </h2>
            </div>

            <div className="space-y-4 text-[#6B6B6B] leading-relaxed">
              <p>
                Vi startade AVENY för att vi var trötta på att söka efter
                hårvårdsprodukter som faktiskt fungerar för lockigt, afro och
                skruvat hår. Utbudet i Sverige var begränsat, och kvaliteten
                ojämn.
              </p>
              <p>
                Idag handplockar vi varje produkt i vårt sortiment. Vi testar
                allt själva, läser ingredienslistor och väljer bara det som
                levererar resultat. Inga kompromisser.
              </p>
              <p>
                Från Mielles rosmarinolja till K18:s molekylära reparation — vi
                har samlat det bästa på ett ställe. För ditt hår förtjänar det.
              </p>
            </div>

            <a
              href="#produkter"
              className="inline-block bg-[#1A1A1A] text-white px-8 py-3.5 text-xs tracking-[0.15em] uppercase hover:bg-[#D4A574] transition-colors duration-300"
            >
              Utforska sortimentet
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
