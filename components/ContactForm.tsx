"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    area: "",
    tipoProjeto: "",
    tipoProjetoOutro: "",
    objetivo: "",
    objetivoOutro: "",
    possuiWebsite: "",
    referencias: "",
    prazo: "",
    orcamento: "",
    mensagem: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // A submissão via FormSubmit funciona através do método POST no formulário
    // Se estiver a usar o FormSubmit.co, o ideal é deixar o formulário lidar com o action
    console.log("Formulário pronto para envio", formData);
  };

  return (
    <section id="contato" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1A1A1B]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-6xl sm:text-6xl lg:text-8xl font-bold mb-4 -tracking-widest leading-[0.8]">
            Peça uma{" "} <br />
            <span className="bg-linear-to-r from-[#ffbb00] to-[#e6b206] bg-clip-text text-transparent pr-2">
              proposta personalizada
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#94A3B8] pt-5 tracking-wider">
            Responda ao formulário abaixo e receba uma proposta detalhada e transparente em 24 horas
          </p>
        </div>

        <Card className="bg-[#0D0D0D] border-[#373dff]/30 shadow-2xl shadow-[#373dff]/10">
          <CardContent className="p-6 sm:p-8 lg:p-10">
            {/* Se estiver a usar FormSubmit, adicione action="https://formsubmit.co/seu-email" e method="POST" */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-[#F8FAFC] font-semibold">
                  Nome Completo *
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => handleInputChange("nome", e.target.value)}
                  className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC] focus:border-[#ff00e2] transition-colors"
                  placeholder="O seu nome"
                />
              </div>

              {/* Email e Telefone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#F8FAFC] font-semibold">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC] focus:border-[#ff00e2] transition-colors"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-[#F8FAFC] font-semibold">
                    Telefone / WhatsApp *
                  </Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={(e) => handleInputChange("telefone", e.target.value)}
                    className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC] focus:border-[#ff00e2] transition-colors"
                    placeholder="+351 xxx xxx xxx"
                  />
                </div>
              </div>

              {/* Empresa e Área */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="empresa" className="text-[#F8FAFC] font-semibold">
                    Nome da Empresa
                  </Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => handleInputChange("empresa", e.target.value)}
                    className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC] focus:border-[#ff00e2] transition-colors"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area" className="text-[#F8FAFC] font-semibold">
                    Área de Atuação *
                  </Label>
                  <Input
                    id="area"
                    name="area"
                    type="text"
                    required
                    value={formData.area}
                    onChange={(e) => handleInputChange("area", e.target.value)}
                    className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC] focus:border-[#ff00e2] transition-colors"
                    placeholder="Ex: Consultoria, Restauração, E-commerce"
                  />
                </div>
              </div>

              {/* Tipo de Projeto */}
              <div className="space-y-3">
                <Label className="text-[#F8FAFC] font-semibold">
                  Tipo de Projeto Desejado *
                </Label>
                <RadioGroup
                  name="tipoProjeto"
                  value={formData.tipoProjeto}
                  onValueChange={(value) => handleInputChange("tipoProjeto", value)}
                  required
                >
                  {[
                    { id: "tipo1", val: "website-institucional", label: "Website Institucional" },
                    { id: "tipo2", val: "landing-page", label: "Landing Page" },
                    { id: "tipo3", val: "loja-online", label: "Loja Online" },
                    { id: "tipo4", val: "aplicacao-web", label: "Aplicação Web" },
                    { id: "tipo5", val: "outro", label: "Outro" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors">
                      <RadioGroupItem value={item.val} id={item.id} className="border-[#373dff]" />
                      <Label htmlFor={item.id} className="text-[#F8FAFC] cursor-pointer flex-1">
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {formData.tipoProjeto === "outro" && (
                  <Input
                    name="tipoProjetoOutro"
                    type="text"
                    value={formData.tipoProjetoOutro}
                    onChange={(e) => handleInputChange("tipoProjetoOutro", e.target.value)}
                    className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC] focus:border-[#ff00e2] transition-colors mt-2"
                    placeholder="Especifique o tipo de projeto"
                  />
                )}
              </div>

              {/* Objetivo Principal */}
              <div className="space-y-3">
                <Label className="text-[#F8FAFC] font-semibold">
                  Objetivo Principal do Projeto *
                </Label>
                <RadioGroup
                  name="objetivo"
                  value={formData.objetivo}
                  onValueChange={(value) => handleInputChange("objetivo", value)}
                  required
                >
                  {[
                    { id: "obj1", val: "gerar-contactos", label: "Gerar mais contactos" },
                    { id: "obj2", val: "vender-online", label: "Vender online" },
                    { id: "obj3", val: "fortalecer-marca", label: "Fortalecer marca" },
                    { id: "obj4", val: "automatizar-processos", label: "Automatizar processos" },
                    { id: "obj5", val: "outro", label: "Outro" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors">
                      <RadioGroupItem value={item.val} id={item.id} className="border-[#373dff]" />
                      <Label htmlFor={item.id} className="text-[#F8FAFC] cursor-pointer flex-1">
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {formData.objetivo === "outro" && (
                  <Input
                    name="objetivoOutro"
                    type="text"
                    value={formData.objetivoOutro}
                    onChange={(e) => handleInputChange("objetivoOutro", e.target.value)}
                    className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC] focus:border-[#ff00e2] transition-colors mt-2"
                    placeholder="Especifique o objetivo"
                  />
                )}
              </div>

              {/* Já possui Website */}
              <div className="space-y-3">
                <Label className="text-[#F8FAFC] font-semibold">
                  Já possui website? *
                </Label>
                <RadioGroup
                  name="possuiWebsite"
                  value={formData.possuiWebsite}
                  onValueChange={(value) => handleInputChange("possuiWebsite", value)}
                  required
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors flex-1">
                    <RadioGroupItem value="sim" id="site1" className="border-[#373dff]" />
                    <Label htmlFor="site1" className="text-[#F8FAFC] cursor-pointer">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors flex-1">
                    <RadioGroupItem value="nao" id="site2" className="border-[#373dff]" />
                    <Label htmlFor="site2" className="text-[#F8FAFC] cursor-pointer">Não</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Sites de Referência */}
              <div className="space-y-2">
                <Label htmlFor="referencias" className="text-[#F8FAFC] font-semibold">
                  Sites de Referência (links que gosta ou se inspira)
                </Label>
                <Textarea
                  id="referencias"
                  name="referencias"
                  value={formData.referencias}
                  onChange={(e) => handleInputChange("referencias", e.target.value)}
                  className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC] focus:border-[#ff00e2] transition-colors min-h-20"
                  placeholder="Cole aqui os links de sites que admira..."
                />
              </div>

              {/* Prazo e Orçamento */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="prazo" className="text-[#F8FAFC] font-semibold">
                    Prazo Desejado *
                  </Label>
                  <Select name="prazo" onValueChange={(v) => handleInputChange("prazo", v)} required>
                    <SelectTrigger className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC]">
                      <SelectValue placeholder="Selecione o prazo" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1B] border-[#373dff]/30 text-white">
                      <SelectItem value="urgente">Urgente (1-2 semanas)</SelectItem>
                      <SelectItem value="medio">Médio prazo (3-4 semanas)</SelectItem>
                      <SelectItem value="flexivel">Flexível (+1 mês)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orcamento" className="text-[#F8FAFC] font-semibold">
                    Expectativa de Orçamento *
                  </Label>
                  <Select name="orcamento" onValueChange={(v) => handleInputChange("orcamento", v)} required>
                    <SelectTrigger className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC]">
                      <SelectValue placeholder="Selecione o orçamento" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1B] border-[#373dff]/30 text-white">
                      <SelectItem value="500-1000">500€ – 1.000€</SelectItem>
                      <SelectItem value="1000-2500">1.000€ – 2.500€</SelectItem>
                      <SelectItem value="2500+">2.500€+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Mensagem */}
              <div className="space-y-2">
                <Label htmlFor="mensagem" className="text-[#F8FAFC] font-semibold">
                  Mensagem / Detalhes Adicionais
                </Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={(e) => handleInputChange("mensagem", e.target.value)}
                  className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC] focus:border-[#ff00e2] transition-colors min-h-30"
                  placeholder="Conte-nos mais sobre o seu projeto..."
                />
              </div>

              {/* Hidden fields for FormSubmit */}
              <input type="hidden" name="_subject" value="Nova Proposta - Crea Web PT" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-linear-to-r from-[#ff00e2] to-[#8906e6] hover:from-[#ff00e2]/90 hover:to-[#8906e6]/90 text-white font-bold py-6 text-lg rounded-lg shadow-lg shadow-[#ff00e2]/30 transition-all duration-300 hover:shadow-[#ff00e2]/50 hover:scale-[1.02]"
              >
                Enviar Pedido de Proposta
              </Button>

              <p className="text-sm text-[#94A3B8] text-center pt-2">
                Responderemos em até <strong className="text-[#F8FAFC]">24 horas</strong> com uma proposta detalhada e transparente
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}