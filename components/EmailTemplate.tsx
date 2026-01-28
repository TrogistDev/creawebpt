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
  mensagem?: string;
  promocao?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nome, email, telefone, empresa, area, tipoProjeto, objetivo, prazo, orcamento, promocao, mensagem
}) => (
  <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', padding: '40px 20px' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <div style={{ backgroundColor: '#373dff', padding: '30px', textAlign: 'center' }}>
        <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px' }}>Nova Proposta Recebida</h1>
      </div>
      <div style={{ padding: '30px' }}>
        <p style={{ fontSize: '16px', color: '#333' }}>Olá, tens um novo pedido de orçamento vindo do site:</p>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><strong>Cliente:</strong></td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{nome}</td>
          </tr>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><strong>Empresa:</strong></td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{empresa} ({area})</td>
          </tr>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><strong>Contacto:</strong></td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{email} | {telefone}</td>
          </tr>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><strong>Projeto:</strong></td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{tipoProjeto}</td>
          </tr>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><strong>Objetivo:</strong></td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{objetivo}</td>
          </tr>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><strong>Orçamento:</strong></td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee', color: '#16a34a', fontWeight: 'bold' }}>{orcamento}</td>
          </tr>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><strong>Prazo:</strong></td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{prazo}</td>
          </tr>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}><strong>Promoções:</strong></td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{promocao}</td>
          </tr>
        </table>

        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: '#373dff' }}>Mensagem Adicional:</h3>
          <p style={{ backgroundColor: '#f4f4f5', padding: '15px', borderRadius: '8px', fontStyle: 'italic' }}>{mensagem || "Sem detalhes adicionais."}</p>
        </div>
      </div>
      <div style={{ backgroundColor: '#f4f4f5', padding: '20px', textAlign: 'center', fontSize: '12px', color: '#999' }}>
        Este e-mail foi gerado automaticamente pelo formulário da Crea Web.
      </div>
    </div>
  </div>
);