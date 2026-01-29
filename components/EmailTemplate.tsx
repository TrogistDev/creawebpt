import * as React from "react";

interface EmailTemplateProps {
  nome?: string;
  email?: string;
  telefone?: string;
  empresa?: string;
  area?: string;
  tipoProjeto?: string;
  objetivo?: string;
  prazo?: string;
  orcamento?: string;
  conteudo?: string;     // Novo
  decisao?: string;      // Novo
  referencias?: string;  // Novo
  mensagem?: string;
  promocao?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nome, email, telefone, empresa, area, tipoProjeto, objetivo, prazo, orcamento, conteudo, decisao, referencias, promocao, mensagem
}) => (
  <div style={{ backgroundColor: '#050505', padding: '40px 10px', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#0f0f0f', borderRadius: '24px', overflow: 'hidden', border: '1px solid #373dff40', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
      
      {/* Header com Gradiente Tecnológico */}
      <div style={{ background: 'linear-gradient(90deg, #373dff 0%, #ff00e2 100%)', padding: '40px 30px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '3px', margin: '0 0 10px 0' }}>Novo Lead Qualificado</p>
        <h1 style={{ color: '#ffffff', margin: 0, fontSize: '28px', fontWeight: '800', letterSpacing: '-0.5px' }}>Proposta Personalizada</h1>
      </div>

      <div style={{ padding: '40px 30px' }}>
        
        {/* Seção 01: Cliente */}
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '14px', color: '#373dff', textTransform: 'uppercase', borderBottom: '1px solid #373dff20', paddingBottom: '5px', marginBottom: '15px' }}>01. Perfil do Cliente</h2>
          <p style={{ color: '#ffffff', fontSize: '18px', margin: '5px 0' }}><strong>{nome}</strong></p>
          <p style={{ color: '#94A3B8', fontSize: '14px', margin: '0' }}>{empresa} • {area}</p>
          <p style={{ color: '#94A3B8', fontSize: '14px', margin: '5px 0' }}>{email} | {telefone}</p>
        </div>

        {/* Seção 02: Projeto (Card Dark) */}
        <div style={{ backgroundColor: '#1A1A1B', borderRadius: '16px', padding: '25px', marginBottom: '30px', border: '1px solid #ffffff05' }}>
          <h2 style={{ fontSize: '14px', color: '#ff00e2', textTransform: 'uppercase', marginBottom: '15px' }}>02. Configuração do Projeto</h2>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tr style={{ borderBottom: '1px solid #ffffff05' }}>
              <td style={{ padding: '12px 0', color: '#64748B', fontSize: '13px' }}>Serviço</td>
              <td style={{ padding: '12px 0', color: '#ffffff', fontSize: '14px', textAlign: 'right' }}>{tipoProjeto}</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ffffff05' }}>
              <td style={{ padding: '12px 0', color: '#64748B', fontSize: '13px' }}>Objetivo</td>
              <td style={{ padding: '12px 0', color: '#ffffff', fontSize: '14px', textAlign: 'right' }}>{objetivo}</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ffffff05' }}>
              <td style={{ padding: '12px 0', color: '#64748B', fontSize: '13px' }}>Status Conteúdo</td>
              <td style={{ padding: '12px 0', color: '#ffffff', fontSize: '14px', textAlign: 'right' }}>{conteudo}</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 0', color: '#64748B', fontSize: '13px' }}>Decisão</td>
              <td style={{ padding: '12px 0', color: '#ffffff', fontSize: '14px', textAlign: 'right' }}>{decisao}</td>
            </tr>
          </table>
        </div>

        {/* Seção 03: Investimento e Prazo */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
          <div style={{ flex: 1, backgroundColor: '#0a0a0a', padding: '15px', borderRadius: '12px', border: '1px solid #373dff30' }}>
            <span style={{ color: '#373dff', fontSize: '11px', display: 'block', textTransform: 'uppercase' }}>Investimento</span>
            <span style={{ color: '#ffffff', fontSize: '16px', fontWeight: 'bold' }}>{orcamento}</span>
          </div>
          <div style={{ flex: 1, backgroundColor: '#0a0a0a', padding: '15px', borderRadius: '12px', border: '1px solid #ff00e230' }}>
            <span style={{ color: '#ff00e2', fontSize: '11px', display: 'block', textTransform: 'uppercase' }}>Prazo</span>
            <span style={{ color: '#ffffff', fontSize: '16px', fontWeight: 'bold' }}>{prazo}</span>
          </div>
        </div>

        {/* Referências e Mensagem */}
        {referencias && (
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#94A3B8', fontSize: '13px', marginBottom: '8px' }}>Referências Visuais:</h3>
            <div style={{ color: '#373dff', fontSize: '13px', wordBreak: 'break-all' }}>{referencias}</div>
          </div>
        )}

        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: '#ffffff', fontSize: '14px', marginBottom: '10px' }}>Briefing Adicional:</h3>
          <p style={{ backgroundColor: '#050505', color: '#CBD5E1', padding: '20px', borderRadius: '16px', fontSize: '14px', lineHeight: '1.6', border: '1px solid #ffffff10' }}>
            {mensagem || "O cliente não forneceu detalhes adicionais."}
          </p>
        </div>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <p style={{ color: '#64748B', fontSize: '12px' }}>Marketing: <strong>{promocao === 'sim' ? 'ACEITOU RECEBER OFERTAS' : 'APENAS ORÇAMENTO'}</strong></p>
        </div>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#050505', padding: '20px', textAlign: 'center', borderTop: '1px solid #ffffff05' }}>
        <p style={{ fontSize: '11px', color: '#475569', margin: 0 }}>© 2026 Crea Web • Sistema de Inteligência de Leads</p>
      </div>
    </div>
  </div>
);