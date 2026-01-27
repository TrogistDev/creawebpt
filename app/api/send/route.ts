import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { render } from '@react-email/render'; // Importe o renderizador

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Transformamos o componente React em HTML puro
    const emailHtml = await render(EmailTemplate(body));

    const { data, error } = await resend.emails.send({
      from: 'Crea Web PT <onboarding@resend.dev>',
      to: ['trogist15496@gmail.com'],
      subject: `🚀 Nova Proposta: ${body.nome}`,
      html: emailHtml, // Usamos 'html' em vez de 'react'
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Erro interno:", err);
    return NextResponse.json({ error: { message: err.message } }, { status: 500 });
  }
}