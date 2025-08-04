import { Property } from '@/types';
import Image from 'next/image';

function PropertyCard({ property }: { property: Property }) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(property.price);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <div className="relative w-full h-60">
        <Image src={property.image_urls[0]} alt={property.title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">{property.title}</h3>
        <p className="text-gray-600 mb-4">{property.location}</p>
        <p className="text-2xl font-light text-indigo-600">{formattedPrice}</p>
      </div>
    </div>
  );
}

export function FeaturedListings({ properties }: { properties: Property[] }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Imóveis em Destaque</h2>
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (<PropertyCard key={property.id} property={property} />))}
          </div>
        ) : (<p className="text-center text-gray-500">Nenhum imóvel em destaque no momento.</p>)}
      </div>
    </section>
  );
}