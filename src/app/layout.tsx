import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "AVENY — Hårvård för lockigt, afro & skruvat hår",
  description:
    "Handplockade hårvårdsprodukter för lockigt, afro och skruvat hår. Mielle, K18, Difeel och fler premiumvarumärken. Fri frakt över 499 kr.",
  openGraph: {
    title: "AVENY — Hårvård för lockigt, afro & skruvat hår",
    description:
      "Handplockade hårvårdsprodukter för lockigt, afro och skruvat hår.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-[#FFFEF2] text-[#333333] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
