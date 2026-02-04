"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 p-0 ${
        scrolled
          ? "bg-[#0D0D0D]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-0 "
          : "bg-transparent py-0"
      }`}
    >
      {/* Ajuste no container: 
          - max-w-screen-2xl para não espalhar demais em telas gigantes 
          - 2xl:px-20 para mais respiro lateral
      */}
      <div className="container mx-auto pl-0 lg:pl-0 2xl:pl-0 px-6 lg:px-12 2xl:px-20 max-w-[1920px]">
        <div className="flex items-center justify-between h-16 sm:h-20 2xl:h-28">
          
          {/* 1. Logo: Aumenta em telas grandes */}
          <div className="flex-shrink-0  cursor-pointer transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo.png"
              alt="Logo Crea Web PT"
              width={220} 
              height={220}
              // Classes para escalar a logo em 2xl
              className="object-contain w-[220px] h-auto sm:w-[220px] 2xl:w-[220px] overflow-hidden"
              onClick={() => scrollToSection("hero")}
              priority
            />
          </div>

          {/* 2. Desktop Menu: gap-x maior e fontes maiores (text-base e text-lg) */}
          <nav className="hidden md:flex items-center gap-x-10 2xl:gap-x-16">
            {["sobre", "servicos", "trabalhos", "contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="group relative text-[#F8FAFC]/80 hover:text-white transition-all duration-300 text-sm 2xl:text-lg font-medium tracking-widest uppercase"
              >
                {item === "sobre" ? "Sobre nós" : 
                 item === "servicos" ? "Serviços" : 
                 item === "trabalhos" ? "Portfolio" : "Contato"}
                
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-[#ff00e2] to-[#8906e6] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* 3. CTA Button: Padding e fonte aumentados */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contato")}
              className="relative overflow-hidden bg-gradient-to-r from-[#ff00e2] to-[#8906e6] text-white font-bold px-8 py-6 2xl:px-12 2xl:py-8 2xl:text-xl rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,226,0.4)] active:scale-95"
            >
              <span className="relative z-10">Pedir proposta</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
            </Button>
          </div>

          {/* 4. Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#373dff]/20 transition-all text-white"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="md:hidden absolute top-[100%] left-4 right-4 mt-2 bg-[#0D0D0D]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <nav className="flex flex-col p-8 space-y-6">
              <MobileNavLink label="Sobre Nós" onClick={() => scrollToSection("sobre")} />
              <MobileNavLink label="Serviços" onClick={() => scrollToSection("servicos")} />
              <MobileNavLink label="Portfolio" onClick={() => scrollToSection("trabalhos")} />
              <MobileNavLink label="Contato" onClick={() => scrollToSection("contato")} />
              
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-gradient-to-r from-[#ff00e2] to-[#8906e6] text-white font-bold w-full py-8 rounded-2xl text-xl"
              >
                Pedir Proposta
              </Button>
            </nav>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </header>
  );
}

function MobileNavLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-left text-[#F8FAFC] hover:text-[#ff00e2] transition-colors py-3 px-4 rounded-lg hover:bg-[#1A1A1B] text-lg font-medium"
    >
      {label}
    </button>
  );
}