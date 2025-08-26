import { Header } from '@/components/layout/Header';

function SearchForm() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-[600px]">
      <div className="space-y-4">
        {/* Property Type */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Tipo de imóvel</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white text-gray-600 ">
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
              <option>Até R$ 200.000</option>
              <option>R$ 200.000 - R$ 500.000</option>
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
      <header className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-6">
          <Header />
        </div>
      </header>

      <section className="bg-slate-900 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          
          {/* Bloco esquerdo - Texto e Formulário JUNTOS */}
          <div className="bg-slate-900 text-white flex justify-center items-center p-8 lg:p-16">
            <div className="w-full">
              <div className="max-w-md mx-auto">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                      Temos a chave<br />
                      para o seu<br />
                      sonho
                  </h1>
                  <p className="text-lg text-gray-300 mb-8">
                      Descubra o lugar perfeito para viver
                      com nossa seleção de imóveis.
                  </p>
              </div>
              
              {/* Formulário agora está no fluxo, abaixo do texto */}
              <div className="mt-4 flex justify-center">
                  <SearchForm />
              </div>
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
          
          {/* O formulário que estava aqui com position absolute foi REMOVIDO */}

        </div>
      </section>
    </>
  );
}