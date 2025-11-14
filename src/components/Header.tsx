import React, { useState } from 'react';
import { PageView } from '../types';

interface HeaderProps {
  setCurrentView: (view: PageView) => void;
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentView, isLoggedIn, onLoginClick, onLogoutClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Humedales', view: { page: 'home' } as PageView },
    { name: 'Información', view: { page: 'informacion' } as PageView },
    { name: 'Conservación', view: { page: 'conservacion' } as PageView },
  ];

  const handleNavClick = (view: PageView) => {
    setCurrentView(view);
    setIsMenuOpen(false); // Cierra el menú en la navegación
  };

  return (
    <header className="bg-[#4A6C4A] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight cursor-pointer" onClick={() => handleNavClick({ page: 'home' })}>
            Humedales Urbanos de Temuco
          </h1>
          <p className="text-sm text-gray-200 hidden sm:block">Descubre la naturaleza en nuestra ciudad</p>
        </div>
        
        {/* Botón del Menú Hamburguesa */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Navegación de Escritorio */}
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-4 md:space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.view)}
                    className="text-lg font-medium text-gray-200 hover:text-white transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-white"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          {isLoggedIn ? (
            <button onClick={onLogoutClick} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Cerrar Sesión
            </button>
          ) : (
            <button onClick={onLoginClick} className="bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Admin
            </button>
          )}
        </div>
      </div>

      {/* Navegación Móvil */}
      <nav className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavClick(item.view)}
                className="text-lg font-medium text-gray-200 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </button>
            </li>
          ))}
          <li className="pt-2">
             {isLoggedIn ? (
              <button onClick={() => { onLogoutClick(); setIsMenuOpen(false); }} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Cerrar Sesión
              </button>
            ) : (
              <button onClick={() => { onLoginClick(); setIsMenuOpen(false); }} className="bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Admin
              </button>
            )}
           </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;