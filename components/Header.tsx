"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button"; // Ajuste o caminho conforme seu projeto

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Monitora o scroll para mudar o fundo do header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função de Scroll Suave
  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/95 backdrop-blur-lg border-b border-[#373dff]/20 shadow-lg shadow-[#373dff]/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-0 lg:px-0 lg:ml-auto ">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Image
              src="/logo.png"
              alt="Logo Crea Web PT"
              width={150}
              height={40}
              onClick={() => scrollToSection("hero")}
              priority
              className="object-cover lg:-ml-4 md:-ml-4"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
  {["sobre", "servicos", "trabalhos", "contato"].map((item) => (
    <button
      key={item}
      onClick={() => scrollToSection(item)}
      className={`text-[#F8FAFC] hover:text-[#ff00e2] transition-colors text-sm lg:text-base capitalize ${
        item === "contato" ? "mr-6" : "" // mr-6 equivale a 24px
      }`}
    >
      {item === "sobre" ? "Sobre nós" : 
       item === "servicos" ? "O que fazemos" : 
       item === "trabalhos" ? "Exemplos de trabalhos" : "Contato"}
    </button>
  ))}
</nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-to-r from-[#ff00e2] to-[#8906e6] hover:from-[#ff00e2]/90 hover:to-[#8906e6]/90 text-white font-semibold px-6 py-2 rounded-lg shadow-lg shadow-[#ff00e2]/30 transition-all duration-300 hover:shadow-[#ff00e2]/50 hover:scale-105"
            >
              Pedir proposta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#1A1A1B] hover:bg-[#373dff]/20 transition-colors text-white mr-2"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0D0D0D]/98 backdrop-blur-lg border-b border-[#373dff]/20 shadow-xl animate-in slide-in-from-top-5 duration-300">
            <nav className="flex flex-col py-6 px-6 space-y-4">
              <MobileNavLink label="Sobre Nós" onClick={() => scrollToSection("sobre")} />
              <MobileNavLink label="O Que Fazemos" onClick={() => scrollToSection("servicos")} />
              <MobileNavLink label="Exemplos de Trabalhos" onClick={() => scrollToSection("trabalhos")} />
              <MobileNavLink label="Contato" onClick={() => scrollToSection("contato")} />
              
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-gradient-to-r from-[#ff00e2] to-[#8906e6] text-white font-semibold w-full py-6 text-lg"
              >
                Pedir Proposta
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Sub-componente para links móveis
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