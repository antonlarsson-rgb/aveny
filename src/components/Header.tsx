"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#produkter", label: "Produkter" },
  { href: "#kategorier", label: "Kategorier" },
  { href: "#om-oss", label: "Om oss" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F7]/90 backdrop-blur-md border-b border-[#E8E6E3]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl tracking-[0.3em] font-light uppercase">
          Aveny
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Sök"
            className="p-2 hover:bg-[#E8E6E3] rounded-full transition-colors"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Varukorg"
            className="p-2 hover:bg-[#E8E6E3] rounded-full transition-colors relative"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#1A1A1A] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button
            aria-label="Meny"
            className="md:hidden p-2 hover:bg-[#E8E6E3] rounded-full transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={18} strokeWidth={1.5} />
            ) : (
              <Menu size={18} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF9F7] border-b border-[#E8E6E3] overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg tracking-wide text-[#1A1A1A]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
