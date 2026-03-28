export function Features() {
  const values = [
    "Fri frakt över 499 kr",
    "Clean beauty",
    "Handplockade varumärken",
    "14 dagars öppet köp",
  ];

  return (
    <section className="border-y border-[#E5E2DC]">
      <div className="max-w-[1400px] mx-auto px-8 py-6">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-3">
          {values.map((value, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="text-[12px] tracking-[0.1em] text-[#717171] uppercase">
                {value}
              </span>
              {i < values.length - 1 && (
                <span className="hidden sm:block w-[1px] h-3 bg-[#E5E2DC]" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
