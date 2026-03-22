"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { trackConversion } from "@/utils/gtag";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    area: "",

    // Detalhes do Projeto
    tipoProjeto: "",
    objetivo: "",

    // Expectativas (Novos e Antigos)
    prazo: "",
    orcamento: "",
    conteudo: "", // Novo: Select de Conteúdo
    decisao: "", // Novo: Select de Decisão
    referencias: "", // Novo: Input de texto

    // Finalização
    mensagem: "",
    promocao: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    // Esta é a forma mais fácil de pegar TODOS os dados do formulário de uma vez,
    // incluindo Select e RadioGroup que possuem o atributo 'name'
    const form = e.currentTarget as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), // Enviamos o objeto 'data' com todos os campos
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Proposta enviada!", {
          description: "Recebemos os teus dados e responderemos em 24h.",
        });
        const eventId = `event-${Date.now()}`; // ID único para o evento
        const email = data.email; // Pegue do input
        console.log(data.email);

        
        trackConversion(); // Chama a função para enviar o evento de conversão
        form.reset();
      } else {
        // Aqui o console vai te dizer exatamente o que a API não gostou
        console.error("Erro da API:", result);
        toast.error("Erro ao enviar", {
          description: result.error?.message || "Tenta novamente mais tarde.",
        });
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      toast.error("Falha na ligação", {
        description: "Verifica a tua internet.",
      });
    } finally {
      setIsPending(false); // Termina o carregamento
    }
  };
  const [isPending, setIsPending] = useState(false);
  return (
    <section
      id="contato"
      className="py-20 sm:py-32 -px-4 sm:px-6 lg:px-8 bg-[#0d0d0d2f] "
    >
      <div className="text-center mb-16 animate-fade-in -px-4 bg-black/10  w-fit mx-auto">
        <h2 className="text-6xl sm:text-7xl lg:text-[100px] font-bold mb-6 tracking-[-0.04em] leading-[0.8] lg:leading-[0.9] text-white -border-4">
          O fim das{" "}
          <span className="inline-block relative">
            <span className="bg-gradient-to-r from-[#ffbb00] via-[#ff9100] to-[#e67206] bg-clip-text text-transparent pb-2 pr-2">
              reuniões inúteis
            </span>
            <span className="absolute bottom-2 left-0 w-full h-[6px] bg-[#ffbb00]/20 blur-sm rounded-full "></span>
          </span>
        </h2>
        <p className="text-lg sm:text-2xl text-white max-w-3xl mx-auto font-light leading-relaxed">
          Toda agência pedirá estes dados. Nós apenas os organizamos para você
          não perder 1 hora em call.
          <span className="text-white font-medium">
            {" "}
            Responda em 2 minutos
          </span>{" "}
          e receba sua proposta em algumas horas.
        </p>
      </div>
      <CardContent className="p-8 sm:p-12 lg:p-16 bg-[#0a0a0a]/90 rounded-3xl">
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* GRUPO 1: Identificação (MANTIDO IGUAL) */}
          <div className="space-y-8">
            <h3 className="text-xl text-white font-medium uppercase tracking-widest border-b border-white/10 pb-2 mb-6">
              01. Sobre Si
            </h3>

            <div className="space-y-6">
              <div className="space-y-3">
                <Label
                  htmlFor="nome"
                  className="text-[#ffffff] text-sm uppercase tracking-wide font-semibold ml-1"
                >
                  Nome Completo <span className="text-[#ff00e2]">*</span>
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={(e) => handleInputChange("nome", e.target.value)}
                  className="h-16 bg-[#0a0a0a] border border-white/10 text-white text-xl px-6 rounded-2xl focus:border-[#373dff] focus:ring-1 focus:ring-[#373dff] focus:shadow-[0_0_20px_rgba(55,61,255,0.3)] transition-all placeholder:text-white/20"
                  placeholder="Como prefere ser tratado?"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="text-[#ffffff] text-sm uppercase tracking-wide font-semibold ml-1"
                  >
                    Email Corporativo <span className="text-[#ff00e2]">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="h-16 bg-[#0a0a0a] border border-white/10 text-white text-xl px-6 rounded-2xl focus:border-[#373dff] focus:ring-1 focus:ring-[#373dff] transition-all placeholder:text-white/20"
                    placeholder="email@empresa.com"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="telefone"
                    className="text-[#ffffff] text-sm uppercase tracking-wide font-semibold ml-1"
                  >
                    WhatsApp / Telefone{" "}
                    <span className="text-[#ff00e2]">*</span>
                  </Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    required
                    className="h-16 bg-[#0a0a0a] border border-white/10 text-white text-xl px-6 rounded-2xl focus:border-[#373dff] focus:ring-1 focus:ring-[#373dff] transition-all placeholder:text-white/20"
                    placeholder="+351 ..."
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label
                    htmlFor="empresa"
                    className="text-[#ffffff] text-sm uppercase tracking-wide font-semibold ml-1"
                  >
                    Nome da Empresa
                  </Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    className="h-16 bg-[#0a0a0a] border border-white/10 text-white text-xl px-6 rounded-2xl focus:border-[#373dff] transition-all placeholder:text-white/20"
                    placeholder="Sua marca"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="area"
                    className="text-[#ffffff] text-sm uppercase tracking-wide font-semibold ml-1"
                  >
                    Setor de Atuação <span className="text-[#ff00e2]">*</span>
                  </Label>
                  <div className="relative">
                    <Select name="area" required>
                      <SelectTrigger className="w-full h-16 bg-[#0a0a0a] border border-white/10 text-white text-lg px-6 rounded-2xl focus:border-[#373dff] focus:ring-1 focus:ring-[#373dff]">
                        <SelectValue placeholder="Selecione o seu setor" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1A1B] border border-[#373dff]/20 text-white rounded-xl">
                        <SelectItem
                          value="restauracao"
                          className="py-3 text-lg focus:bg-[#373dff]/20"
                        >
                          Restauração
                        </SelectItem>
                        <SelectItem
                          value="saude"
                          className="py-3 text-lg focus:bg-[#373dff]/20"
                        >
                          Saúde (Clínicas, Dentistas, Fisioterapia)
                        </SelectItem>
                        <SelectItem
                          value="beleza"
                          className="py-3 text-lg focus:bg-[#373dff]/20"
                        >
                          Beleza e Estética (Salões, Barbeiros, SPAs)
                        </SelectItem>
                        <SelectItem
                          value="ecommerce"
                          className="py-3 text-lg focus:bg-[#373dff]/20"
                        >
                          E-commerce / Loja Online
                        </SelectItem>
                        <SelectItem
                          value="imobiliario"
                          className="py-3 text-lg focus:bg-[#373dff]/20"
                        >
                          Imobiliário
                        </SelectItem>
                        <SelectItem
                          value="educacao"
                          className="py-3 text-lg focus:bg-[#373dff]/20"
                        >
                          Educação (Cursos, Escolas, Formação)
                        </SelectItem>
                        <SelectItem
                          value="consultoria"
                          className="py-3 text-lg focus:bg-[#373dff]/20"
                        >
                          Consultoria / Serviços Profissionais
                        </SelectItem>
                        <SelectItem
                          value="fitness"
                          className="py-3 text-lg focus:bg-[#373dff]/20"
                        >
                          Fitness / Ginásios
                        </SelectItem>
                        <SelectItem
                          value="turismo"
                          className="py-3 text-lg focus:bg-[#373dff]/20"
                        >
                          Turismo e Hotelaria
                        </SelectItem>
                        <SelectItem
                          value="outro"
                          className="py-3 text-lg focus:bg-[#373dff]/20"
                        >
                          Outro
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* GRUPO 2: Detalhes do Projeto (MANTIDO IGUAL) */}
          <div className="space-y-8">
            <h3 className="text-xl text-white font-medium uppercase tracking-widest border-b border-white/10 pb-2 mb-6">
              02. O Projeto
            </h3>
            <div className="space-y-4">
              <Label className="text-[#ffffff] text-lg font-semibold ml-1">
                O que estamos a construir?{" "}
                <span className="text-[#ff00e2]">*</span>
              </Label>
              <RadioGroup
                name="tipoProjeto"
                required
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {[
                  "Website Institucional",
                  "Landing Page",
                  "Loja Online",
                  "Aplicação Web",
                  "Redesign Completo",
                  "Outro",
                ].map((label, idx) => (
                  <label key={idx} className="relative group cursor-pointer">
                    <RadioGroupItem
                      value={label.toLowerCase().replace(/ /g, "-")}
                      id={`type-${idx}`}
                      className="peer sr-only"
                    />
                    <div
                      className="flex items-center justify-center text-center p-6 h-full rounded-2xl bg-[#1A1A1B] border border-white/5 text-[#ffffff] transition-all duration-300 hover:bg-[#252526] hover:border-white/20
                  peer-data-[state=checked]:bg-[#373dff]/20
                  peer-data-[state=checked]:border-[#373dff]
                  peer-data-[state=checked]:text-white
                  peer-data-[state=checked]:shadow-[0_0_20px_rgba(55,61,255,0.3)]"
                    >
                      <span className="font-medium text-lg">{label}</span>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-4 pt-4">
              <Label className="text-[#ffffff] text-lg font-semibold ml-1">
                Qual o objetivo principal?{" "}
                <span className="text-[#ff00e2]">*</span>
              </Label>
              <RadioGroup
                name="objetivo"
                required
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  { title: "Gerar Leads", desc: "Mais contactos e orçamentos" },
                  {
                    title: "Vendas Diretas",
                    desc: "Aumentar faturação online",
                  },
                  {
                    title: "Autoridade",
                    desc: "Melhorar posicionamento da marca",
                  },
                  { title: "Automação", desc: "Otimizar processos internos" },
                ].map((item, idx) => (
                  <label key={idx} className="relative group cursor-pointer">
                    <RadioGroupItem
                      value={item.title.toLowerCase().replace(/ /g, "-")}
                      id={`obj-${idx}`}
                      className="peer sr-only"
                    />
                    <div
                      className="flex flex-col p-5 rounded-2xl bg-[#1A1A1B] border border-white/5 text-[#ffffff] transition-all duration-300 hover:bg-[#252526]
                  peer-data-[state=checked]:bg-[#ff00e2]/20
                  peer-data-[state=checked]:border-[#ff00e2]
                  peer-data-[state=checked]:text-white
                  peer-data-[state=checked]:shadow-[0_0_20px_rgba(255,0,226,0.2)]"
                    >
                      <span className="font-bold text-lg text-[#ffffff]">
                        {item.title}
                      </span>
                      <span className="text-sm text-white/40 mt-1">
                        {item.desc}
                      </span>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </div>
          </div>
          {/* GRUPO 3: Expectativas (ATUALIZADO COM NOVAS PERGUNTAS) */}
          <div className="space-y-8">
            <h3 className="text-xl text-white font-medium uppercase tracking-widest border-b border-white/10 pb-2 mb-6">
              03. Expectativas & Detalhes
            </h3>
            {/* LINHA 1: Prazo e Investimento (Mantido) */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label className="text-[#ffffff] text-sm uppercase tracking-wide font-semibold ml-1">
                  Urgência <span className="text-[#ff00e2]">*</span>
                </Label>
                <div className="relative">
                  <Select name="prazo" required>
                    <SelectTrigger className="w-full h-16 bg-[#0a0a0a] border border-white/10 text-white text-lg px-6 rounded-2xl focus:border-[#373dff] focus:ring-1 focus:ring-[#373dff]">
                      <SelectValue placeholder="Selecione o prazo" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1B] border border-[#373dff]/20 text-white rounded-xl">
                      <SelectItem
                        value="urgente"
                        className="py-3 text-lg focus:bg-[#373dff]/20"
                      >
                        Para ontem (Urgente)
                      </SelectItem>
                      <SelectItem
                        value="rapido"
                        className="py-3 text-lg focus:bg-[#373dff]/20"
                      >
                        1 a 3 Semanas
                      </SelectItem>
                      <SelectItem
                        value="normal"
                        className="py-3 text-lg focus:bg-[#373dff]/20"
                      >
                        1 Mês +
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-3">
                <Label className="text-[#ffffff] text-sm uppercase tracking-wide font-semibold ml-1">
                  Investimento Previsto{" "}
                  <span className="text-[#ff00e2]">*</span>
                </Label>
                <div className="relative">
                  <Select name="orcamento" required>
                    <SelectTrigger className="w-full h-16 bg-[#0a0a0a] border border-white/10 text-white text-lg px-6 rounded-2xl focus:border-[#ff00e2] focus:ring-1 focus:ring-[#ff00e2]">
                      <SelectValue placeholder="Defina um intervalo" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1B] border border-[#ff00e2]/20 text-white rounded-xl">
                      <SelectItem
                        value="low"
                        className="py-3 text-lg focus:bg-[#ff00e2]/20"
                      >
                        700€ - 1.500€
                      </SelectItem>
                      <SelectItem
                        value="mid"
                        className="py-3 text-lg focus:bg-[#ff00e2]/20"
                      >
                        1.500€ - 3.000€
                      </SelectItem>
                      <SelectItem
                        value="high"
                        className="py-3 text-lg focus:bg-[#ff00e2]/20"
                      >
                        3.000€ - 5.000€
                      </SelectItem>
                      <SelectItem
                        value="pro"
                        className="py-3 text-lg focus:bg-[#ff00e2]/20"
                      >
                        + 5.000€
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            {/* LINHA 2: Conteúdo e Decisão (NOVO - Usando Selects) */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label className="text-[#ffffff] text-sm uppercase tracking-wide font-semibold ml-1">
                  Estado do Conteúdo (Texto/Imagens){" "}
                  <span className="text-[#ff00e2]">*</span>
                </Label>
                <div className="relative">
                  <Select name="conteudo" required>
                    <SelectTrigger className="w-full h-16 bg-[#0a0a0a] border border-white/10 text-white text-lg px-6 rounded-2xl focus:border-[#373dff] focus:ring-1 focus:ring-[#373dff]">
                      <SelectValue placeholder="Como está o material?" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1B] border border-[#373dff]/20 text-white rounded-xl">
                      <SelectItem
                        value="pronto"
                        className="py-3 text-lg focus:bg-[#373dff]/20"
                      >
                        Tenho tudo pronto
                      </SelectItem>
                      <SelectItem
                        value="parcial"
                        className="py-3 text-lg focus:bg-[#373dff]/20"
                      >
                        Tenho algumas coisas
                      </SelectItem>
                      <SelectItem
                        value="nada"
                        className="py-3 text-lg focus:bg-[#373dff]/20"
                      >
                        Não tenho nada ainda
                      </SelectItem>
                      <SelectItem
                        value="ajuda"
                        className="py-3 text-lg focus:bg-[#373dff]/20"
                      >
                        Preciso que criem por mim
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
            </div>
            {/* LINHA 3: Referências (NOVO) */}
            <div className="space-y-3">
              <Label
                htmlFor="referencias"
                className="text-[#ffffff] text-sm uppercase tracking-wide font-semibold ml-1"
              >
                Referências Visuais (Opcional)
              </Label>
              <Input
                id="referencias"
                name="referencias"
                className="h-16 bg-[#0a0a0a] border border-white/10 text-white text-xl px-6 rounded-2xl focus:border-[#373dff] focus:ring-1 focus:ring-[#373dff] transition-all placeholder:text-white/20"
                placeholder="Cole aqui links de sites que gosta ou concorrentes..."
              />
            </div>
            {/* LINHA 4: Mensagem Aberta (Mantido) */}
            <div className="space-y-3">
              <Label
                htmlFor="mensagem"
                className="text-[#ffffff] text-sm uppercase tracking-wide font-semibold ml-1"
              >
                Detalhes adicionais
              </Label>
              <Textarea
                id="mensagem"
                name="mensagem"
                className="bg-[#0a0a0a] border border-white/10 text-white text-lg p-6 rounded-2xl focus:border-[#373dff] focus:ring-1 focus:ring-[#373dff] min-h-[160px] placeholder:text-white/20"
                placeholder="Conte-nos o principal problema que o site atual (ou a falta dele) causa hoje..."
              />
            </div>
          </div>
          {/* Footer do Form */}
          <div className="pt-6 border-t border-white/5 space-y-8">
            {/* Select de Marketing */}
            <div className="bg-[#1A1A1B]/50 p-6 rounded-2xl border border-white/5">
              <label className="block text-white font-medium text-lg mb-4">
                Gostaria de receber novidades exclusivas?{" "}
                <span className="text-[#ff00e2]">*</span>
              </label>
              <div className="relative">
                <select
                  name="promocao"
                  required
                  className="w-full h-14 bg-[#0a0a0a] border border-white/10 text-white text-lg px-6 rounded-xl focus:border-[#ff00e2] appearance-none cursor-pointer outline-none transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Selecione uma opção...
                  </option>
                  <option value="sim">Sim, quero ofertas exclusivas</option>
                  <option value="nao">Não, apenas a proposta</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#ff00e2]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* CHECKBOX DE POLÍTICA DE PRIVACIDADE */}
<div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
  <div className="relative flex items-center h-5">
    <input
      id="privacy"
      name="privacy"
      type="checkbox"
      required
      className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-white/20 bg-transparent transition-all checked:bg-[#373dff] checked:border-[#373dff] focus:ring-1 focus:ring-[#373dff] focus:ring-offset-0"
    />
    {/* Ícone de Check customizado (aparece quando o input é checked) */}
    <svg
      className="absolute h-4 w-4 pointer-events-none hidden peer-checked:block text-white left-1 top-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
  <label
    htmlFor="privacy"
    className="text-sm sm:text-base text-white/70 cursor-pointer select-none leading-tight group-hover:text-white transition-colors"
  >
    Li e aceito que os meus dados sejam processados pela Crea Web para efeitos de contacto comercial, de acordo com a{" "}
    <a 
      href="/politica-de-privacidade" 
      target="_blank" 
      className="text-[#ff00e2] hover:underline font-medium"
    >
      Política de Privacidade
    </a>. <span className="text-[#ff00e2]">*</span>
  </label>
</div>
            {/* AVISO IMPORTANTE (Movido para perto do botão) */}
            <div className="text-center space-y-4">
              <p className="text-lg sm:text-xl text-[#ffffff] font-light leading-relaxed animate-pulse">
                Responda ao formulário e receba uma estratégia detalhada em 24h.
              </p>
              <Button
                disabled={isPending}
                type="submit"
                className="w-full bg-gradient-to-r from-[#373dff] to-[#ff00e2] hover:from-[#373dff] hover:to-[#d900c0] text-white font-bold h-20 text-xl sm:text-2xl rounded-2xl shadow-[0_0_30px_-5px_rgba(55,61,255,0.4)] hover:shadow-[0_0_50px_-10px_rgba(255,0,226,0.5)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Receber Proposta Gratuita
              </Button>
            </div>

            <p className="text-center text-[#ffffff] text-sm">
              <span className="opacity-50">🔒 Seus dados estão seguros.</span>
            </p>
          </div>
        </form>
      </CardContent>
    </section>
  );
}
