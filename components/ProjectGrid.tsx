"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TechButton from "./TechButton";

const projects = [
  { id: 1, image: "/dentwise.webp", title: "Dentwise - Saúde Digital", description: "Plataforma digital de alta performance desenvolvida para clínicas odontológicas.", link: "https://dentwise-wheat.vercel.app/" },
  { id: 2, image: "/maketto.webp", title: "Página para reserva de mesas em noites de sushi", description: "Página de Reservas feito para o Restaurante Sushi Maketto, de Ponte de Lima. Design por terminar.", link: "https://sushi-maketto-reservas.vercel.app" },
  { id: 3, image: "/Awwards.webp", title: "Landing Page", description: "Página de apresentação de produtos e serviços - IN PROGRESS", link: "https://awwards-f5oz.vercel.app" },
];

export default function ProjetosGrid() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="trabalhos" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#0d0d0d41] overflow-hidden">
      <div className="container mx-auto max-w-[1920px]">
        
        {/* Título da Seção */}
        <div className="mb-16 2xl:mb-24">
          <h2 className="text-4xl 2xl:text-6xl font-bold text-white mb-4">Projetos em Destaque</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#373dff] to-[#ff00e2]" />
        </div>

        {/* Grid Desktop (escondido no mobile) */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 2xl:gap-16">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              className="relative w-full group"
            >
              <Card className={`w-full h-full bg-[#1A1A1B] border-white/5 overflow-hidden transition-all duration-500 flex flex-col group-hover:scale-101 hover:border-[#373dff]/50 ${selectedId && selectedId !== project.id ? "opacity-20 blur-sm" : "opacity-100"}`}>
                
                <div className="relative aspect-video w-full overflow-hidden">
                  <motion.div 
                    layoutId={`card-image-${project.id}`}
                    className="w-full h-full"
                  >
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      unoptimized 
                      className="object-contain transition-transform duration-700 w-auto" 
                    />
                  </motion.div>
                </div>

                <CardContent className="p-8 2xl:p-12 flex flex-col flex-grow">
                  <motion.h3 
                    layoutId={`card-title-${project.id}`}
                    className="font-bold text-2xl 2xl:text-4xl text-[#F8FAFC] mb-4 leading-tight"
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-[#94A3B8] text-base 2xl:text-xl leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <TechButton href={project.link} title="Ver detalhes" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Carrossel Mobile */}
        <div className="lg:hidden">
          <div className="relative max-w-2xl mx-auto">
            {/* Seta Esquerda */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 bg-zinc-800/80 hover:bg-zinc-700 text-white p-3 rounded-full transition-all hover:scale-110"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Card Atual */}
            <Card className="w-full bg-[#1A1A1B] border-white/5 overflow-hidden transition-all duration-500 flex flex-col">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image 
                  src={projects[currentIndex].image} 
                  alt={projects[currentIndex].title} 
                  fill 
                  unoptimized 
                  className="object-contain" 
                />
              </div>

              <CardContent className="p-6 sm:p-8 flex flex-col">
                <h3 className="font-bold text-xl sm:text-2xl text-[#F8FAFC] mb-3 leading-tight">
                  {projects[currentIndex].title}
                </h3>
                
                <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6">
                  {projects[currentIndex].description}
                </p>
                
                <TechButton href={projects[currentIndex].link} title="Ver detalhes" />
              </CardContent>
            </Card>

            {/* Seta Direita */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 bg-zinc-800/80 hover:bg-zinc-700 text-white p-3 rounded-full transition-all hover:scale-110"
              aria-label="Próximo projeto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicadores de Posição */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex 
                      ? 'w-8 bg-[#373dff]' 
                      : 'w-2 bg-zinc-700 hover:bg-zinc-600'
                  }`}
                  aria-label={`Ir para projeto ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}