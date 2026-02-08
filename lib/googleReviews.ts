export async function getGoogleReviews() {
  // O ID que aparece no seu console agora está correto: ChIJ8QV6Iee3JQ0Rk8Z-gBhOgGE
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;
  const API_KEY = process.env.GOOGLE_API_KEY;
  
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}&language=pt-BR`;

  const res = await fetch(url, { next: { revalidate: 86400 } }); // Cache de 24h
  const data = await res.json();
  
  if (data.status === "REQUEST_DENIED") {
    console.error("Verifique sua chave no .env:", data.error_message);
    return [];
  }

  return data.result?.reviews || [];
}