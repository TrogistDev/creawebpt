import React from 'react';
import Link from 'next/link';

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#373dff]/30">
      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Cabeçalho */}
        <div className="mb-16">
          <Link 
            href="/" 
            className="text-[#373dff] hover:text-[#ff00e2] transition-colors mb-8 inline-block font-medium"
          >
            ← Voltar para a Crea Web
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
            Política de Privacidade
          </h1>
          <p className="text-zinc-500 mt-4 italic">Última atualização: Fevereiro de 2026</p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-12 text-zinc-300 leading-relaxed text-lg">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
              <span className="h-px w-8 bg-[#373dff]"></span> 01. Introdução
            </h2>
            <p>
              Na <strong>Crea Web PT</strong>, a privacidade e a segurança dos dados dos nossos clientes são prioridades absolutas. Esta política detalha como tratamos as suas informações ao solicitar uma proposta ou navegar no nosso site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
              <span className="h-px w-8 bg-[#ff00e2]"></span> 02. Dados que Recolhemos
            </h2>
            <ul className="list-none space-y-3 pl-4 border-l border-zinc-800">
              <li>• <strong>Informações de Contacto:</strong> Nome, e-mail e telefone para comunicação direta.</li>
              <li>• <strong>Detalhes do Negócio:</strong> Setor de atuação e objetivos do projeto para personalização da proposta.</li>
              <li>• <strong>Dados de Navegação:</strong> Cookies de performance através do Google Ads e Analytics, caso aceite no nosso banner.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
              <span className="h-px w-8 bg-[#373dff]"></span> 03. Google Consent Mode v2
            </h2>
            <p>
              Implementamos o <strong>Consent Mode v2</strong> do Google para garantir que o seu rasto digital é respeitado. 
            </p>
            <p className="bg-white/5 p-4 rounded-xl border border-white/10 text-sm">
              Por padrão, todos os identificadores de publicidade e análise começam como &quot;Negados&quot;. Apenas após o seu clique explícito em &quot;Aceitar Tudo&quot; é que os dados são processados para otimização de anúncios.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
              <span className="h-px w-8 bg-[#ff00e2]"></span> 04. Finalidade e Segurança
            </h2>
            <p>
              Os dados recolhidos no formulário servem exclusivamente para a criação da sua estratégia digital personalizada e envio de propostas comerciais. Utilizamos protocolos de encriptação SSL e armazenamento seguro para prevenir acessos não autorizados.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
              <span className="h-px w-8 bg-[#373dff]"></span> 05. Os Seus Direitos
            </h2>
            <p>
              Sob o RGPD, pode a qualquer momento solicitar o acesso, retificação ou eliminação dos seus dados. Para tal, basta contactar a equipa da <strong>Crea Web PT</strong>. Se pretender revogar o consentimento de cookies, basta limpar o histórico (cache) do seu navegador.
            </p>
          </section>

        </div>

        {/* Rodapé da Página */}
        <footer className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-zinc-600 text-sm">
            © 2026 Crea Web PT. Todos os direitos reservados conforme a lei Portuguesa.
          </p>
        </footer>
      </main>
    </div>
  );
}