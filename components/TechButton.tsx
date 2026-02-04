'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface TechButtonProps {
  href: string;
  title: string;
}

export default function TechButton({ href, title }: TechButtonProps) {
  return (
    // Mudamos 'group' para 'group/btn' para isolar o hover
    <Link href={href} target="_blank" className="relative inline-block w-fit group/btn mt-8">
      
      {/* 1. O rastro da faísca (Borda animada) */}
      <div className="absolute -inset-[1px] rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 overflow-hidden">
        <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#373dff_90%,#8b5cf6_100%)]" />
      </div>

      {/* 2. O corpo do botão */}
      <div className="relative bg-[#0a0a0a] px-6 py-3 rounded-[7px] flex items-center gap-3 transition-all duration-300 group-hover/btn:bg-[#111111] ">
        <span className="text-[#ffffff] text-sm 2xl:text-lg font-bold uppercase tracking-widest group-hover/btn:text-white transition-colors">
          {title}
        </span>
        
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[#ffffff] group-hover/btn:text-white"
        >
          <ExternalLink size={18} />
        </motion.div>

        {/* Efeito de brilho interno sutil */}
        <div className="absolute inset-0 rounded-[7px] shadow-[inset_0_0_15px_rgba(55,61,255,0.1)] group-hover/btn:shadow-[inset_0_0_20px_rgba(55,61,255,0.3)] transition-shadow" />
      </div>
    </Link>
  );
}