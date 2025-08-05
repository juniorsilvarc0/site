import Image from 'next/image';

export function Header() {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image
            src="/logo-roper.png"
            alt="Logo da Homestead"
            width={320} // Ajuste a largura conforme necessário
            height={89} // Ajuste a altura conforme necessário
            priority // Ajuda a carregar a imagem principal mais rápido
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-white text-lg">
          <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Quem somos nós</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Imóveis</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Contato</a>
        </div>
        
        {/* Menu mobile */}
        <button className="md:hidden text-white p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
    </header>
  );
}