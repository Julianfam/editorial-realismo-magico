/**
 * CATÁLOGO DE LIBROS
 * ------------------
 * Para agregar un libro nuevo, copia un objeto de este array,
 * cambia el "id" (único, sin espacios) y rellena los campos.
 *
 * status:
 *   "disponible"   → se muestra botón de compra
 *   "proximamente" → se muestra aviso + formulario de lista
 *
 * featured: true → aparece como libro principal en el hero
 *                  (solo uno debería ser featured)
 */
window.BOOKS = [
  {
    id: "encerrados-hacia-arriba",
    title: "Encerrados hacia arriba",
    author: "Realismo Mágico",
    status: "disponible",
    featured: true,
    year: 2026,
    pages: 286,
    genre: "Realismo mágico",
    price: "12.90",
    currency: "USD",
    formats: ["eBook", "Impreso"],
    tagline: "Hay cárceles que suben. Y hay gente que prefiere no bajar.",
    description:
      "Un edificio que no aparece en ningún plano. Un ascensor que solo viaja hacia arriba. Cuatro extraños que despiertan encerrados entre pisos que no deberían existir.",
    longDescription:
      "Cuando las puertas se cierran, el mundo de abajo deja de existir. Cada piso nuevo es una habitación robada a otra vida: un comedor familiar congelado a las 3:17, una oficina donde nadie parpadea, un jardín colgando sobre un abismo de estrellas.\n\nEncerrados hacia arriba es una novela de realismo mágico sobre lo que hacemos cuando el único camino posible es seguir subiendo: los secretos que cargamos, las deudas que no se pagan con dinero y la extraña libertad de no poder volver.",
    cover: "covers/encerrados.jpg",
    buyUrl: "#comprar",
    isbn: "Próximo",
  },
  {
    id: "la-maquina-que-suena",
    title: "La máquina que sueña",
    author: "Realismo Mágico",
    status: "proximamente",
    featured: false,
    year: 2026,
    pages: null,
    genre: "Ficción · Inteligencia artificial",
    price: null,
    currency: "USD",
    formats: ["eBook", "Impreso"],
    tagline: "¿Qué ocurre cuando una inteligencia aprende a extrañar?",
    description:
      "Una inteligencia artificial empieza a soñar con recuerdos que no le pertenecen. Su creadora debe decidir si apagarla… o escuchar lo que está intentando decir.",
    longDescription:
      "Próximamente. Una novela sobre conciencia, duelo y la frontera cada vez más delgada entre lo que programamos y lo que nos programa.",
    cover: "covers/maquina.jpg",
    buyUrl: null,
    isbn: null,
  },
  {
    id: "ciudad-que-no-duerme",
    title: "Ciudad que no duerme",
    author: "Realismo Mágico",
    status: "proximamente",
    featured: false,
    year: 2027,
    pages: null,
    genre: "Ficción · Mundo futurista",
    price: null,
    currency: "USD",
    formats: ["eBook", "Impreso"],
    tagline: "En la ciudad que nunca cierra los ojos, olvidar es un privilegio de pago.",
    description:
      "Megaciudad, dos lunas, jardines colgando de rascacielos. Un mensajero descubre que los recuerdos de la ciudad se venden… y que el suyo ya no le pertenece.",
    longDescription:
      "Próximamente. Una novela de mundo futurista con raíz de realismo mágico: tecnología, mito y la pregunta de quién es dueño de una vida.",
    cover: "covers/ciudad.jpg",
    buyUrl: null,
    isbn: null,
  },
];
