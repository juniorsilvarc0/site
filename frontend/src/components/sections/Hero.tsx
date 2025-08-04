import { Header } from '@/components/layout/Header'; // 1. Importar o Header aqui

// O componente SearchForm continua o mesmo...
function SearchForm() {
  return (
    <div className="bg-white p-8 rounded-md shadow-md w-full text-gray-800">
      <div className="space-y-4">
        <div>
          <label className="text-gray-600 text-sm font-semibold">Property Type</label>
          <select className="w-full mt-1 p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none">
            <option>Casa</option>
            <option>Apartamento</option>
          </select>
        </div>
        <div>
          <label className="text-gray-600 text-sm font-semibold">Location</label>
          <input 
            type="text" 
            placeholder="Digite a localização"
            className="w-full mt-1 p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" 
          />
        </div>
        <div>
          <label className="text-gray-600 text-sm font-semibold">Price Range</label>
          <select className="w-full mt-1 p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none">
            <option>Qualquer valor</option>
          </select>
        </div>
        <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300">
          Search
        </button>
      </div>
    </div>
  );
}


export function Hero() {
  return (
    <section className="h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Coluna da Esquerda (Painel Escuro) */}
      <div className="bg-gray-900 flex flex-col p-8 lg:p-16"> {/* 2. Remover 'justify-center' */}
        
        {/* 3. Colocar o Header aqui no topo da coluna */}
        <Header />

        {/* 4. Centralizar o conteúdo restante */}
        <div className="flex-grow flex flex-col justify-center">
            <div className="max-w-md mx-auto text-white w-full">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                Find your dream home
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Discover the perfect place to live with our curated selection of properties.
              </p>
              <SearchForm />
            </div>
        </div>
      </div>

      {/* Coluna da Direita (Imagem) */}
      <div
        className="hidden lg:block bg-cover bg-center"
        style={{ backgroundImage: "url('/modern-house.jpg')" }}
      ></div>
    </section>
  );
}