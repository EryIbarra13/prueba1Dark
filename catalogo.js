/* =====================================================================
   CATÁLOGO DEL ÁLBUM
   Para agregar una pieza nueva: copia un bloque { ... } y cambia sus datos.
   - id:         debe ser IGUAL al id que tiene en MEDIA_PAIRS dentro de AR.html
   - categoria:  "ilustraciones" o "artilugios"
   - imagen:     la imagen que se muestra cuando está desbloqueada
   - autor / descripcion / enlaces: lo que se ve al presionar la pieza
   - pista:      la pista que da la IA (IA.html) cuando falta escanear esta pieza
   ===================================================================== */

const CATEGORIAS = [
  { id: "ilustraciones", titulo: "Ilustraciones", vacio: "Aún no hay ilustraciones." },
  { id: "artilugios",    titulo: "Artilugios",    vacio: "Aún no hay artilugios en el álbum." }
];

const CATALOGO = [
  {
    id: "Calavera",
    categoria: "ilustraciones",
    nombre: "Calavera",
    imagen: "Calavera.png",
    autor: "Nombre del autor",
    descripcion: "Descripción de la obra.",
    pista: "Un hermoso esqueleto mientras una mujer lo observa.",
    enlaces: [ /* { texto: "Instagram", url: "https://instagram.com/usuario" } */ ]
  },
  {
    id: "Charro",
    categoria: "ilustraciones",
    nombre: "Charro Negro",
    imagen: "CharroNegro.jpg",
    autor: "Nombre del autor",
    descripcion: "Descripción de la obra.",
    pista: "Una inigualable leyenda mexicana.",
    enlaces: []
  },
  {
    id: "Osito",
    categoria: "ilustraciones",
    nombre: "Mi corazon te lo regalo",
    imagen: "Osito.png",
    autor: "Bombon Skylos",
    descripcion: "Trata de retratar de forma cruda y literal a mi personaje regalando su corazon.",
    pista: "No hay nada mas tierno que alguien regalando su corazon.",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/bombon_skylos" }]
  },
  {
    id: "marcador_D",
    categoria: "ilustraciones",
    nombre: "Ilustración D",
    imagen: "imagenD.jpg",
    autor: "Nombre del autor",
    descripcion: "Descripción de la obra.",
    pista: "Escribe aquí la pista para encontrar esta pieza.",
    enlaces: []
  },
  {
    id: "Spring",
    categoria: "artilugios",
    nombre: "Springtramp",
    imagen: "Mysterio1.jpg",
    autor: "Ery Ibarra",
    descripcion: "Cabeza de un animatronico.",
    pista: "Un extraño sujeto se la puso una vez y no vivio para contarlo.",
    enlaces: []
   }
  /* Ejemplo de artilugio (quita los comentarios para usarlo):
  ,{
    id: "artilugio_1",
    categoria: "artilugios",
    nombre: "Nombre del artilugio",
    imagen: "artilugio1.jpg",
    autor: "Nombre del autor",
    descripcion: "Descripción.",
    pista: "Pista para encontrarlo.",
    enlaces: []
  }
  */
];
