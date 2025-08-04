export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // em m²
  type: 'casa' | 'apartamento' | 'terreno' | 'comercial';
  image_urls: string[];
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface SearchFilters {
  propertyType?: string;
  location?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  bedrooms?: number;
  bathrooms?: number;
  area?: {
    min: number;
    max: number;
  };
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}