export interface Property {
  id: string; // O backend envia um UUID, que é uma string
  title: string;
  description: string | null; // Pode ser nulo
  price: number;
  location: string;
  bedrooms: number | null; // Pode ser nulo
  bathrooms: number | null; // Pode ser nulo
  area_sqm: number | null; // Renomeado de 'area' para 'area_sqm'
  property_type_id: string; // O backend envia o ID do tipo de propriedade
  image_urls: string[];
  is_featured: boolean; // Renomeado de 'featured' para 'is_featured'
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