"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Sparkles, Zap, Target, Shield, DollarSign } from "lucide-react";
import { Button } from "./ui/button";
import Script from "next/script";
import Testimonials from "./Testimonials";


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
      className="relative mt-10 pt-24 sm:pt-32 pb-10  px-4 sm:px-6 lg:px-8 overflow-hidden "
      id="hero"
    >
      <div className="container mx-auto max-w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-left-5 duration-700 ">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1B] border border-[#ff9900]/30">
              <Sparkles className="w-4 h-4 text-[#ff9900]" />
              <span className=" text-sm text-[#94A3B8]">
                A diferença entre gerar €10.000 ou €0 está no design
              </span>
            </div>

            {/* Headline */}
            <h1 className=" text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1] text-white tracking-[-0.06em] ">
              A sua landing page pode gerar{" "}
              <span className="bg-gradient-to-r from-[#ff9900] via-[#ff9900] to-[#ff9900] bg-clip-text text-transparent pr-2">
                €10.000
              </span>{" "}
              em vendas.{" "}
              <span className="relative text-white pr-4">
                Ou €0.
              </span>
            </h1>
           

           

            {/* Subheadline */}
            <p className=" sm:text-xl lg:text-2xl text-[#94A3B8] leading-relaxed max-w-2xl tracking-wider">
              <strong className="text-[#F8FAFC]">A diferença?</strong> Design profissional que converte visitantes em clientes.
              <br />
              <br />
              A partir{" "}
              <strong className="text-[#ff9900]">
                €700
              </strong>{" "}
              <span className="text-[#94A3B8]">(em até 3x)</span>, tenha uma landing page 
              que{" "}
              <strong className="text-[#F8FAFC]">trabalha para si 24/7</strong>{" "}
              e se paga sozinha em semanas.
            </p>

           

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contato")}
                size="lg"
                className="bg-gradient-to-r from-[#ff00e2] to-[#8906e6] hover:from-[#ff00e2]/90 hover:to-[#8906e6]/90 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg shadow-[#ff00e2]/30 transition-all duration-300 hover:shadow-[#ff00e2]/50 hover:scale-105"
              >
                Quero uma Proposta Gratuita
              </Button>
              <Button
                onClick={() => scrollToSection("trabalhos")}
                size="lg"
                variant="outline"
                className="border-2 border-[#ff9900] text-[#ffffff] hover:bg-[#ff9900]/10 px-8 py-6 text-lg rounded-lg transition-all duration-300"
              >
                Ver exemplos de sucesso
              </Button>
            </div>
             

            {/* Highlights / Benefícios - GRID FIXO 2 COLUNAS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 pt-4 max-w-3xl">
              <BenefitItem
                icon={<Zap className="w-5 h-5 text-[#ff9900] " />}
                label={
                  <span className="text-white">
                    Entrega Ágil em 48h úteis mínimas
                  </span>
                }
                bgColor="bg-[#ff9900]/10"
              />
              <BenefitItem
                icon={<Target className="w-5 h-5 text-[#ff00e2]" />}
                label={
                  <span className="text-white">Design Focado em Vendas</span>
                }
                bgColor="bg-[#ff00e2]/10"
              />
              <BenefitItem
                icon={<Shield className="w-5 h-5 text-[#8906e6]" />}
                label={
                  <span className="text-white">
                    Resposta em até 1 hora
                    <span className="block text-[14px] text-zinc-500 mt-0.5">
                      (Horário Comercial)
                    </span>
                  </span>
                }
                bgColor="bg-[#8906e6]/10"
              />

              <BenefitItem
                icon={<DollarSign className="w-5 h-5 text-[#0acf14]" />}
                label={
                  <span className="text-white text-sm">
                    Investimento a partir de 700€{" "}
                    <span className="text-zinc-400 text-xs">(Em até 3x)</span>
                    <span className="block text-[14px] text-zinc-500 mt-0.5">
                      + manutenção mensal a partir de 40€
                    </span>
                  </span>
                }
                bgColor="bg-[#0acf14]/10"
              />
            </div>
          </div>

          {/* Hero Image */}
<div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-200">
  <div className="absolute inset-0 bg-gradient-to-r from-[#ff00e2]/20 to-[#8906e6]/20 blur-3xl rounded-full" />
  <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-[#ff00e2]/20 border border-white/10 max-h-[300px] sm:max-h-none">
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
  label: React.ReactNode;
  bgColor: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center flex-shrink-0`}
      >
        {icon}
      </div>
      <span className="text-sm text-[#94A3B8] font-medium">{label}</span>
    </div>
  );
}