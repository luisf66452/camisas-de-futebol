import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Canarinho Supply | Camisas de futebol do Brasil",
  description:
    "Loja online independente de camisas de futebol inspiradas nas cores e na energia do Brasil."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
