import { Hero } from '@/components/sections/Hero';
import { FeaturedListings } from '@/components/sections/FeaturedListings';
import { getFeaturedProperties } from '@/lib/api';

export default async function HomePage() {
  // Pega as propriedades em destaque
  const featuredProperties = await getFeaturedProperties();

  return (
    <div className="min-h-screen">
      {/* Seção Hero ocupando toda a tela */}
      <Hero />
      
      {/* Seção de imóveis em destaque */}
      <FeaturedListings properties={featuredProperties} />
      
      {/* Seção adicional - Sobre nós (opcional) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Por que escolher a Roper?
              </h2>
              <p className="text-gray-600 mb-6">
                Somos especialistas em conectar pessoas aos seus lares dos sonhos. 
                Nossa equipe experiente oferece um serviço personalizado e 
                uma seleção cuidadosa de propriedades.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Atendimento personalizado</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Propriedades verificadas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Suporte completo</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/about-us.jpg" 
                  alt="Nossa equipe" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">CONSTRUTORA ROPER</h3>
              <p className="text-gray-400">
                Encontre seu lar dos sonhos com nossa seleção cuidadosa de propriedades.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Imóveis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tipos de Imóveis</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Casas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apartamentos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terrenos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comercial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contato@construtoraroper.com.br</li>
                <li>Telefone: (11) 99999-9999</li>
                <li>WhatsApp: (11) 99999-9999</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Contrutora Roper. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}