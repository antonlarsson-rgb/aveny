"use client";

export function Newsletter() {
  return (
    <section id="kontakt" className="bg-[#FFFEF2] border-t border-[#E5E2DC]">
      <div className="max-w-[1400px] mx-auto px-8 py-28">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-light mb-4">
            Håll dig uppdaterad
          </h2>
          <p className="text-[14px] text-[#717171] leading-relaxed mb-10">
            Prenumerera för exklusiva erbjudanden, hårvårdstips och nyheter.
            Få 10 % på din första beställning.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Din e-postadress"
              className="flex-1 border-b border-[#E5E2DC] bg-transparent px-1 py-3 text-[14px] placeholder:text-[#B5B0A8] focus:outline-none focus:border-[#333333] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#333333] text-white px-8 py-3 text-[12px] tracking-[0.1em] uppercase hover:bg-[#4A5548] transition-colors duration-300"
            >
              Prenumerera
            </button>
          </form>

          <p className="text-[11px] text-[#B5B0A8] mt-6">
            Genom att prenumerera godkänner du vår integritetspolicy.
          </p>
        </div>
      </div>
    </section>
  );
}
