"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  Clock,
  Shield,
  Facebook,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/trogist15496@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Proposta enviada com sucesso!", {
          description: "Um consultor da Crea Web PT entrará em contacto brevemente.",
          duration: 5000,
        });

        // AQUI ESTÁ O LIMPA ESTADO:
        setFormData({
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
      } else {
        toast.error("Erro ao enviar", {
          description: "Por favor, tente novamente.",
        });
      }
    } catch (error) {
      console.error("Erro no envio:", error);
      toast.error("Erro de ligação", {
        description: "Verifique a sua internet e tente novamente.",
      });
    }
  };
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0D0D0D]/95 backdrop-blur-lg border-b border-[#373dff]/20 shadow-lg shadow-[#373dff]/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 ">
            {/* Logo */}
            <div className="pt-2">
              <Image
                src="/logo.png" // O Next.js já sabe que deve procurar dentro da pasta public
                alt="Logo Crea Web PT"
                width={170}
                height={170}
                onClick={() => scrollToSection("hero")}
                priority // Adicione priority pois o logo está no topo (LCP)
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-[#F8FAFC] hover:text-[#ff00e2] transition-colors text-sm lg:text-base"
              >
                Sobre nós
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-[#F8FAFC] hover:text-[#ff00e2] transition-colors text-sm lg:text-base"
              >
                O que fazemos
              </button>
              <button
                onClick={() => scrollToSection("trabalhos")}
                className="text-[#F8FAFC] hover:text-[#ff00e2] transition-colors text-sm lg:text-base"
              >
                Exemplos de trabalhos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-[#F8FAFC] hover:text-[#ff00e2] transition-colors text-sm lg:text-base"
              >
                Contato
              </button>
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-linear-to-r from-[#ff00e2] to-[#8906e6] hover:from-[#ff00e2]/90 hover:to-[#8906e6]/90 text-white font-semibold px-6 py-2 rounded-lg shadow-lg shadow-[#ff00e2]/30 transition-all duration-300 hover:shadow-[#ff00e2]/50 hover:scale-105"
              >
                Pedir proposta
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#1A1A1B] hover:bg-[#373dff]/20 transition-colors"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#0D0D0D]/98 backdrop-blur-lg border-b border-[#373dff]/20 shadow-xl">
              <nav className="flex flex-col py-4 px-4 space-y-3">
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-left text-[#F8FAFC] hover:text-[#ff00e2] transition-colors py-2 px-4 rounded-lg hover:bg-[#1A1A1B]"
                >
                  Sobre Nós
                </button>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-left text-[#F8FAFC] hover:text-[#ff00e2] transition-colors py-2 px-4 rounded-lg hover:bg-[#1A1A1B]"
                >
                  O Que Fazemos
                </button>
                <button
                  onClick={() => scrollToSection("trabalhos")}
                  className="text-left text-[#F8FAFC] hover:text-[#ff00e2] transition-colors py-2 px-4 rounded-lg hover:bg-[#1A1A1B]"
                >
                  Exemplos de Trabalhos
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-left text-[#F8FAFC] hover:text-[#ff00e2] transition-colors py-2 px-4 rounded-lg hover:bg-[#1A1A1B]"
                >
                  Contato
                </button>
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="bg-linear-to-r from-[#ff00e2] to-[#8906e6] hover:from-[#ff00e2]/90 hover:to-[#8906e6]/90 text-white font-semibold w-full mt-2"
                >
                  Pedir Proposta
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8"
        id="hero"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              {/* Tagline */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1B] border border-[#373dff]/30">
                <Sparkles className="w-4 h-4 text-[#22D3EE]" />
                <span className="text-sm text-[#94A3B8]">
                  Transforme a sua presença digital em resultados concretos
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Websites que{" "}
                <span className="bg-linear-to-r from-[#ff9100] via-[#e67206] to-[#df9f4c] bg-clip-text text-transparent">
                  convertem visitantes em clientes
                </span>{" "}
                e{" "}
                <span className="bg-linear-to-r from-[#ddaf6b] to-[#eead22] bg-clip-text text-transparent">
                  geram resultados reais
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed">
                Na <strong className="text-[#F8FAFC]">Crea Web PT</strong>,
                criamos soluções web profissionais para empresários que querem{" "}
                <strong className="text-[#F8FAFC]">aumentar vendas</strong>,
                <strong className="text-[#F8FAFC]">
                  {" "}
                  gerar contactos qualificados
                </strong>{" "}
                e
                <strong className="text-[#F8FAFC]">
                  {" "}
                  fortalecer a sua marca
                </strong>{" "}
                online. Sem rodeios, apenas resultados mensuráveis.
              </p>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("contato")}
                  size="lg"
                  className="bg-linear-to-r from-[#ff00e2] to-[#8906e6] hover:from-[#ff00e2]/90 hover:to-[#8906e6]/90 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg shadow-[#ff00e2]/30 transition-all duration-300 hover:shadow-[#ff00e2]/50 hover:scale-105"
                >
                  Pedir proposta grátis
                </Button>
                <Button
                  onClick={() => scrollToSection("trabalhos")}
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#373dff] text-[#F8FAFC] hover:bg-[#373dff]/10 px-8 py-6 text-lg rounded-lg transition-all duration-300"
                >
                  Ver exemplos de sucesso
                </Button>
              </div>

              {/* Highlights / Benefícios */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#22D3EE]/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#22D3EE]" />
                  </div>
                  <span className="text-sm text-[#94A3B8]">
                    Entrega Rápida e Garantida
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#ff00e2]/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#ff00e2]" />
                  </div>
                  <span className="text-sm text-[#94A3B8]">
                    Foco em Conversão e ROI
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#8906e6]/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#8906e6]" />
                  </div>
                  <span className="text-sm text-[#94A3B8]">
                    Suporte e Confiança Total
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-[#ff00e2]/20 to-[#050deb]/20 blur-3xl" />
              <div className="relative w-full aspect-video sm:aspect-square lg:aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-[#373dff]/20">
                <Image
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3"
                  alt="Websites Profissionais para Empresários"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section
        id="sobre"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1A1A1B]"
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="bg-linear-to-r from-[#ff9900] to-[#e69806] bg-clip-text text-transparent">
                Entendemos
              </span>{" "}
              os desafios do seu negócio
            </h2>

            <div className="space-y-6 text-lg sm:text-xl text-[#94A3B8] leading-relaxed">
              <p>
                <strong className="text-[#F8FAFC]">Falta de tempo.</strong>{" "}
                Orçamentos confusos. Receio de investir no projeto errado e não
                ver retorno.
              </p>

              <p>
                Já se deparou com promessas de “websites incríveis” que, no fim
                das contas, não atraem clientes nem aumentam vendas?
                <strong className="text-[#F8FAFC]"> Nós compreendemos.</strong>
              </p>

              <p>
                A <strong className="text-[#ffae00]">Crea Web PT</strong> não é
                apenas mais uma empresa que “faz sites”. Somos o seu{" "}
                <strong className="text-[#F8FAFC]">parceiro estratégico</strong>
                , focado em transformar a sua presença digital num{" "}
                <strong className="text-[#F8FAFC]">
                  ativo que gera resultados concretos
                </strong>
                , aumentando vendas, contactos e autoridade online.{" "}
                <strong className="text-[#eebe22]">
                  Resultados que impactam diretamente o seu negócio.
                </strong>
              </p>

              <p className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] pt-4">
                Clareza. Profissionalismo. Resultados reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Fazemos Section */}
      <section
        id="servicos"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#020617]"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              O que{" "}
              <span className="bg-linear-to-r from-[#d3a755] to-[#eebe22] bg-clip-text text-transparent">
                fazemos
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Soluções digitais completas, focadas em gerar valor real para o
              seu negócio
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Websites profissionais",
                description:
                  "Sites institucionais que transmitem autoridade e confiança. Design moderno, rápido e otimizado para gerar contactos.",
                color: "#ff00e2",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Landing pages de conversão",
                description:
                  "Páginas focadas num único objetivo: converter visitantes em clientes. Cada elemento pensado para maximizar resultados.",
                color: "#8906e6",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Aplicações web",
                description:
                  "Sistemas personalizados para automatizar processos, reduzir trabalho manual e aumentar a eficiência da sua empresa.",
                color: "#050deb",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Otimização para SEO",
                description:
                  "Apareça nas primeiras posições do Google. Mais visibilidade = mais clientes encontrando o seu negócio.",
                color: "#22D3EE",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Performance e velocidade",
                description:
                  "Sites ultra-rápidos que mantêm os visitantes engajados. Cada segundo conta para a conversão.",
                color: "#ff00e2",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Experiência do utilizador (UX)",
                description:
                  "Interfaces intuitivas e agradáveis que facilitam a jornada do cliente até à compra ou contacto.",
                color: "#8906e6",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-[#1A1A1B] border-[#373dff]/20 hover:border-[#373dff]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#373dff]/10 hover:-translate-y-1 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${service.color}15`,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">
                    {service.title}
                  </h3>
                  <p className="text-[#94A3B8] leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => scrollToSection("contato")}
              size="lg"
              className="bg-linear-to-r from-[#050deb] to-[#22D3EE] hover:from-[#050deb]/90 hover:to-[#22D3EE]/90 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg shadow-[#050deb]/30 transition-all duration-300 hover:shadow-[#050deb]/50 hover:scale-105"
            >
              Fale connosco sobre o seu projeto
            </Button>
          </div>
        </div>
      </section>

      {/* Exemplos de Trabalhos Section */}
      <section
        id="trabalhos"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Exemplos de{" "}
              <span className="bg-linear-to-r from-[#ffae00] to-[#ffb429] bg-clip-text text-transparent">
                trabalhos
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Projetos desenvolvidos com excelência e foco em resultados
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1426024120108-99cc76989c71?q=80&w=1000&auto=format&fit=crop",
                title: "Website institucional",
                description:
                  "Design moderno e profissional para empresa de consultoria",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
                title: "Landing page de conversão",
                description:
                  "Página otimizada para geração de leads qualificados e análise de dados.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop",
                title: "Aplicação web personalizada",
                description:
                  "Sistema de gestão desenvolvido para automatizar processos",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-[#1A1A1B] border-[#373dff]/20 overflow-hidden hover:border-[#373dff]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#373dff]/10 hover:-translate-y-2 animate-fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized // <-- Adicionado para evitar o erro 404 em localhost
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-[#0D0D0D] to-transparent opacity-60 pointer-events-none" />
                </div>

                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#ff00e2] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#94A3B8]">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section
        id="contato"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1A1A1B]"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Peça uma{" "}
              <span className="bg-linear-to-r from-[#ffbb00] to-[#e6b206] bg-clip-text text-transparent">
                proposta personalizada
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-[#94A3B8]">
              Responda ao formulário abaixo e receba uma proposta detalhada e
              transparente em 24 horas
            </p>
          </div>

          <Card className="bg-[#0D0D0D] border-[#373dff]/30 shadow-2xl shadow-[#373dff]/10">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div className="space-y-2">
                  <Label
                    htmlFor="nome"
                    className="text-[#F8FAFC] font-semibold"
                  >
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
                    <Label
                      htmlFor="email"
                      className="text-[#F8FAFC] font-semibold"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC] focus:border-[#ff00e2] transition-colors"
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="telefone"
                      className="text-[#F8FAFC] font-semibold"
                    >
                      Telefone / WhatsApp *
                    </Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) =>
                        handleInputChange("telefone", e.target.value)
                      }
                      className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC] focus:border-[#ff00e2] transition-colors"
                      placeholder="+351 xxx xxx xxx"
                    />
                  </div>
                </div>

                {/* Empresa e Área */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="empresa"
                      className="text-[#F8FAFC] font-semibold"
                    >
                      Nome da Empresa
                    </Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={(e) =>
                        handleInputChange("empresa", e.target.value)
                      }
                      className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC] focus:border-[#ff00e2] transition-colors"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="area"
                      className="text-[#F8FAFC] font-semibold"
                    >
                      Área de Atuação *
                    </Label>
                    <Input
                      id="area"
                      name="area"
                      type="text"
                      required
                      value={formData.area}
                      onChange={(e) =>
                        handleInputChange("area", e.target.value)
                      }
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
                    onValueChange={(value) =>
                      handleInputChange("tipoProjeto", value)
                    }
                    required
                  >
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors">
                      <RadioGroupItem
                        value="website-institucional"
                        id="tipo1"
                        className="border-[#373dff]"
                      />
                      <Label
                        htmlFor="tipo1"
                        className="text-[#F8FAFC] cursor-pointer flex-1"
                      >
                        Website Institucional
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors">
                      <RadioGroupItem
                        value="landing-page"
                        id="tipo2"
                        className="border-[#373dff]"
                      />
                      <Label
                        htmlFor="tipo2"
                        className="text-[#F8FAFC] cursor-pointer flex-1"
                      >
                        Landing Page
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors">
                      <RadioGroupItem
                        value="loja-online"
                        id="tipo3"
                        className="border-[#373dff]"
                      />
                      <Label
                        htmlFor="tipo3"
                        className="text-[#F8FAFC] cursor-pointer flex-1"
                      >
                        Loja Online
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors">
                      <RadioGroupItem
                        value="aplicacao-web"
                        id="tipo4"
                        className="border-[#373dff]"
                      />
                      <Label
                        htmlFor="tipo4"
                        className="text-[#F8FAFC] cursor-pointer flex-1"
                      >
                        Aplicação Web
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors">
                      <RadioGroupItem
                        value="outro"
                        id="tipo5"
                        className="border-[#373dff]"
                      />
                      <Label
                        htmlFor="tipo5"
                        className="text-[#F8FAFC] cursor-pointer flex-1"
                      >
                        Outro
                      </Label>
                    </div>
                  </RadioGroup>
                  {formData.tipoProjeto === "outro" && (
                    <Input
                      name="tipoProjetoOutro"
                      type="text"
                      value={formData.tipoProjetoOutro}
                      onChange={(e) =>
                        handleInputChange("tipoProjetoOutro", e.target.value)
                      }
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
                    onValueChange={(value) =>
                      handleInputChange("objetivo", value)
                    }
                    required
                  >
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors">
                      <RadioGroupItem
                        value="gerar-contactos"
                        id="obj1"
                        className="border-[#373dff]"
                      />
                      <Label
                        htmlFor="obj1"
                        className="text-[#F8FAFC] cursor-pointer flex-1"
                      >
                        Gerar mais contactos
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors">
                      <RadioGroupItem
                        value="vender-online"
                        id="obj2"
                        className="border-[#373dff]"
                      />
                      <Label
                        htmlFor="obj2"
                        className="text-[#F8FAFC] cursor-pointer flex-1"
                      >
                        Vender online
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors">
                      <RadioGroupItem
                        value="fortalecer-marca"
                        id="obj3"
                        className="border-[#373dff]"
                      />
                      <Label
                        htmlFor="obj3"
                        className="text-[#F8FAFC] cursor-pointer flex-1"
                      >
                        Fortalecer marca
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors">
                      <RadioGroupItem
                        value="automatizar-processos"
                        id="obj4"
                        className="border-[#373dff]"
                      />
                      <Label
                        htmlFor="obj4"
                        className="text-[#F8FAFC] cursor-pointer flex-1"
                      >
                        Automatizar processos
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors">
                      <RadioGroupItem
                        value="outro"
                        id="obj5"
                        className="border-[#373dff]"
                      />
                      <Label
                        htmlFor="obj5"
                        className="text-[#F8FAFC] cursor-pointer flex-1"
                      >
                        Outro
                      </Label>
                    </div>
                  </RadioGroup>
                  {formData.objetivo === "outro" && (
                    <Input
                      name="objetivoOutro"
                      type="text"
                      value={formData.objetivoOutro}
                      onChange={(e) =>
                        handleInputChange("objetivoOutro", e.target.value)
                      }
                      className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC] focus:border-[#ff00e2] transition-colors mt-2"
                      placeholder="Especifique o objetivo"
                    />
                  )}
                </div>

                {/* Possui Website */}
                <div className="space-y-3">
                  <Label className="text-[#F8FAFC] font-semibold">
                    Já possui website? *
                  </Label>
                  <RadioGroup
                    name="possuiWebsite"
                    value={formData.possuiWebsite}
                    onValueChange={(value) =>
                      handleInputChange("possuiWebsite", value)
                    }
                    required
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors flex-1">
                      <RadioGroupItem
                        value="sim"
                        id="site1"
                        className="border-[#373dff]"
                      />
                      <Label
                        htmlFor="site1"
                        className="text-[#F8FAFC] cursor-pointer"
                      >
                        Sim
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg bg-[#1A1A1B] border border-[#373dff]/20 hover:border-[#ff00e2]/50 transition-colors flex-1">
                      <RadioGroupItem
                        value="nao"
                        id="site2"
                        className="border-[#373dff]"
                      />
                      <Label
                        htmlFor="site2"
                        className="text-[#F8FAFC] cursor-pointer"
                      >
                        Não
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Sites de Referência */}
                <div className="space-y-2">
                  <Label
                    htmlFor="referencias"
                    className="text-[#F8FAFC] font-semibold"
                  >
                    Sites de Referência (links que gosta ou se inspira)
                  </Label>
                  <Textarea
                    id="referencias"
                    name="referencias"
                    value={formData.referencias}
                    onChange={(e) =>
                      handleInputChange("referencias", e.target.value)
                    }
                    className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC] focus:border-[#ff00e2] transition-colors min-h-20"
                    placeholder="Cole aqui os links de sites que admira..."
                  />
                </div>

                {/* Prazo e Orçamento */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="prazo"
                      className="text-[#F8FAFC] font-semibold"
                    >
                      Prazo Desejado *
                    </Label>
                    <Select
                      name="prazo"
                      value={formData.prazo}
                      onValueChange={(value) =>
                        handleInputChange("prazo", value)
                      }
                      required
                    >
                      <SelectTrigger className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC]">
                        <SelectValue placeholder="Selecione o prazo" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1A1B] border-[#373dff]/30">
                        <SelectItem value="urgente">
                          Urgente (1-2 semanas)
                        </SelectItem>
                        <SelectItem value="medio">
                          Médio prazo (3-4 semanas)
                        </SelectItem>
                        <SelectItem value="flexivel">
                          Flexível (+1 mês)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="orcamento"
                      className="text-[#F8FAFC] font-semibold"
                    >
                      Expectativa de Orçamento *
                    </Label>
                    <Select
                      name="orcamento"
                      value={formData.orcamento}
                      onValueChange={(value) =>
                        handleInputChange("orcamento", value)
                      }
                      required
                    >
                      <SelectTrigger className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC]">
                        <SelectValue placeholder="Selecione o orçamento" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1A1B] border-[#373dff]/30">
                        <SelectItem value="500-1000">500€ – 1.000€</SelectItem>
                        <SelectItem value="1000-2500">
                          1.000€ – 2.500€
                        </SelectItem>
                        <SelectItem value="2500+">2.500€+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Mensagem */}
                <div className="space-y-2">
                  <Label
                    htmlFor="mensagem"
                    className="text-[#F8FAFC] font-semibold"
                  >
                    Mensagem / Detalhes Adicionais
                  </Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={(e) =>
                      handleInputChange("mensagem", e.target.value)
                    }
                    className="bg-[#1A1A1B] border-[#373dff]/30 text-[#F8FAFC] focus:border-[#ff00e2] transition-colors min-h-30"
                    placeholder="Conte-nos mais sobre o seu projeto, necessidades específicas, funcionalidades desejadas..."
                  />
                </div>

                {/* Hidden fields for FormSubmit */}
                <input
                  type="hidden"
                  name="_subject"
                  value="Nova Proposta - Crea Web PT"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-linear-to-r from-[#ff00e2] to-[#8906e6] hover:from-[#ff00e2]/90 hover:to-[#8906e6]/90 text-white font-bold py-6 text-lg rounded-lg shadow-lg shadow-[#ff00e2]/30 transition-all duration-300 hover:shadow-[#ff00e2]/50 hover:scale-[1.02]"
                >
                  Enviar Pedido de Proposta
                </Button>

                <p className="text-sm text-[#94A3B8] text-center pt-2">
                  Responderemos em até{" "}
                  <strong className="text-[#F8FAFC]">24 horas</strong> com uma
                  proposta detalhada e transparente
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
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
