import { Inter, Anton, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import React from "react";
import { Toaster } from 'sonner'
import { GoogleAnalytics } from '@next/third-parties/google'


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
  description: "Desenvolvemos websites profissionais, landing pages de conversão e aplicações web para empresários que querem aumentar vendas e gerar contactos. Clareza, profissionalismo e resultados.",
  keywords: [
  "websites profissionais portugal",
  "criação de landing pages de conversão",
  "desenvolvimento de aplicações web à medida",
  "agência de marketing digital portugal",
  "especialista em SEO e conversão",
  "desenvolvimento Next.js e React",
  "soluções digitais para empresários",
  "criação de lojas online",
  "consultoria de presença digital",
  "Criação de sites portugal",
    "Web Design Portugal",
    "Web Design",
].join(", "),
  
  // Adições recomendadas:
  metadataBase: new URL("https://creawebpt.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Crea Web PT - Websites que Convertem",
    description: "Websites e aplicações web de alta performance para o mercado português.",
    url: "https://creawebpt.vercel.app",
    siteName: "Crea Web PT",
    locale: "pt_PT",
    type: "website",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
              url: "https://creawebpt.vercel.app",
            }),
          }}
        />
      </head>
      {/* Aplicamos as variáveis e definimos a Inter como padrão (font-sans) */}
      <body
        className={`${inter.variable} ${anton.variable} ${playfair.variable} font-sans`}
      >
        {children}
        <Toaster position="top-right" richColors />
        <GoogleAnalytics gaId="G-GPM9L20D2C" />
      </body>
    </html>
  );
}
