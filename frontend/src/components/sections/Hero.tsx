// O formulário de busca com o novo design
function SearchForm() {
  return (
    <div className="bg-white p-8 rounded-md shadow-md w-full">
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
            <option>Até R$ 500.000</option>
          </select>
        </div>
        <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300">
          Search
        </button>
      </div>
    </div>
  );
}

// O novo Hero com layout de 2 colunas
export function Hero() {
  return (
    <section className="h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Coluna da Esquerda (Painel Escuro) */}
      <div className="bg-gray-900 flex flex-col justify-center p-8 lg:p-16">
        <div className="max-w-md mx-auto text-white w-full pt-20">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Find your dream home
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover the perfect place to live with our curated selection of properties.
          </p>
          <SearchForm />
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