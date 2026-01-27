"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { X, ExternalLink } from "lucide-react";

const projects = [
  { id: 1, image: "/dentwise.png", title: "Dentwise - Saúde Digital", description: "Plataforma digital de alta performance desenvolvida para clínicas odontológicas.", link: "https://dentwise-wheat.vercel.app/" },
  { id: 2, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000", title: "Página para análise de dados", description: "Página otimizada para geração de leads qualificados.", link: "#" },
  { id: 3, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop", title: "Aplicação web personalizada", description: "Sistema de gestão robusto desenvolvido para automatizar processos.", link: "#" },
];

export default function ProjetosGrid() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const timeoutOpenRef = useRef<NodeJS.Timeout | null>(null);

  // Fecha o modal ao apertar ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleMouseEnter = (id: number) => {
    if (selectedId !== null) return;
    if (timeoutOpenRef.current) clearTimeout(timeoutOpenRef.current);
    
    timeoutOpenRef.current = setTimeout(() => {
      setSelectedId(id);
    }, 800); // Reduzido levemente para melhor UX
  };

  const handleMouseLeaveGrid = () => {
    if (timeoutOpenRef.current) {
      clearTimeout(timeoutOpenRef.current);
      timeoutOpenRef.current = null;
    }
  };

  const forceClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedId(null);
  };

  return (
    <section id="trabalhos" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#0d0d0d41] overflow-hidden">
      <div className="container mx-auto max-w-[1920px]">
        
        {/* Título da Seção para Telas Grandes */}
        <div className="mb-16 2xl:mb-24">
          <h2 className="text-4xl 2xl:text-6xl font-bold text-white mb-4">Projetos em Destaque</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#373dff] to-[#ff00e2]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 2xl:gap-16">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeaveGrid}
              onClick={() => setSelectedId(project.id)}
              className="relative w-full cursor-pointer group"
            >
              <Card className={`w-full h-full bg-[#1A1A1B] border-white/5 overflow-hidden transition-all duration-500 flex flex-col hover:border-[#373dff]/50 ${selectedId && selectedId !== project.id ? "opacity-20 blur-sm" : "opacity-100"}`}>
                
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
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
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
                  
                  <div className="mt-8 pt-4 text-[#373dff] text-sm 2xl:text-lg font-bold uppercase tracking-widest flex items-center gap-2">
                    Ver detalhes <ExternalLink size={18} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => forceClose()}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] cursor-zoom-out"
            />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center z-[110] p-4 sm:p-8 pointer-events-none">
              <motion.div
                layoutId={`card-container-${selectedId}`}
                className="w-full max-w-4xl 2xl:max-w-6xl pointer-events-auto relative bg-[#1A1A1B] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.8)]"
              >
                <button
                  onClick={(e) => forceClose(e)}
                  className="absolute top-6 right-6 z-20 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-all border border-white/10"
                >
                  <X size={28} />
                </button>

                <div className="flex flex-col lg:flex-row h-full">
                  <div className="relative w-full lg:w-3/5 aspect-video lg:aspect-auto">
                    <motion.div layoutId={`card-image-${selectedId}`} className="w-full h-full">
                      <Image 
                        src={projects.find(p => p.id === selectedId)?.image || ""} 
                        alt="Project Details" 
                        fill 
                        unoptimized 
                        priority
                        className="object-contain" 
                      />
                    </motion.div>
                  </div>

                  <div className="p-8 sm:p-12 2xl:p-20 lg:w-2/5 flex flex-col justify-center">
                    <motion.h3 
                      layoutId={`card-title-${selectedId}`}
                      className="text-3xl sm:text-4xl 2xl:text-6xl font-bold text-[#F8FAFC] tracking-tight"
                    >
                      {projects.find(p => p.id === selectedId)?.title}
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-[#94A3B8] mt-8 text-lg 2xl:text-2xl leading-relaxed"
                    >
                      {projects.find(p => p.id === selectedId)?.description}
                    </motion.p>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-12"
                    >
                      <Link 
                        href={projects.find(p => p.id === selectedId)?.link || "#"} 
                        target="_blank"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-[#373dff] to-[#8906e6] px-10 py-5 2xl:px-16 2xl:py-8 rounded-2xl font-bold text-white text-lg 2xl:text-2xl hover:scale-105 transition-all duration-300 w-full shadow-lg shadow-[#373dff]/20"
                      >
                        Visitar Projeto Online
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}