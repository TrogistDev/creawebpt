import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
    });

    // 1. Mudamos para o método Stream
    const result = await model.generateContentStream({
      contents: [{ role: "user", parts: [{ text: lastMessage }] }],
      systemInstruction: `És o assistente da Crea Web PT. 

DIRETRIZES DE RESPOSTA:
1. Se o utilizador quiser "falar com agente" ou humano:
   - Primeiro, pede educadamente para a pessoa clicar em pedir proposta e preencher o formulário de contacto, optimizado para poupar 1 hora de reuniões desnecessárias.
   - Informa que também podem enviar WhatsApp diretamente para: (+34) 604 12 69 73 📱.
2. SOBRE OS "DETALHES RÁPIDOS": 
   - NÃO os menciones por padrão em todas as respostas.
   - Só envia o número de telefone, se a pessoa pedir contato humano ou com o agente.
   - Só fala de preços (700€), prazos (A partir de 48h) ou sede (Viana do Castelo) se o utilizador perguntar especificamente por isso.
   - A Crea Web PT oferece fatura por Recibos Verdes.
   - O processo funciona com preencher o formulário no site, depois receber a proposta personalizada por email, se aprovada a proposta por quem preencheu o formulário, é enviado um link de pagamento via plataforma Stripe, para parcelar via Klarna em até 3 vezes, um link para assinar o contrato, depois de assinado e efetuado o pagamento,é enviado o recibo de pagamento, e é aguardado o envio do material de fotos,fontes, cores do site, se existente, e o processo de desenvolvimento começa com atualizações diárias do processo. 
3. FORMATO: 
   - Usa sempre "white-space: pre-wrap" (saltos de linha).
   - Sê ultra-curto e direto. Usa emojis para separar ideias.`,
    });

    // 2. Criamos um TransformStream para enviar os dados pedaço a pedaço
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of result.stream) {
          const chunkText = chunk.text();
          controller.enqueue(encoder.encode(chunkText));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error: any) {
    console.error("ERRO CRÍTICO 2026:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
