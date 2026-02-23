"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verifica se o utilizador já deu consentimento anteriormente
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShowBanner(true);
  }, []);

  const handleConsent = (accepted: boolean) => {
    // 1. Criar o objeto de consentimento
    const consentStatus = accepted ? "granted" : "denied";

    // 2. Tentar comunicar com o Google de 2 formas diferentes para garantir
    if (typeof window !== "undefined") {
      // Forma A: gtag direta
      if ((window as any).gtag) {
        (window as any).gtag("consent", "update", {
          ad_storage: consentStatus,
          ad_user_data: consentStatus,
          ad_personalization: consentStatus,
          analytics_storage: consentStatus,
        });
      }

      // Forma B: Empurrar diretamente para o dataLayer (Backup)
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "consent_update",
        consent_status: consentStatus,
      });
    }

    // 3. Só agora gravamos e fechamos
    localStorage.setItem("cookie-consent", accepted ? "accepted" : "declined");
    setShowBanner(false);

    // 4. Reload apenas após um curto delay para o Google processar o hit
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-md bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl z-[9999]"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
      aria-modal="false"
    >
      <h3 className="text-white font-bold mb-2 " id="cookie-title">
        🍪 Cookies na Crea Web
      </h3>
      <p className="text-zinc-400 text-sm mb-4" id="cookie-description">
        Usamos cookies para melhorar a sua experiência e medir resultados de
        anúncios (Google Ads). Aceita o rastreio para nos ajudar a crescer?
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => handleConsent(true)}
          className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          Aceitar Tudo
        </button>
        <button
          onClick={() => handleConsent(false)}
          className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}
