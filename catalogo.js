/* =====================================================================
   CATÁLOGO DEL ÁLBUM
   Para agregar una pieza nueva: copia un bloque { ... } y cambia sus datos.
   - id:         debe ser IGUAL al id que tiene en MEDIA_PAIRS dentro de AR.html
   - categoria:  "ilustraciones" o "artilugios"
   - imagen:     la imagen que se muestra cuando está desbloqueada
   - autor / descripcion / enlaces: lo que se ve al presionar la pieza
   ===================================================================== */

const CATEGORIAS = [
  { id: "ilustraciones", titulo: "Ilustraciones", vacio: "Aún no hay ilustraciones." },
  { id: "artilugios",    titulo: "Artilugios",    vacio: "Aún no hay artilugios en el álbum." }
];

const CATALOGO = [
  {
    id: "marcador_A",
    categoria: "ilustraciones",
    nombre: "Goku",
    imagen: "goku.jpg",
    autor: "Nombre del autor",
    descripcion: "Descripción de la obra.",
    enlaces: [ /* { texto: "Instagram", url: "https://instagram.com/usuario" } */ ]
  },
  {
    id: "marcador_B",
    categoria: "ilustraciones",
    nombre: "Clancy",
    imagen: "imagenB.jpg",
    autor: "Nombre del autor",
    descripcion: "Descripción de la obra.",
    enlaces: []
  },
  {
    id: "marcador_C",
    categoria: "ilustraciones",
    nombre: "Ilustración C",
    imagen: "imagenC.jpg",
    autor: "Nombre del autor",
    descripcion: "Descripción de la obra.",
    enlaces: []
  },
  {
    id: "marcador_D",
    categoria: "ilustraciones",
    nombre: "Ilustración D",
    imagen: "imagenD.jpg",
    autor: "Nombre del autor",
    descripcion: "Descripción de la obra.",
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
    enlaces: []
  }
  */
];
