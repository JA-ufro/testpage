export interface Testimonio {
  id: number;
  autor: string;
  texto: string;
  fecha: string;
}

export interface FloraFauna {
  nombreComun: string;
  nombreCientifico: string;
  descripcion: string;
  tipo: 'flora' | 'fauna';
  imagenUrl: string;
}

export interface Humedal {
  id: number;
  nombre: string;
  subtitulo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  ubicacion: string;
  mapaUrl: string;
  imagenPrincipal: string;
  floraYFauna: FloraFauna[];
  testimonios: Testimonio[];
  galeria: string[];
}

export type PageView = 
  | { page: 'home' }
  | { page: 'informacion' }
  | { page: 'conservacion' }
  | { page: 'detalle'; id: number };