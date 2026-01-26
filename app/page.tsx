"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProjetosGrid from "@/components/ProjectGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F8FAFC] overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff00e171] opacity-20 blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8906e670] opacity-20 blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#050deb7a] opacity-15 blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Sobre Nós Section */}
      <About />

      {/* O Que Fazemos Section */}
      <Services />

      {/* Exemplos de Trabalhos Section */}
      <ProjetosGrid /> 

      {/* Formulário de Contato */}
      <ContactForm />
     
      {/* Footer */}
      <Footer />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        html {
          scroll-behavior: smooth;
        }
      `,
        }}
      />
    </div>
  );
}