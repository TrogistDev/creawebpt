import { Inter, Anton, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import React from "react";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner"; // Importe o banner que criamos

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Crea Web PT - Websites que Convertem e Geram Resultados",
  description: "Desenvolvemos websites profissionais, landing pages de conversão e aplicações web para empresários que querem aumentar vendas e gerar contactos. Clareza, profissionalismo e resultados.",
  keywords: [
    "websites profissionais portugal", "criação de landing pages de conversão", 
    "desenvolvimento de aplicações web à medida", "agência de marketing digital portugal",
    "especialista em SEO e conversão", "desenvolvimento Next.js e React",
    "soluções digitais para empresários", "criação de lojas online",
    "consultoria de presença digital", "Criação de sites portugal",
    "Web Design Portugal", "Web Design"
  ].join(", "),
  metadataBase: new URL("https://www.creawebpt.pt"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Crea Web PT - Websites que Convertem",
    description: "Websites e aplicações web de alta performance para o mercado português.",
    url: "https://www.creawebpt.pt",
    siteName: "Crea Web PT",
    locale: "pt_PT",
    type: "website",
    images: ["/favico.png"],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
              "@type": "ProfessionalService",
              name: "Crea Web PT",
              address: { "@type": "PostalAddress", addressCountry: "PT" },
              description: "Desenvolvimento de websites e landing pages de alta conversão.",
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

        {/* 2. Facebook Pixel Otimizado */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body className={`${inter.variable} ${anton.variable} ${playfair.variable} font-sans`}>
        {children}
        
        {/* Banner de Cookies que controla o consentimento */}
        <CookieBanner />

        {/* 3. Google Ads - Carrega de forma otimizada */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17878117822"
          strategy="lazyOnload" 
        />

        <Script id="google-ads-config" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
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