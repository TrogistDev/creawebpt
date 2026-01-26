"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] overflow-hidden"
    >
      <div className="container mx-auto">
            <span className="text-[#ff9900] uppercase tracking-[0.5em] text-sm font-medium border-l-2 border-[#ff9900] pl-4 ml-1">
              Sobre a nossa visão
            </span>
        <div className="flex flex-col lg:flex-row gap-16 lg:items-stretch ">
          
          {/* Lado Esquerdo: Título Impactante */}
          <div className="lg:w-1/2 space-y-6 flex flex-col justify-between self-stretch">
            <h2 className="mt-8 text-8xl sm:text-7xl lg:text-8xl font-bold text-white tracking-[-0.05em] leading-[0.85]">
              Entendemos <br />
              <span className="bg-gradient-to-r from-[#ff9900] to-[#e69806] bg-clip-text text-transparent pr-2">
                os desafios
              </span> <br />
              do seu negócio
            </h2>
            {/* Frase de Efeito Final */}
            <div className="pt-4">
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tighter uppercase leading-none opacity-40">
                Clareza <span className="text-[#ff9900]">.</span> Profissionalismo <span className="text-[#ff9900]">.</span> Resultados
              </p>
            </div>
          </div>

          {/* Lado Direito: Conteúdo e Proposta de Valor */}
          <div className="lg:w-1/2 space-y-12">
            
            {/* Bloco de Problemas (A Dor) */}
            <div className="space-y-6 text-xl text-[#94A3B8] font-light leading-relaxed">
              <p>
                <strong className="text-[#F8FAFC] font-semibold">Falta de tempo.</strong>{" "}
                Orçamentos confusos. Receio de investir no projeto errado e não ver retorno real.
              </p>
              <p>
                Já se deparou com promessas de “websites incríveis” que não atraem clientes? 
                <span className="text-[#F8FAFC] font-medium italic block mt-2">Nós compreendemos a sua frustração.</span>
              </p>
            </div>

            {/* Bloco de Solução (O Diferencial) - Glassmorphism Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff9900]/20 to-[#eebe22]/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-8 bg-[#1A1A1B]/50 border border-white/10 rounded-2xl backdrop-blur-xl">
                <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed">
                  A <strong className="text-[#ff9900] font-bold">Crea Web PT</strong> não é apenas mais uma agência. 
                  Somos o seu <span className="text-white font-semibold">parceiro estratégico</span> focado em transformar a sua presença digital num ativo que gera resultados concretos.
                </p>
                
                <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-[#eebe22] font-semibold uppercase tracking-[0.15em] text-xs">
                    <CheckCircle2 size={18} />
                    Aumento de Vendas e Contactos
                  </div>
                  <div className="flex items-center gap-3 text-[#eebe22] font-semibold uppercase tracking-[0.15em] text-xs">
                    <CheckCircle2 size={18} />
                    Autoridade Online Reforçada
                  </div>
                </div>
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </section>
  );
}