"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function GoogleReviews() {
  useEffect(() => {
    // Força a reinicialização sempre que o componente montar
    const initWidget = () => {
      // @ts-ignore
      if (window.Trustindex && window.Trustindex.init) {
        // @ts-ignore
        window.Trustindex.init();
      }
    };

    // Pequeno delay para garantir que o Next.js terminou a hidratação
    const timer = setTimeout(initWidget, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Script com o novo ID (ffad) */}
      <Script
        src="https://cdn.trustindex.io/loader.js?038cd9263a0c7363cb764cbffad"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          if (window.Trustindex) window.Trustindex.init();
        }}
      />
      
      {/* No modo flutuante, esta div serve apenas como âncora de segurança */}
      <div className="ti-widget" data-layout-id="038cd9263a0c7363cb764cbffad"></div>
    </>
  );
}