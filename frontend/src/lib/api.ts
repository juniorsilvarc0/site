import { Property } from '@/types';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://backend:8000/api/v1';

export async function getFeaturedProperties(): Promise<Property[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/properties?is_featured=true`, {
      next: { revalidate: 10 }, // Cache baixo para testes
    });
    if (!res.ok) {
      console.error('Failed to fetch:', res.status, res.statusText);
      return [];
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
}