"use client";
import React, { useState } from "react";
import { TrendingUp, Target, Zap, Sparkles, Clock, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="servicos" className="py-20 sm:py-32 px-4 bg-[#0d0d0d2f]">
      <div className="container mx-auto max-w-full">
        
        {/* Header da Seção */}
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

        {/* Carrossel para Mobile / Grid para Desktop */}
        <div className="relative">
          {/* Grid Desktop (escondido no mobile) */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-[#1A1A1B] border-white/5 hover:border-[#373dff]/50 transition-all duration-500 group"
              >
                <CardContent className="p-6 sm:p-8 flex flex-col items-start text-left">
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

          {/* Carrossel Mobile (visível apenas no mobile/tablet) */}
          <div className="lg:hidden">
            <div className="relative max-w-md mx-auto">
              {/* Seta Esquerda */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-zinc-800/80 hover:bg-zinc-700 text-white p-3 rounded-full transition-all hover:scale-110"
                aria-label="Serviço anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Card Atual */}
              <Card className="bg-[#1A1A1B] border-white/5 hover:border-[#373dff]/50 transition-all duration-500">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div
                    className="w-14 h-14 mb-6 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${services[currentIndex].color}15`,
                      color: services[currentIndex].color,
                    }}
                  >
                    {services[currentIndex].icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {services[currentIndex].title}
                  </h3>
                  <p className="text-base text-[#94A3B8] leading-relaxed">
                    {services[currentIndex].description}
                  </p>
                </CardContent>
              </Card>

              {/* Seta Direita */}
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-zinc-800/80 hover:bg-zinc-700 text-white p-3 rounded-full transition-all hover:scale-110"
                aria-label="Próximo serviço"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicadores de Posição */}
              <div className="flex justify-center gap-2 mt-6">
                {services.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex 
                        ? 'w-8 bg-[#ffbb00]' 
                        : 'w-2 bg-zinc-700 hover:bg-zinc-600'
                    }`}
                    aria-label={`Ir para serviço ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Botão */}
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