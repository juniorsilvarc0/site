import { Header } from '@/components/layout/Header';

function SearchForm() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl w-[600px] max-w-[90vw]">
      <div className="space-y-4">
        {/* Property Type */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Tipo de imóvel</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white">
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Terreno</option>
            <option>Comercial</option>
          </select>
        </div>
        
        {/* Location e Price Range em linha */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white text-gray-600">
              <option>Localização</option>
              <option>Parnaíba</option>
              <option>Magalhães de Almeida</option>
              <option>São Bernardo</option>
            </select>
          </div>
          <div>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white text-gray-600">
              <option>Faixa de preço</option>
              <option>Até R$ 300.000</option>
              <option>R$ 300.000 - R$ 500.000</option>
              <option>R$ 500.000+</option>
            </select>
          </div>
        </div>
        
        {/* Search bar e botão */}
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="Buscar"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" 
          />
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300 whitespace-nowrap">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <>
      {/* Header normal no topo */}
      <header className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-6">
          <Header />
        </div>
      </header>

      {/* Seção principal com dois blocos */}
      <section className="bg-slate-900 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          
          {/* Bloco esquerdo - Texto */}
          <div className="bg-slate-900 text-white flex items-start justify-center pt-16 p-8 lg:p-16">
            <div className="max-w-md">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Temos a chave<br />
                para o seu<br />
                sonho
              </h1>
              <p className="text-lg text-gray-300 mb-16">
                Descubra o lugar perfeito para viver
                com nossa seleção de imóveis.
              </p>
            </div>
          </div>

          {/* Bloco direito - Imagem */}
          <div className="relative">
            <div
              className="h-full w-full bg-cover bg-center rounded-tl-[3rem]"
              style={{ 
                backgroundImage: "url('/modern-house.jpg')",
                minHeight: '600px'
              }}
            >
              {/* Controles de navegação */}
              <div className="absolute bottom-6 right-6 flex gap-2">
                <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  &#8249;
                </button>
                <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário posicionado abaixo do texto, no lado esquerdo da página */}
        <div className="absolute bottom-4 left-[88px] lg:left-[230px]">
          <SearchForm />
        </div>
      </section>
    </>
  );
}