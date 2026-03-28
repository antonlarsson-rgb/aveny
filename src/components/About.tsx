export function About() {
  return (
    <section id="om-oss" className="bg-[#FAF8F4]">
      <div className="max-w-[1400px] mx-auto px-8 py-28">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[#F0EEEB] relative overflow-hidden">
            <img
              src="/products/oil.jpg"
              alt="AVENY hårvårdsprodukter"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-10">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-light leading-[1.15] mb-6">
                Hår som ser ut
                <br />
                som <em>dig</em>
              </h2>
            </div>

            <blockquote className="border-l-2 border-[#8B9A7E] pl-6 py-2">
              <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl font-light italic text-[#717171] leading-relaxed">
                &ldquo;Det vackraste du kan bära är att vara dig själv.&rdquo;
              </p>
            </blockquote>

            <div className="space-y-5 text-[15px] text-[#717171] leading-[1.8]">
              <p>
                Vi startade AVENY för att vi var trötta på att söka efter
                hårvårdsprodukter som faktiskt fungerar för lockigt, afro och
                skruvat hår. Utbudet i Sverige var begränsat, och kvaliteten
                ojämn.
              </p>
              <p>
                Idag handplockar vi varje produkt i vårt sortiment. Vi testar
                allt själva, läser ingredienslistor och väljer bara det som
                levererar resultat. Från Mielles rosmarinolja till K18:s
                molekylära reparation.
              </p>
            </div>

            <a
              href="#produkter"
              className="inline-block text-[13px] tracking-[0.1em] text-[#333333] border-b border-[#333333] pb-1 hover:border-[#717171] hover:text-[#717171] transition-colors duration-300"
            >
              Utforska sortimentet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
