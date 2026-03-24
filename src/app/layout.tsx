import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="sv" className={inter.variable}>
      <body className="bg-[#FAF9F7] text-[#1A1A1A] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
