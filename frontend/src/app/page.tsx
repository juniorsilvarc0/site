// O Header não é mais importado ou usado aqui
import { Hero } from '@/components/sections/Hero';
import { FeaturedListings } from '@/components/sections/FeaturedListings';
import { getFeaturedProperties } from '@/lib/api';

export default async function HomePage() {
  const featuredProperties = await getFeaturedProperties();

  return (
    <>
      {/* O Header foi removido daqui */}
      <main>
        <Hero />
        <FeaturedListings properties={featuredProperties} />
      </main>
      <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Homestead. Todos os direitos reservados.</p>
          </div>
      </footer>
    </>
  );
}