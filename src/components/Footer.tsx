import React from 'react';
import { PageView } from '../types';

interface FooterProps {
  setCurrentView: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentView }) => {
  return (
    <footer className="bg-[#4A6C4A] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-3 border-b-2 border-gray-400 pb-2 inline-block">Buena Vista</h3>
            <p className="text-gray-300">
              Equipo dedicado a la visibilización y conservación de los ecosistemas urbanos.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3 border-b-2 border-gray-400 pb-2 inline-block">Mapa del Sitio</h3>
            <ul className="text-gray-300 space-y-2">
              <li><button onClick={() => setCurrentView({ page: 'home' })} className="hover:text-white transition-colors">Humedales</button></li>
              <li><button onClick={() => setCurrentView({ page: 'informacion' })} className="hover:text-white transition-colors">Información</button></li>
              <li><button onClick={() => setCurrentView({ page: 'conservacion' })} className="hover:text-white transition-colors">Conservación</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3 border-b-2 border-gray-400 pb-2 inline-block">Contacto</h3>
            <p className="text-gray-300">
              <a href="mailto:BuenaVistaSoporte@gmail.com" className="hover:text-white transition-colors">BuenaVistaSoporte@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Humedales Urbanos de Temuco. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;