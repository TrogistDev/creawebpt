"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function GoogleReviews() {
  return (
    <div className="mt-10 min-h-[100px] w-full">
      {/* 1. O Script com estratégia específica para Next.js */}
      <Script
        src="https://cdn.trustindex.io/loader.js?cf9d922630e7734e1896a941589"
        strategy="afterInteractive"
        onLoad={() => {
          // Quando o script acaba de carregar, força a inicialização
          if (window.Trustindex) {
            window.Trustindex.init();
          }
        }}
      />

      {/* 2. O Contentor onde as reviews vão aparecer */}
      <div 
        className="ti-widget" 
        data-layout-id="cf9d922630e7734e1896a941589"
      ></div>
    </div>
  );
}