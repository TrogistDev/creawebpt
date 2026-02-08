"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProjetosGrid from "@/components/ProjectGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackgroundVideo from "@/components/BackgroundVideo";
import Testimonials from "@/components/Testimonials";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-[#0D0D0D] text-[#F8FAFC] overflow-x-hidden relative selection:bg-[#ff00e2] selection:text-white">
      
    
        <BackgroundVideo />

       

      {/* --- CONTEÚDO DA PÁGINA --- */}
      {/* z-10 garante que o conteúdo fique acima do vídeo */}
      <div className="relative z-10 w-full">
        <Header />

        <main>
          <Hero />
          <Testimonials />
          <About />
          <Services />
          <ProjetosGrid /> 
          
          {/* O formulário está dentro do ContactForm, mas as regras de CSS abaixo 
              vão garantir que o "Grupo 02" funcione visualmente ao marcar */}
          <ContactForm />
        </main>
        
        <Footer />
      </div>

      {/* --- ESTILOS GLOBAIS --- */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Animação de entrada */
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

        /* CORREÇÃO DO GRUPO 02 (MARCAÇÃO DAS CAIXAS) */
        /* Como você usa Radix/Shadcn, o estado é controlado por data-state */
        [data-state="checked"] .selection-card, 
        .peer[data-state="checked"] ~ div {
          background-color: rgba(55, 61, 255, 0.15) !important;
          border-color: #373dff !important;
          color: white !important;
          box-shadow: 0 0 15px rgba(55, 61, 255, 0.2);
        }

        /* Variação para a cor Rosa no segundo grupo se necessário */
        [data-state="checked"] .selection-card-pink,
        .peer[data-state="checked"] ~ .selection-card-pink {
          background-color: rgba(255, 0, 226, 0.15) !important;
          border-color: #ff00e2 !important;
          color: white !important;
          box-shadow: 0 0 15px rgba(255, 0, 226, 0.2);
        }

        /* Garante que o vídeo não tenha bordas ou controles */
        video::-webkit-media-controls {
          display: none !important;
        }
      `,
        }}
      />
    </div>
  );
}