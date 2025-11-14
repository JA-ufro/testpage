import React from 'react';
import { Humedal, PageView } from '../types';

interface HumedalCardProps {
  humedal: Humedal;
  setCurrentView: (view: PageView) => void;
}

const HumedalCard: React.FC<HumedalCardProps> = ({ humedal, setCurrentView }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <img className="w-full h-48 object-cover" src={humedal.imagenPrincipal} alt={`Imagen de ${humedal.nombre}`} />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{humedal.nombre}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{humedal.descripcionCorta}</p>
        <button
          onClick={() => setCurrentView({ page: 'detalle', id: humedal.id })}
          className="mt-auto w-full bg-[#5a8a5a] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#4A6C4A] transition-colors duration-300 self-start"
        >
          Explorar más
        </button>
      </div>
    </div>
  );
};


interface HomePageProps {
  humedales: Humedal[];
  setCurrentView: (view: PageView) => void;
}

const HomePage: React.FC<HomePageProps> = ({ humedales, setCurrentView }) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {humedales.map((humedal) => (
          <HumedalCard key={humedal.id} humedal={humedal} setCurrentView={setCurrentView} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;