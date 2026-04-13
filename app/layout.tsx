import { Inter, Anton, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import React from "react";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner"; // Importe o banner que criamos

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: 'swap',
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Crea Web PT - Websites que Convertem e Geram Resultados",
  description:
    "Desenvolvemos websites profissionais, landing pages de conversão e aplicações web para empresários que querem aumentar vendas e gerar contactos. Clareza, profissionalismo e resultados.",
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
  metadataBase: new URL("https://www.creawebpt.pt"),
  alternates: { canonical: "https://www.creawebpt.pt" },
  openGraph: {
    title: "Crea Web PT - Websites que Convertem",
    description:
      "Websites e aplicações web de alta performance para o mercado português.",
    url: "https://www.creawebpt.pt",
    siteName: "Crea Web PT",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/og-image.webp", // Uma imagem bonita do seu site
        width: 1200,
        height: 630,
        alt: "Crea Web PT - Websites Profissionais",
      },
    ],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Schema Markup Otimizado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Crea Web PT",
              address: { "@type": "PostalAddress", addressCountry: "PT" },
              description:
                "Desenvolvimento de websites e landing pages de alta conversão.",
              url: "https://www.creawebpt.pt",
            }),
          }}
        />

        {/* 1. Google Consent Mode v2 - DEVE vir antes de qualquer script de track */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Define o consentimento padrão como negado por segurança (RGPD)
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied'
            });
          `}
        </Script>

        <link rel="preconnect" href="https://region1.google-analytics.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
      </head>

      <body
        className={`${inter.variable} ${anton.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}

        {/* Banner de Cookies que controla o consentimento */}
        <CookieBanner />

        {/* 3. Google Ads - Carrega de forma otimizada */}
        <Script
          id="google-ads-script"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17878117822"
          strategy="lazyOnload"
        />

        <Script id="google-ads-config" strategy="lazyOnload">
          {`
            gtag('js', new Date());
            gtag('config', 'AW-17878117822', {
              'animate_ad_signals': true
            });

            // Atualiza consentimento se já houver escolha salva no localStorage
            const consent = localStorage.getItem('cookie-consent');
            if (consent === 'accepted') {
              gtag('consent', 'update', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
              });
            }
          `}
        </Script>

        <Toaster position="top-right" richColors />

        {/* 4. Google Analytics - Respeita o consentimento automaticamente através do Consent Mode */}
        <GoogleAnalytics gaId="G-GPM9L20D2C" />
      </body>
    </html>
  );
}
