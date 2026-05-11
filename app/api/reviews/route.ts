import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GOOGLE_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  // Note que a URL mudou para o domínio 'places.googleapis.com'
  const url = `https://places.googleapis.com/v1/places/${placeId}?languageCode=pt-BR`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Na API NEW a chave vai obrigatoriamente aqui:
        'X-Goog-Api-Key': apiKey, 
        // Você precisa dizer exatamente quais campos quer receber:
        'X-Goog-FieldMask': 'reviews,rating,displayName' 
      }
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Erro Detalhado do Google:", data.error);
      return NextResponse.json([]);
    }

    return NextResponse.json(data.reviews || []);
  } catch (error) {
    return NextResponse.json([]);
  }
}