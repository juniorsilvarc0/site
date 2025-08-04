import { Property } from '@/types';

// A URL base da API é lida das variáveis de ambiente
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getFeaturedProperties(): Promise<Property[]> {
  try {
    // Busca na nossa API Python apenas os imóveis marcados como "featured"
    const res = await fetch(`${API_BASE_URL}/properties?is_featured=true`, {
      // O Next.js fará cache do resultado por 1 hora, melhorando a performance
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch featured properties');
    }
    
    return res.json();
  } catch (error) {
    console.error(error);
    // Retorna um array vazio em caso de erro para não quebrar a página
    return [];
  }
}