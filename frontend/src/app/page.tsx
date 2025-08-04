import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { FeaturedListings } from '@/components/sections/FeaturedListings';
import { getFeaturedProperties } from '@/lib/api';

export default async function HomePage() {
  const featuredProperties = await getFeaturedProperties();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedListings properties={featuredProperties} />
      </main>
    </>
  );
}