import { Humedal } from './types';

export const HUMEDALES_DATA: Humedal[] = [
  {
    id: 1,
    nombre: "Humedal urbano Fundo el Carmen",
    subtitulo: "Un oasis de biodiversidad en el sector poniente",
    descripcionCorta: "Ubicado en el sector poniente de Temuco, este humedal es un ecosistema vital para la flora y fauna local.",
    descripcionLarga: "El humedal Fundo El Carmen representa un importante relicto de ecosistema palustre en medio de la trama urbana de Temuco. Su valor radica en la provisión de servicios ecosistémicos cruciales como la regulación hídrica, la mitigación de inundaciones, y ser un sumidero de carbono. Además, es un corredor biológico que permite el desplazamiento y refugio de numerosas especies, contribuyendo a la conectividad ecológica de la ciudad.",
    ubicacion: "Sector Fundo el Carmen, Temuco, Chile",
    mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12450.485459381504!2d-72.67380184496317!3d-38.71714401838647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d52bb7261aa7%3A0xd697ab6f32d48065!2sHumedal%20urbano%20Fundo%20el%20Carmen!5e0!3m2!1ses!2scl!4v1720810842771!5m2!1ses!2scl",
    imagenPrincipal: "https://picsum.photos/seed/fundoelcarmen/800/600",
    floraYFauna: [
      {
        nombreComun: "Tagua común",
        nombreCientifico: "Fulica armillata",
        descripcion: "Ave acuática de plumaje negro y un distintivo escudete frontal amarillo. Se alimenta de vegetación acuática.",
        tipo: 'fauna',
        imagenUrl: "https://picsum.photos/seed/tagua/400/300"
      },
      {
        nombreComun: "Coipo",
        nombreCientifico: "Myocastor coypus",
        descripcion: "Roedor acuático nativo de Sudamérica, de gran tamaño y hábitos semiacuáticos. Es un importante ingeniero ecosistémico.",
        tipo: 'fauna',
        imagenUrl: "https://picsum.photos/seed/coipo/400/300"
      },
      {
        nombreComun: "Junco",
        nombreCientifico: "Juncus procerus",
        descripcion: "Planta perenne que crece en zonas húmedas y pantanosas, proporcionando refugio y material de anidación para aves.",
        tipo: 'flora',
        imagenUrl: "https://picsum.photos/seed/junco/400/300"
      },
      {
        nombreComun: "Sauce chileno",
        nombreCientifico: "Salix humboldtiana",
        descripcion: "Árbol nativo que crece en las riberas de ríos y humedales, fundamental para la estabilización de los suelos.",
        tipo: 'flora',
        imagenUrl: "https://picsum.photos/seed/sauce/400/300"
      }
    ],
    testimonios: [
      { id: 1, autor: "Ana Pérez", texto: "Un lugar mágico para conectar con la naturaleza sin salir de la ciudad. Ver las taguas nadando es un espectáculo.", fecha: "2023-10-15" },
      { id: 2, autor: "Carlos Fuentes", texto: "Es fundamental que protejamos este pulmón verde. Mis hijos aprenden más aquí que en cualquier libro.", fecha: "2023-09-22" }
    ],
    galeria: [
      "https://picsum.photos/seed/galeria1/600/400",
      "https://picsum.photos/seed/galeria2/600/400",
      "https://picsum.photos/seed/galeria3/600/400",
      "https://picsum.photos/seed/galeria4/600/400",
      "https://picsum.photos/seed/galeria5/600/400",
      "https://picsum.photos/seed/galeria6/600/400"
    ]
  },
  {
    id: 2,
    nombre: "Humedal Vegas de Chivilcán",
    subtitulo: "El corazón hídrico del macrosector de Chivilcán",
    descripcionCorta: "Localizado en el macrosector de Chivilcán, es clave para la regulación hídrica y la vida silvestre de la zona.",
    descripcionLarga: "Las Vegas de Chivilcán conforman un sistema de humedales de gran extensión y complejidad, interactuando directamente con el desarrollo urbano circundante. Este espacio natural cumple un rol insustituible en la absorción de aguas lluvias, previniendo anegamientos en el sector. Su biodiversidad, aunque amenazada, aún alberga especies de aves y anfibios de importancia para la conservación, convirtiéndolo en un laboratorio natural y un aula al aire libre para la comunidad.",
    ubicacion: "Macrosector Chivilcán, Temuco, Chile",
    mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6228.087289568972!2d-72.61111626012478!3d-38.71352639206757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3848a5a5aaf%3A0x51c2b2d9aad29a5a!2sHumedal%20Vegas%20de%20Chivilc%C3%A1n!5e0!3m2!1ses!2scl!4v1720810890250!5m2!1ses!2scl",
    imagenPrincipal: "https://picsum.photos/seed/chivilcan/800/600",
    floraYFauna: [
      {
        nombreComun: "Garza grande",
        nombreCientifico: "Ardea alba",
        descripcion: "Ave zancuda de gran tamaño y plumaje completamente blanco. Se alimenta de peces, anfibios e insectos en aguas someras.",
        tipo: 'fauna',
        imagenUrl: "https://picsum.photos/seed/garza/400/300"
      },
      {
        nombreComun: "Sapo de cuatro ojos",
        nombreCientifico: "Pleurodema thaul",
        descripcion: "Anfibio endémico de Chile, conocido por las glándulas lumbares que asemejan ojos y que utiliza como mecanismo de defensa.",
        tipo: 'fauna',
        imagenUrl: "https://picsum.photos/seed/sapo/400/300"
      },
      {
        nombreComun: "Totora",
        nombreCientifico: "Typha angustifolia",
        descripcion: "Planta acuática robusta que forma densos espadañales. Es un filtro natural del agua y refugio para la fauna.",
        tipo: 'flora',
        imagenUrl: "https://picsum.photos/seed/totora/400/300"
      },
      {
        nombreComun: "Maqui",
        nombreCientifico: "Aristotelia chilensis",
        descripcion: "Arbusto nativo siempreverde cuyo fruto, una baya de color morado oscuro, es un superalimento con altas propiedades antioxidantes.",
        tipo: 'flora',
        imagenUrl: "https://picsum.photos/seed/maqui/400/300"
      }
    ],
    testimonios: [
      { id: 1, autor: "Javier Rojas", texto: "Cada vez que camino por aquí, descubro un ave o un sonido nuevo. Es increíble tener esto tan cerca de casa.", fecha: "2023-11-02" },
      { id: 2, autor: "Luisa Martínez", texto: "Me preocupa el avance de las construcciones. Debemos organizarnos para proteger este tesoro natural.", fecha: "2023-10-28" }
    ],
    galeria: [
      "https://picsum.photos/seed/galeria7/600/400",
      "https://picsum.photos/seed/galeria8/600/400",
      "https://picsum.photos/seed/galeria9/600/400",
      "https://picsum.photos/seed/galeria10/600/400",
      "https://picsum.photos/seed/galeria11/600/400",
      "https://picsum.photos/seed/galeria12/600/400"
    ]
  }
];