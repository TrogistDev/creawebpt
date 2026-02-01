"use client";
import Script from "next/script";

export default function GoogleReviews() {
  return (
    <div className="w-full my-10 flex justify-center">
      {/* O container onde o widget será renderizado */}
      <div 
        className="ti-widget" 
        data-layout-id="cf9d922630e7734e1896a941589"
        style={{ minHeight: '150px' }}
      ></div>

      {/* Script carregado diretamente no componente para garantir execução */}
      <Script
        src="https://cdn.trustindex.io/loader.js?cf9d922630e7734e1896a941589"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          if (window.Trustindex) window.Trustindex.init();
        }}
      />
    </div>
  );
}