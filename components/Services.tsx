"use client";

import React from "react";
import { TrendingUp, Target, Zap, Sparkles, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function Services() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    { icon: <TrendingUp className="w-8 h-8" />, title: "Websites profissionais", description: "Sites institucionais que transmitem autoridade e confiança.", color: "#ff00e2" },
    { icon: <Target className="w-8 h-8" />, title: "Landing pages", description: "Páginas focadas em converter visitantes em clientes.", color: "#8906e6" },
    { icon: <Zap className="w-8 h-8" />, title: "Aplicações web", description: "Sistemas personalizados para automatizar processos.", color: "#050deb" },
    { icon: <Sparkles className="w-8 h-8" />, title: "Otimização SEO", description: "Apareça nas primeiras posições do Google.", color: "#22D3EE" },
    { icon: <Clock className="w-8 h-8" />, title: "Performance", description: "Sites ultra-rápidos que mantêm os visitantes engajados.", color: "#ff00e2" },
    { icon: <Shield className="w-8 h-8" />, title: "UX Design", description: "Interfaces intuitivas que facilitam a jornada do cliente.", color: "#8906e6" },
  ];

  return (
    <section id="servicos" className="py-20 sm:py-32 px-4 bg-[#0d0d0d2f]">
      <div className="container mx-auto max-w-full">
        
        {/* Header da Seção - Ajuste de Escala */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-5xl sm:text-7xl lg:text-[120px] font-bold tracking-[-0.05em] leading-[0.9] text-white pb-6">
            O que{" "}
            <span className="bg-gradient-to-r from-[#ffbb00] to-[#e6b206] bg-clip-text text-transparent pr-4">
              fazemos
            </span>
          </h2>
          <p className="text-base sm:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed px-4">
            Soluções digitais completas, focadas em gerar valor real para o seu negócio.
          </p>
        </div>

        {/* Grid de Serviços - Imagens responsivas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#1A1A1B] border-white/5 hover:border-[#373dff]/50 transition-all duration-500 group"
            >
              <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center sm:items-start sm:text-left">
                {/* Ícone com tamanho fluido */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 mb-6 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${service.color}15`,
                    color: service.color,
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Botão com Margem de Segurança */}
        <div className="text-center mt-16 sm:mt-24">
          <Button
            onClick={() => scrollToSection("contato")}
            className="w-full sm:w-auto bg-gradient-to-r from-[#050deb] to-[#22D3EE] text-white font-bold px-8 py-6 text-base rounded-xl hover:scale-105 transition-transform"
          >
            Fale connosco sobre o seu projeto
          </Button>
        </div>
      </div>
    </section>
  );
}