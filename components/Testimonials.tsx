"use client";

import { useEffect, useState } from 'react';

// Estrutura para os dados do Google
interface GoogleReview {
  authorAttribution: {
    displayName: string;
    photoUri: string;
  };
  text: {
    text: string;
  };
  rating: number;
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const GOOGLE_MAPS_LINK = "https://search.google.com/local/reviews?placeid=ChIJ8QV6Iee3JQ0Rk8Z-gBhOgGE";

  useEffect(() => {
    async function getReviews() {
      try {
        const res = await fetch('/api/reviews');
        const data = await res.json();
        setReviews(Array.isArray(data) ? data : []);
      } catch (error) {
        setReviews([]);
      }
    }
    getReviews();
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  if (reviews.length === 0) return null;

  const currentReview = reviews[currentIndex];

  // Função para pegar as iniciais do nome
  const getInitials = (name: string) => {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name[0].toUpperCase();
  };

  // Cores aleatórias mas consistentes para cada inicial
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-blue-600',
      'bg-purple-600', 
      'bg-pink-600',
      'bg-green-600',
      'bg-yellow-600',
      'bg-red-600',
      'bg-indigo-600',
      'bg-teal-600'
    ];
    const index = (name?.charCodeAt(0) || 0) % colors.length;
    return colors[index];
  };

  return (
    <section className=" flex flex-col items-center justify-center rounded-2xl scroll-mt-45" id='reviews'>
      {/* Título de Apresentação da Sessão */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Aprovado por quem <span className="text-[#ffbb00]">decidiu crescer</span>
        </h2>
        <p className="text-white text-sm md:text-base uppercase tracking-[0.2em] max-w-2xl mx-auto">
          Design de alta conversão que transforma visitantes em clientes reais.
        </p>
      </div>

      {/* Card único com navegação */}
      <div className="relative w-full max-w-md mb-8 px-4">
        {/* Seta Esquerda */}
        <button
          onClick={prevReview}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 bg-zinc-800/80 hover:bg-zinc-700 text-white p-2.5 rounded-full transition-all hover:scale-110 border border-white/5"
          aria-label="Review anterior"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Card do Review */}
        <a 
          href={GOOGLE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-zinc-900/40 border border-white/5 p-6 rounded-[2rem] hover:bg-zinc-800/60 transition-all group backdrop-blur-sm"
        >
          {/* Estrelas */}
          <div className="flex gap-0.5 text-[#ffbb00] mb-4 text-sm">
            {[...Array(5)].map((_, s) => <span key={s}>★</span>)}
          </div>
          
          {/* Texto do review */}
          <p className="text-white text-sm md:text-base leading-relaxed italic mb-6 line-clamp-4">
            &quot;{currentReview.text?.text || "Serviço de excelência!"}&quot;
          </p>

          {/* Rodapé do Card */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ${getAvatarColor(currentReview.authorAttribution?.displayName || '')}`}>
              {getInitials(currentReview.authorAttribution?.displayName || 'Anônimo')}
            </div>
            <div className="flex flex-col">
              <span className="text-white text-xs font-bold uppercase tracking-tight">
                {currentReview.authorAttribution?.displayName || 'Anônimo'}
              </span>
              <span className="text-white text-[9px] uppercase tracking-widest">Google Review</span>
            </div>
          </div>
        </a>

        {/* Seta Direita */}
        <button
          onClick={nextReview}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 bg-zinc-800/80 hover:bg-zinc-700 text-white p-2.5 rounded-full transition-all hover:scale-110 border border-white/5"
          aria-label="Próximo review"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicadores de posição */}
        <div className="flex justify-center gap-1.5 mt-6">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all ${
                idx === currentIndex ? 'w-8 bg-[#ffbb00]' : 'w-2 bg-zinc-800'
              }`}
              aria-label={`Ir para review ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Trust Badge (Fica logo acima do botão de proposta) */}
      <div className="flex flex-col items-center gap-3 mt-4 group">
        <div className="flex -space-x-2">
          {reviews.slice(0, 5).map((rev, idx) => (
            <div 
              key={idx} 
              className={`h-8 w-8 rounded-full border-2 border-black flex items-center justify-center text-white text-[10px] font-bold ${getAvatarColor(rev.authorAttribution?.displayName || '')}`}
            >
              {getInitials(rev.authorAttribution?.displayName || '?')}
            </div>
          ))}
        </div>
        
        <a 
          href={GOOGLE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2">
            <span className="text-white text-sm font-bold">5.0</span>
            <div className="flex gap-0.5 text-[#ffbb00] text-xs">
              {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
            </div>
          </div>
          <p className="text-white text-[10px] uppercase tracking-[0.3em] mt-1 group-hover:text-[#ffbb00] transition-colors">
            VER TODAS AS NOTAS NO GOOGLE →
          </p>
        </a>
      </div>
    </section>
  );
}