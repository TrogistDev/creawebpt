import { Inter, Anton, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import React from "react";

// Configuração das 3 fontes
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Criamos uma variável CSS
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Crea Web PT - Websites que Convertem e Geram Resultados",
  description:
    "Desenvolvemos websites profissionais, landing pages de conversão e aplicações web para empresários que querem aumentar vendas e gerar contactos. Clareza, profissionalismo e resultados.",
  keywords:
    "websites portugal, desenvolvimento web, landing pages, aplicações web, design web profissional, conversão online, SEO portugal",
};

// Tipagem do RootLayout adicionada aqui
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Crea Web PT",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PT",
              },
              description:
                "Desenvolvimento de websites e landing pages de alta conversão.",
              url: "https://creaweb.pt",
            }),
          }}
        />
      </head>
      {/* Aplicamos as variáveis e definimos a Inter como padrão (font-sans) */}
      <body
        className={`${inter.variable} ${anton.variable} ${playfair.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
