export function Header() {
  // Não precisa mais de "absolute", "top-0", "left-0", "w-full", "z-30"
  return (
    <header>
      {/* Ajustar padding para alinhar com o conteúdo */}
      <div className="max-w-md mx-auto w-full"> 
        <nav className="flex justify-between items-center py-6">
          <div className="text-white text-2xl font-bold">
            HOMESTEAD
          </div>
          <div className="hidden md:flex items-center space-x-8 text-white text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Listings</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}