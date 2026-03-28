export function Footer() {
  return (
    <footer className="border-t border-[#E5E2DC] bg-[#FFFEF2]">
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-[family-name:var(--font-cormorant)] text-2xl tracking-[0.2em] font-light uppercase mb-5">
              Aveny
            </p>
            <p className="text-[13px] text-[#717171] leading-relaxed max-w-[220px]">
              Handplockad hårvård för lockigt, afro och skruvat hår.
              Stockholm, Sverige.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase text-[#717171] mb-6">
              Shoppa
            </h4>
            <ul className="space-y-3">
              {["Alla produkter", "Schampo", "Balsam", "Oljor", "Styling"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#produkter"
                      className="text-[13px] text-[#333333] hover:text-[#717171] transition-colors duration-300"
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
            <h4 className="text-[11px] tracking-[0.15em] uppercase text-[#717171] mb-6">
              Information
            </h4>
            <ul className="space-y-3">
              {[
                "Om oss",
                "Frakt & retur",
                "Integritetspolicy",
                "Köpvillkor",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[13px] text-[#333333] hover:text-[#717171] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase text-[#717171] mb-6">
              Följ oss
            </h4>
            <a
              href="#"
              className="text-[13px] text-[#333333] hover:text-[#717171] transition-colors duration-300"
            >
              Instagram — @aveny.hair
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-[#E5E2DC] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-[#B5B0A8] tracking-wide">
            © 2026 AVENY. Alla rättigheter förbehållna.
          </p>
          <div className="flex items-center gap-6">
            {["Visa", "Mastercard", "Klarna", "Swish"].map((method) => (
              <span
                key={method}
                className="text-[11px] text-[#B5B0A8] tracking-wide"
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
