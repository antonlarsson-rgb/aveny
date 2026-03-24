import { Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#E8E6E3] bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-xl tracking-[0.3em] font-light uppercase mb-4">
              Aveny
            </p>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              Handplockad hårvård för lockigt, afro och skruvat hår. Stockholm,
              Sverige.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B] mb-4">
              Shoppa
            </h4>
            <ul className="space-y-2">
              {["Alla produkter", "Schampo", "Balsam", "Oljor", "Styling"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#produkter"
                      className="text-sm text-[#1A1A1A] hover:text-[#D4A574] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B] mb-4">
              Information
            </h4>
            <ul className="space-y-2">
              {[
                "Om oss",
                "Frakt & retur",
                "Integritetspolicy",
                "Köpvillkor",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-[#1A1A1A] hover:text-[#D4A574] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B] mb-4">
              Följ oss
            </h4>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-[#1A1A1A] hover:text-[#D4A574] transition-colors"
            >
              <Star size={16} strokeWidth={1.5} />
              @aveny.hair
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#E8E6E3] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[#6B6B6B] tracking-wide">
            © 2026 AVENY. Alla rättigheter förbehållna.
          </p>
          <div className="flex items-center gap-4">
            {["Visa", "Mastercard", "Klarna", "Swish"].map((method) => (
              <span
                key={method}
                className="text-[10px] text-[#6B6B6B] tracking-wide"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
