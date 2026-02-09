"use client";

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X } from "lucide-react";

export default function ChatWidget() {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
  if (scrollRef.current) {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}, [messages]); // Observa as mensagens (incluindo o streaming palavra por palavra)

 async function sendMessage(e: React.FormEvent) {
  e.preventDefault();
  if (!input.trim() || loading) return;

  const userMessage = { role: 'user', content: input };
  
  // 1. Adicionamos a mensagem do utilizador
  // Removemos a criação do balão vazio manual aqui para evitar duplicados
  setMessages(prev => [...prev, userMessage]);
  setInput('');
  setLoading(true);

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [...messages, userMessage] }),
    });

    // Criamos o balão da IA apenas quando o stream começa
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();
    let textoAcumulado = "";

    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        textoAcumulado += chunk;

        setMessages(prev => {
          const novas = [...prev];
          novas[novas.length - 1] = { role: 'assistant', content: textoAcumulado };
          return novas;
        });
      }
    }
  } catch (error) {
    console.error("Erro:", error);
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
  {/* Botão de Abrir Chat com animação de pulso */}
  <button 
  onClick={() => setIsOpen(!isOpen)}
  className="relative bg-[#8906e6] p-4 rounded-full shadow-lg shadow-[#ff00e2]/40 hover:scale-110 hover:shadow-[#ff00e2]/60 transition-all duration-300 border-2 border-[#ff00e2]/50 group"
  style={{
    boxShadow: '0 0 30px rgba(255, 0, 226, 0.4), 0 0 60px rgba(137, 6, 230, 0.3)'
  }}
>
  {!isOpen && (
    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-zinc-950 z-10"></span>
  )}
  {isOpen ? (
    <X className="w-6 h-6 text-white" />
  ) : (
    <MessageCircle className="w-6 h-6 text-white" />
  )}
</button>

  {isOpen && (
    <div className="absolute bottom-20 right-0 w-[380px] h-[550px] bg-gradient-to-b from-zinc-950 to-black border border-white/10 rounded-3xl flex flex-col overflow-hidden shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-4 duration-300">
      
      {/* Header do Chat */}
      <div className="p-5 border-b border-white/5 bg-gradient-to-r from-[#ff00e2]/10 to-[#8906e6]/10 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff00e2] to-[#8906e6] flex items-center justify-center">
              <span className="text-white text-lg">🤖</span>
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-950"></span>
          </div>
          <div>
            <h3 className="text-white text-sm font-bold">AI SUPPORT - CREA WEB</h3>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Sempre online</p>
          </div>
        </div>
      </div>

      {/* Mensagens */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#0a0a0a]">
        {/* Mensagem de boas-vindas */}
        {messages.length === 0 && (
          <div className="flex justify-start">
            <div className="max-w-[85%] p-4 rounded-2xl rounded-bl-none bg-zinc-900/80 border border-white/5 backdrop-blur-sm">
              <p className="text-zinc-300 text-sm leading-relaxed">
                Olá! 👋 Sou o assistente da <strong className="text-[#ff00e2]">Crea Web PT</strong>.
              </p>
              <p className="text-zinc-400 text-xs mt-2">
                Como posso ajudar com o seu projeto hoje?
              </p>
              <div className="mt-3 space-y-2">
                <button 
                  onClick={() => setInput("Quais são os preços?")}
                  className="w-full text-left text-[10px] text-zinc-500 hover:text-[#ff00e2] transition-colors bg-zinc-800/50 hover:bg-zinc-800 rounded-lg px-3 py-2"
                >
                  💰 Quais são os preços?
                </button>
                <button 
                  onClick={() => setInput("Qual é o prazo de entrega?")}
                  className="w-full text-left text-[10px] text-zinc-500 hover:text-[#ff00e2] transition-colors bg-zinc-800/50 hover:bg-zinc-800 rounded-lg px-3 py-2"
                >
                  ⚡ Qual é o prazo de entrega?
                </button>
              </div>
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-gradient-to-r from-[#800071] to-[#8906e6] text-white rounded-br-none shadow-lg shadow-[#ff00e2]/20' 
                : 'bg-zinc-900/80 text-zinc-300 rounded-bl-none border border-white/5 backdrop-blur-sm'
            }`} 
            style={{ whiteSpace: 'pre-wrap' }}>
              {m.content}
            </div>
          </div>
        ))}
        <div ref={scrollRef} />
        {loading && (
          <div className="flex justify-start">
            <div className="bg-zinc-900/80 border border-white/5 rounded-2xl rounded-bl-none p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-[#ff00e2] rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                  <span className="w-2 h-2 bg-[#8906e6] rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                  <span className="w-2 h-2 bg-[#ff00e2] rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                </div>
                <span className="text-zinc-500 text-xs">A pensar...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input de Mensagem */}
      <form onSubmit={sendMessage} className="p-4 bg-zinc-900/50 border-t border-white/5 backdrop-blur-sm">
        <div className="relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pergunte sobre as nossas Landing Pages..."
            className="w-full bg-zinc-800/80 text-white border border-white/10 rounded-xl p-4 pr-12 text-sm placeholder:text-zinc-600 focus:ring-2 focus:ring-[#ff00e2] focus:border-transparent outline-none transition-all"
          />
          <button 
            type="submit"
            disabled={!input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#ff00e2] to-[#8906e6] p-2 rounded-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-white text-sm">➤</span>
          </button>
        </div>
        <p className="text-zinc-600 text-[9px] uppercase tracking-widest mt-2 text-center">
          Powered by Llama-3 AI
        </p>
      </form>
    </div>
  )}
</div>
  );
}