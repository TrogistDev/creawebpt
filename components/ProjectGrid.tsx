"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TechButton from "./TechButton";

const projects = [
  { id: 1, image: "https://res.cloudinary.com/mandabir/image/upload/v1774183058/dentwise_uod3cb.webp", title: "Dentwise - Saúde Digital", description: "Plataforma digital de alta performance desenvolvida para clínicas odontológicas.", link: "https://dentwise-wheat.vercel.app/" },
  { id: 2, image: "https://res.cloudinary.com/mandabir/image/upload/v1774183058/maketto_wf3nxw.webp", title: "Página para reserva de mesas em noites de sushi", description: "Página de Reservas feito para o Restaurante Sushi Maketto, de Ponte de Lima.", link: "https://sushi-maketto-reservas.vercel.app" },
  { id: 3, image: "https://res.cloudinary.com/mandabir/image/upload/v1774183057/Awwards_i35erv.webp", title: "Landing Page", description: "Página de apresentação de produtos e serviços", link: "https://awwards-f5oz.vercel.app" },
  { id: 4, image: "https://res.cloudinary.com/mandabir/image/upload/v1774182937/mojito_1_tdkbhf.webp", title: "Landing Page", description: "Página de apresentação de produtos e serviços", link: "https://gsap-mojito-nu.vercel.app/" },
];

export default function ProjetosGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 para frente, -1 para trás

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="trabalhos" className="py-20 bg-[#0d0d0d60] overflow-hidden relative">
      <div className="container mx-auto max-w-[1920px]">
        
        <div className="mb-16 px-4 lg:px-12">
          <h2 className="text-4xl 2xl:text-6xl font-bold text-white mb-4">Projetos em Destaque</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#373dff] to-[#ff00e2]" />
        </div>

        <div className="relative w-full">
          {/* Degradês Laterais para sumir suavemente */}
          <div className="absolute inset-y-0 left-0 w-[20%] z-30 bg-gradient-to-r from-[#0d0d0d] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[20%] z-30 bg-gradient-to-l from-[#0d0d0d] to-transparent pointer-events-none" />

          <div className="relative h-[650px] flex items-center justify-center">
            {/* O AnimatePresence agora rastreia o currentIndex para disparar a animação */}
            <AnimatePresence initial={false} mode="popLayout">
              {[-1, 0, 1].map((offset) => {
                const index = (currentIndex + offset + projects.length) % projects.length;
                
                return (
                  <motion.div
                    // A key precisa ser o ID do projeto para o Framer saber quem é quem na troca
                    key={projects[index].id}
                    initial={{ 
                      x: offset === 0 ? (direction > 0 ? "100%" : "-100%") : `${offset * 110}%`,
                      opacity: 0,
                      scale: 0.8
                    }}
                    animate={{
                      x: `${offset * 105}%`,
                      opacity: offset === 0 ? 1 : 0.4,
                      scale: offset === 0 ? 1 : 0.85,
                      zIndex: offset === 0 ? 20 : 10,
                    }}
                    exit={{ 
                      x: direction > 0 ? (offset === 0 ? "-100%" : "-200%") : (offset === 0 ? "100%" : "200%"),
                      opacity: 0,
                      scale: 0.8
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 150, // Rigidez da mola
                      damping: 12,    // Menos amortecimento = Mais "quique" elástico
                      mass: 0.8,
                      velocity: 2
                    }}
                    className="absolute w-[85%] sm:w-[550px] lg:w-[700px] cursor-pointer"
                    onClick={() => offset !== 0 && (offset === 1 ? nextSlide() : prevSlide())}
                  >
                    <Card className="bg-[#1A1A1B] border-white/5 overflow-hidden h-full shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                      <div className="relative aspect-video w-full overflow-hidden bg-black/40">
                        <Image 
                          src={projects[index].image} 
                          alt={projects[index].title} 
                          fill 
                          unoptimized
                          className="object-contain p-4" 
                        />
                      </div>
                      <CardContent className="p-8 flex flex-col bg-[#1A1A1B]">
                        <h3 className="font-bold text-xl sm:text-3xl text-white mb-3">
                          {projects[index].title}
                        </h3>
                        <p className="text-[#94A3B8] text-sm sm:text-lg mb-6 line-clamp-2">
                          {projects[index].description}
                        </p>
                        <TechButton href={projects[index].link} title="Ver detalhes" />
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Setas de Navegação */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 sm:px-10 z-40 pointer-events-none">
            <button onClick={prevSlide} className="p-4 rounded-full bg-zinc-900/50 backdrop-blur-md text-white pointer-events-auto border border-white/10 hover:bg-[#373dff] transition-all active:scale-90">
              <ChevronLeft size={32} />
            </button>
            <button onClick={nextSlide} className="p-4 rounded-full bg-zinc-900/50 backdrop-blur-md text-white pointer-events-auto border border-white/10 hover:bg-[#373dff] transition-all active:scale-90">
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-3 mt-10">
          {projects.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-12 bg-[#373dff]' : 'w-3 bg-zinc-800'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}