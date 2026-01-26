"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

const projects = [
  { id: 1, image: "/dentwise.png", title: "Dentwise - Saúde Digital", description: "Plataforma digital de alta performance desenvolvida para clínicas odontológicas.", link: "https://dentwise-wheat.vercel.app/" },
  { id: 2, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000", title: "Página para análise de dados", description: "Página otimizada para geração de leads qualificados.", link: "#" },
  { id: 3, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop", title: "Aplicação web personalizada", description: "Sistema de gestão robusto desenvolvido para automatizar processos.", link: "#" },
];

export default function ProjetosGrid() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const timeoutOpenRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (selectedId !== null) {
      const timer = setTimeout(() => setIsLocked(true), 400);
      return () => clearTimeout(timer);
    } else {
      setIsLocked(false);
    }
  }, [selectedId]);

  const handleMouseEnter = (id: number) => {
    if (selectedId !== null) return;
    if (timeoutOpenRef.current) clearTimeout(timeoutOpenRef.current);
    timeoutOpenRef.current = setTimeout(() => {
      setSelectedId(id);
    }, 1000);
  };

  const handleMouseLeaveGrid = () => {
    if (timeoutOpenRef.current) {
      clearTimeout(timeoutOpenRef.current);
      timeoutOpenRef.current = null;
    }
  };

  const handleClose = () => {
    if (isLocked) setSelectedId(null);
  };

  const forceClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedId(null);
  };

  return (
    <section id="trabalhos" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeaveGrid}
              // Removida altura fixa h-[450px] para evitar cortes no mobile
              className="relative w-full cursor-pointer h-full"
            >
              <Card className={`w-full h-full bg-[#1A1A1B] border-[#373dff]/20 overflow-hidden transition-all duration-500 flex flex-col ${selectedId && selectedId !== project.id ? "opacity-20 blur-sm" : "opacity-100"}`}>
                
                {/* Imagem com proporção fixa para garantir espaço para o texto */}
                <div className="relative aspect-video w-full">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    unoptimized 
                    className="object-contain" 
                  />
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl sm:text-2xl text-[#F8FAFC] mb-3 leading-tight">
                    {project.title}
                  </h3>
                  {/* line-clamp ajustado para mobile (mais linhas) e desktop (2 linhas) */}
                  <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Indicador visual para Mobile */}
                  <div className="mt-auto pt-4 text-[#373dff] text-xs font-bold uppercase tracking-widest sm:hidden">
                    Tocar para detalhes +
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedId && (
          <>
            {/* Overlay de fundo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] cursor-zoom-out"
            />

            {/* Modal Centralizado */}
            <div className="fixed inset-0 flex items-center justify-center z-[110] p-4 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedId}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full max-w-2xl pointer-events-auto relative"
                onMouseLeave={handleClose}
              >
                <button
                  onClick={forceClose}
                  className="absolute -top-12 right-0 sm:-top-4 sm:-right-12 p-2 text-white/70 hover:text-white transition-colors"
                >
                  <X size={32} />
                </button>

                <Card className="bg-[#1A1A1B] border-white/10 shadow-2xl overflow-hidden">
                  <div className="relative aspect-video">
                    <Image 
                      src={projects.find(p => p.id === selectedId)?.image || ""} 
                      alt="Project Details" 
                      fill 
                      unoptimized 
                      priority
                      className="object-contain" 
                    />
                  </div>
                  <CardContent className="p-8 sm:p-10">
                    <h3 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
                      {projects.find(p => p.id === selectedId)?.title}
                    </h3>
                    <p className="text-[#94A3B8] mt-6 text-lg leading-relaxed">
                      {projects.find(p => p.id === selectedId)?.description}
                    </p>
                    <div className="mt-10">
                      <Link 
                        href={projects.find(p => p.id === selectedId)?.link || "#"} 
                        target="_blank"
                        className="inline-flex items-center justify-center bg-[#373dff] px-8 py-4 rounded-xl font-bold text-white hover:bg-[#ff00e2] transition-all duration-300 w-full sm:w-auto"
                      >
                        Visitar Projeto Online
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}