"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Sparkles, Zap, Target, Shield } from "lucide-react";
import { Button } from "./ui/button";
import Script from "next/script";
import GoogleReviews from "./GoogleReviews";

export default function Hero() {
  // Função interna para garantir o scroll suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
 

  return (
    <section
      className="relative mt-10 pt-24 sm:pt-32 pb-10 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden "
      id="hero"
    >
      <div className="container mx-auto max-w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-left-5 duration-700 ">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1B] border border-[#373dff]/30">
              <Sparkles className="w-4 h-4 text-[#22D3EE]" />
              <span className=" text-sm text-[#94A3B8]">
                Transforme a sua presença digital em resultados concretos
              </span>
            </div>

            {/* Headline */}

            <h1 className=" text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1] text-white tracking-[-0.06em] ">
              O padrão de{" "}
              <span className="bg-gradient-to-r from-[#ff9900] via-[#ff9900] to-[#ff9900] bg-clip-text text-transparent pr-2">
               qualidade 
              </span>{" "}
             global agora disponível em{" "}
               
              <span className="relative bg-gradient-to-r from-[#ff9900] to-[#ff9900] bg-clip-text text-transparent pr-4 pb-10">
                 Viana do Castelo.
              </span>
            </h1>
            <GoogleReviews />

            {/* Subheadline */}
            <p className=" sm:text-xl lg:text-2xl text-[#94A3B8] leading-relaxed max-w-2xl tracking-wider">
              Na <strong className="text-[#F8FAFC]">Crea Web PT</strong>,
              criamos soluções web profissionais para empresários que querem{" "}
              <strong className="text-[#F8FAFC]">aumentar vendas</strong>,
              <strong className="text-[#F8FAFC]">
                {" "}
                gerar contactos qualificados{" "}
              </strong>
              e{" "}
              <strong className="text-[#F8FAFC]">
                {" "}
                fortalecer a sua marca{" "}
              </strong>
              online. Sem rodeios, apenas resultados mensuráveis.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contato")}
                size="lg"
                className="bg-gradient-to-r from-[#ff00e2] to-[#8906e6] hover:from-[#ff00e2]/90 hover:to-[#8906e6]/90 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg shadow-[#ff00e2]/30 transition-all duration-300 hover:shadow-[#ff00e2]/50 hover:scale-105"
              >
                Pedir proposta grátis
              </Button>
              <Button
                onClick={() => scrollToSection("trabalhos")}
                size="lg"
                variant="outline"
                className="border-2 border-[#373dff] text-[#F8FAFC] hover:bg-[#373dff]/10 px-8 py-6 text-lg rounded-lg transition-all duration-300"
              >
                Ver exemplos de sucesso
              </Button>
            </div>

            {/* Highlights / Benefícios */}
            <div className="flex flex-wrap gap-6 pt-4 ">
              <BenefitItem
                icon={<Zap className="w-5 h-5 text-[#22D3EE] " />}
                label={<span className="text-white">Entrega Ágil em 48h úteis mínimas</span>}
                bgColor="bg-[#22D3EE]/10"
                

              />
              <BenefitItem
                icon={<Target className="w-5 h-5 text-[#ff00e2]" />}
                label={<span className="text-white">Design Focado em Vendas</span>}
                bgColor="bg-[#ff00e2]/10"
              />
              <BenefitItem
                icon={<Shield className="w-5 h-5 text-[#8906e6]" />}
                label={<span className="text-white">Resposta em até 1 hora (Horário Comercial)</span>}
                bgColor="bg-[#8906e6]/10"
              />
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-200">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00e2]/20 to-[#050deb]/20 blur-3xl rounded-full" />
            <div className="relative w-full aspect-video sm:aspect-square lg:aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-[#373dff]/20 border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3"
                alt="Websites Profissionais para Empresários"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-componente auxiliar para os benefícios
function BenefitItem({
  icon,
  label,
  bgColor,
}: {
  icon: React.ReactNode;
  label: string;
  bgColor: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center`}
      >
        {icon}
      </div>
      <span className="text-sm text-[#94A3B8] font-medium">{label}</span>
    </div>
  );
}
