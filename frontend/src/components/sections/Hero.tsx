import { Header } from '@/components/layout/Header';

function SearchForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
      <div className="space-y-4">
        {/* Primeira linha - Property Type */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Property Type</label>
          <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white">
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Terreno</option>
            <option>Comercial</option>
          </select>
        </div>
        
        {/* Segunda linha - Location e Price Range em linha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Location</label>
            <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white">
              <option>Location</option>
              <option>São Paulo</option>
              <option>Rio de Janeiro</option>
              <option>Belo Horizonte</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Price Range</label>
            <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white">
              <option>Price Range</option>
              <option>Até R$ 300.000</option>
              <option>R$ 300.000 - R$ 500.000</option>
              <option>R$ 500.000 - R$ 1.000.000</option>
              <option>Acima de R$ 1.000.000</option>
            </select>
          </div>
        </div>
        
        {/* Terceira linha - Search bar e botão */}
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="Search"
            className="flex-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" 
          />
          <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors duration-300 whitespace-nowrap">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Coluna da Esquerda (Painel Escuro) */}
      <div className="bg-slate-900 flex flex-col"> 
        
        {/* Header no topo */}
        <div className="p-6 lg:p-8">
          <Header />
        </div>

        {/* Conteúdo principal centralizado */}
        <div className="flex-1 flex flex-col justify-center p-6 lg:p-16">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find your<br />
              dream<br />
              home
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-md">
              Discover the perfect place to live 
              with our curated selection of properties.
            </p>
            <SearchForm />
          </div>
        </div>
      </div>

      {/* Coluna da Direita (Imagem) */}
      <div className="relative min-h-[400px] lg:min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/modern-house.jpg')" }}
        >
          {/* Overlay sutil para melhor contraste */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        {/* Controles de navegação (opcional) */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            &#8249;
          </button>
          <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}