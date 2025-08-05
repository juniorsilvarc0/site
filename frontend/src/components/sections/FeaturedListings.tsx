import { Property } from '@/types';
import Image from 'next/image';

function PropertyCard({ property }: { property: Property }) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', { 
    style: 'currency', 
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(property.price);
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      <div className="relative w-full h-64">
        <Image 
          src={property.image_urls[0]} 
          alt={property.title} 
          fill 
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
        {/* Badge de destaque */}
        <div className="absolute top-4 left-4">
          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Destaque
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
          {property.title}
        </h3>
        <p className="text-gray-600 mb-4 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {property.location}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-indigo-600">{formattedPrice}</p>
          <button className="bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-700 px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}

export function FeaturedListings({ properties }: { properties: Property[] }) {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Imóveis em Destaque
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nossa seleção de imóveis em destaque
          </p>
        </div>
        
        {properties && properties.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {properties.slice(0, 6).map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            
            {/* Botão para ver mais */}
            <div className="text-center mt-12">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Ver Todos os Imóveis
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H7a1 1 0 00-1 1v6a1 1 0 01-1 1H2a1 1 0 110-2V4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">Nenhum imóvel em destaque no momento.</p>
          </div>
        )}
      </div>
    </section>
  );
}