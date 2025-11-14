import React from 'react';

const InformationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">¿Qué son los Humedales Urbanos?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Los humedales urbanos son ecosistemas acuáticos y terrestres que se encuentran dentro o en la periferia de las ciudades. Actúan como verdaderos oasis de biodiversidad, cumpliendo funciones vitales para el equilibrio ambiental y el bienestar de la comunidad. A pesar de la presión del crecimiento urbano, estos espacios como el Humedal Fundo El Carmen o las Vegas de Chivilcán en Temuco, son cruciales para la salud de nuestra ciudad.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Funcionan como esponjas naturales, absorbiendo el exceso de agua de lluvia y liberándola lentamente, lo que ayuda a prevenir inundaciones. Además, filtran contaminantes del agua, mejoran la calidad del aire y actúan como importantes sumideros de carbono, ayudando a mitigar el cambio climático. Son el hogar de una rica variedad de flora y fauna, muchas de ellas endémicas, que encuentran en ellos refugio, alimento y zonas de reproducción.
        </p>
        <div className="w-full h-64 bg-cover bg-center rounded-lg mb-6 shadow-md" style={{backgroundImage: "url('https://picsum.photos/seed/infohumedal/1000/400')"}}></div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">Importancia para Temuco</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Para una ciudad como Temuco, con un clima lluvioso, los humedales son aliados estratégicos en la gestión del agua. Su capacidad para regular los flujos hídricos es fundamental para evitar anegamientos en sectores vulnerables. Más allá de su función hidrológica, estos ecosistemas ofrecen a los habitantes de Temuco un espacio invaluable para la recreación, la educación ambiental y la conexión con la naturaleza, mejorando significativamente la calidad de vida y fortaleciendo la identidad local con su entorno natural. Protegerlos es proteger el patrimonio natural y el futuro de nuestra ciudad.
        </p>
      </div>
    </div>
  );
};

export default InformationPage;