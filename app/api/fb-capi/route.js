// app/api/fb-capi/route.js
import { NextResponse } from 'next/server';
import crypto from 'crypto';

// Função para transformar dados em hash SHA256 (exigência da Meta)
function hashData(data) {
  if (!data) return null;
  return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
}

export async function POST(request) {
  const body = await request.json();
  const { email, firstName, eventName, eventSourceUrl, eventId } = body;

  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
  const accessToken = process.env.FB_ACCESS_TOKEN;

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: eventSourceUrl,
        event_id: eventId, // Importante para deduplicação
        user_data: {
          em: [hashData(email)],
          fn: [hashData(firstName)],
        },
      },
    ],
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao enviar para CAPI' }, { status: 500 });
  }
}