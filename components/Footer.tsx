import React from "react";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-t border-[#373dff]/20">
      <div className="container mx-auto text-center space-y-4">
        {/* Redes Sociais */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61585650845985"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Crea Web PT"
            className="text-[#94A3B8] hover:text-[#373dff] transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>

          <a
            href="https://www.instagram.com/creawebpt/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Crea Web PT"
            className="text-[#94A3B8] hover:text-[#ff00e2] transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <p className="text-[#94A3B8]">
          © 2025 <strong className="text-[#F8FAFC]">Crea Web PT</strong>.
          Todos os direitos reservados.
        </p>

        <p className="text-sm text-[#94A3B8]">
          Transformando ideias em resultados digitais
        </p>
      </div>
    </footer>
  );
}