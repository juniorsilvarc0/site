import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Construtora Roper | Encontre seu Lar",
  description: "Descubra o lugar perfeito para morar com nossa seleção de imóveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} h-full m-0 p-0`}>
        {children}
      </body>
    </html>
  );
}