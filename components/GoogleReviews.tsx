"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function GoogleReviews() {
  useEffect(() => {
    // Função para forçar o carregamento
    const initTrustIndex = () => {
      // @ts-ignore
      if (window.Trustindex && window.Trustindex.init) {
        // @ts-ignore
        window.Trustindex.init();
      }
    };

    // Tenta inicializar após um curto delay para garantir que o DOM está pronto
    const timer = setTimeout(initTrustIndex, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full my-8 flex justify-center min-h-[150px]">
      <Script
        src="https://cdn.trustindex.io/loader.js?cf9d922630e7734e1896a941589"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          if (window.Trustindex) window.Trustindex.init();
        }}
      />
      <div 
        className="ti-widget" 
        data-layout-id="cf9d922630e7734e1896a941589"
      ></div>
    </div>
  );
}