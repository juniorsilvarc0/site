export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image_urls: string[];
  description?: string;
  bedrooms?: number;
  bathrooms?: number;
}