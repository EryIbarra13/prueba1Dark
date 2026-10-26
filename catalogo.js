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
    nombre: "El Charro Negro",
    imagen: "CharroNegro.jpg",
    autor: "Grecia Morales (Suki)",
    descripcion: "Las monedas de oro que brillan en la penumbra, son pagadas con el precio del alma.",
    pista: "Una inigualable leyenda mexicana.",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/suki_owo_" }]
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
    id: "Retrato",
    categoria: "ilustraciones",
    nombre: "Retrato Oval",
    imagen: "Retrato.jpeg",
    autor: "Fatima Belem Villanueva Martinez",
    descripcion: "Al final de la noche, el hambre prevalece.",
    pista: "Un retrato de una persona formal.",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/just_an_emo_bird" }]
  },
   {
    id: "Ryze",
    categoria: "ilustraciones",
    nombre: "Ryze",
    imagen: "Ryze.jpg",
    autor: "Leslie synyster",
    descripcion: "Una interpretacion mas realista al personaje Ryze de Tokyo Ghoul.",
    pista: "Aveces la cita puede dar un cambio brutal.",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/digitalpeperonni" }]
  },
   {
    id: "MM",
    categoria: "ilustraciones",
    nombre: "Michael Myers",
    imagen: "MM.jpeg",
    autor: "",
    descripcion: "",
    pista: "Despierta cada año en halloween",
    enlaces: [{ texto: "Instagram", url: "" }]
  },
   {
    id: "Calabaza",
    categoria: "ilustraciones",
    nombre: "PUMPKIN — Trick or Treat?",
    imagen: "Calabaza.jpg",
    autor: "Mahun Herrera",
    descripcion: "Entre sombras y espíritus, una sonrisa brillante anuncia que Halloween ha llegado.",
    pista: "Las almas al servicio de la gran calabaza",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/mahun_doodles" }]
  },
   {
    id: "Cena",
    categoria: "ilustraciones",
    nombre: "Huesos y todo",
    imagen: "Cena.jpg",
    autor: "Aiden Ramos Ceniceros",
    descripcion: "En realidad ambos están de acuerdo con esta desición, uno dando más que él otro",
    pista: "Una deliciosa cena",
    enlaces: [{ texto: "Instagram", url: "" }]
  },
   {
    id: "Transformers",
    categoria: "ilustraciones",
    nombre: "Autobot a sustar",
    imagen: "Transformers.jpg",
    autor: "Karen Itzel Cedillo Chavez",
    descripcion: "Este dibujo esta basado en un capitulo de transformers animated una de mis series favoritas del capitulo y llego la araña el cual es uno de mis favoritos por la temática",
    pista: "Hasta los mejores motores piden dulce o travesura",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/kirby_cedillo" }]
   },
   {
    id: "Alucard",
    categoria: "ilustraciones",
    nombre: "Alucard",
    imagen: "Alucard.jpg",
    autor: "Santihrz",
    descripcion: "Te amaré hasta que no quede nada de ti, y aun entonces, ni la muerte te concederá la libertad de olvidarme",
    pista: "El reino de los vampiros",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/santi_goes_on" }]
   },
   {
    id: "Mariposa",
    categoria: "ilustraciones",
    nombre: "Mariposa",
    imagen: "Mariposa.png",
    autor: "",
    descripcion: "",
    pista: "",
    enlaces: [{ texto: "Instagram", url: "" }]
   },
   {
    id: "Myheard",
    categoria: "ilustraciones",
    nombre: "Myheard",
    imagen: "Myheard.png",
    autor: "Karla Vivar",
    descripcion: "Se basa en el sentimiento de extrañar a una persona que se fue de la nada y los sentimientos desde la tristeza hasta el enojo del porqué no saber el porqué esa persona se fue",
    pista: "Un pobre corazón",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/__hey_kvr_?rpxt=MTg4bjFlY2hycjMwMQ%3D%3D" }]
   },
  {
    id: "Spring",
    categoria: "artilugios",
    nombre: "Springtramp",
    imagen: "goku.jpg",
    autor: "Ery Ibarra",
    descripcion: "Cabeza de un animatronico.",
    pista: "Un extraño sujeto se la puso una vez y no vivio para contarlo.",
    enlaces: [{ texto: "Instagram", url: "https://www.instagram.com/thesheko13" }]
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
