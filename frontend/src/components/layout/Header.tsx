export function Header() {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          HOMESTEAD
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-white text-sm">
          <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Listings</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
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