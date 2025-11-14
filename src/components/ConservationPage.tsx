import React from 'react';

const ConservationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">Amenazas a Nuestros Humedales</h2>
        <div className="w-full h-64 bg-cover bg-center rounded-lg mb-6 shadow-md" style={{backgroundImage: "url('https://picsum.photos/seed/conservacion/1000/400')"}}></div>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          A pesar de su inmenso valor, los humedales urbanos de Temuco enfrentan constantes amenazas que ponen en riesgo su existencia. La principal es la presión del crecimiento urbano: la expansión inmobiliaria a menudo ve estos terrenos como espacios rellenables para nuevas construcciones, destruyendo el ecosistema de forma irreversible.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          La contaminación es otro enemigo silencioso. La basura, los escombros y la descarga de aguas servidas sin tratar alteran la química del agua, afectando a todas las especies que dependen del humedal. La introducción de flora y fauna exótica también puede desplazar a las especies nativas, rompiendo el delicado equilibrio ecológico.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-10 border-b-2 border-blue-200 pb-2">¿Cómo Podemos Ayudar?</h2>
        <ul className="text-lg text-gray-700 leading-relaxed space-y-4 list-disc list-inside">
          <li>
            <span className="font-semibold">Educa e Informa:</span> Comparte la importancia de los humedales con tu familia, amigos y en redes sociales. El conocimiento es el primer paso para la acción.
          </li>
          <li>
            <span className="font-semibold">Participa en Limpiezas:</span> Únete a jornadas de limpieza comunitaria. Cada residuo que se retira es una victoria para el ecosistema.
          </li>
          <li>
            <span className="font-semibold">Denuncia Atentados Ambientales:</span> Si observas rellenos ilegales, vertido de basura o cualquier daño a un humedal, informa a las autoridades municipales o a la Superintendencia del Medio Ambiente.
          </li>
          <li>
            <span className="font-semibold">Apoya el Comercio Local Sostenible:</span> Elige productos y servicios de empresas comprometidas con el medio ambiente.
          </li>
           <li>
            <span className="font-semibold">Reduce tu Huella:</span> Practica un consumo responsable, gestiona adecuadamente tus residuos y evita el uso de químicos dañinos en tu hogar.
          </li>
        </ul>
        <p className="mt-8 text-center text-xl font-medium text-gray-800 bg-green-100 p-4 rounded-lg">
          ¡Cada acción cuenta! La conservación de los humedales de Temuco es una tarea de todos.
        </p>
      </div>
    </div>
  );
};

export default ConservationPage;