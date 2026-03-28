"use client";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src="/hero.jpg"
        alt="Kvinna med naturliga lockar"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="font-[family-name:var(--font-cormorant)] text-white text-5xl sm:text-6xl md:text-[5.5rem] font-light leading-[1.05] mb-8">
            Omfamna dina
            <br />
            <em className="font-normal">naturliga lockar</em>
          </h1>

          <p className="text-white/75 text-base sm:text-lg max-w-md leading-relaxed mb-12">
            Handplockade premiumvarumärken för lockigt, afro och skruvat hår.
          </p>

          <a
            href="#produkter"
            className="inline-block border border-white/60 text-white px-10 py-4 text-[13px] tracking-[0.15em] uppercase hover:bg-white hover:text-[#333333] transition-all duration-500"
          >
            Utforska sortimentet
          </a>
        </div>
      </div>
    </section>
  );
}
