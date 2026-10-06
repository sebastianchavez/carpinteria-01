const APP = {
  nombre: 'MaderaStudio',
  eslogan: 'Carpintería artesanal y academia',
  telefono: '+56 9 8765 4321',
  telefonoFijo: '+56 2 2876 5432',
  whatsapp: '56987654321',
  email: 'contacto@maderastudio.cl',
  direccion: 'Av. Los Carpinteros 2540, Santiago, Chile',
  horarioAtencion: 'Lun-Vie 09:00-19:00 | Sáb 10:00-14:00',
  redes: {
    facebook: 'https://facebook.com/maderastudio',
    instagram: 'https://instagram.com/maderastudio',
    youtube: 'https://youtube.com/maderastudio',
    linkedin: 'https://linkedin.com/company/maderastudio'
  }
};

const NAV_ITEMS = [
  { label: 'Inicio', href: 'index.html' },
  { label: 'Sobre nosotros', href: 'sobre-nosotros.html' },
  { label: 'Servicios', href: 'servicios.html' },
  { label: 'Galería', href: 'galeria.html' },
  { label: 'Precios', href: 'precios.html' },
  { label: 'Academia', href: 'horarios-clases.html' },
  { label: 'Contacto', href: 'contacto.html' }
];

const SERVICIOS = [
  {
    id: 1,
    nombre: 'Muebles a medida',
    icono: 'mueble',
    descripcion: 'Diseño y fabricación de muebles personalizados: comedores, living, dormitorios y bibliotecas con madera noble.',
    precioDesde: 350000,
    destacado: true
  },
  {
    id: 2,
    nombre: 'Cocinas integrales',
    icono: 'cocina',
    descripcion: 'Diseño, fabricación e instalación de cocinas completas con herrajes premium y acabados de lujo.',
    precioDesde: 850000,
    destacado: true
  },
  {
    id: 3,
    nombre: 'Closets y vestidores',
    icono: 'closet',
    descripcion: 'Closets empotrados y vestidores con diseño funcional, iluminación LED y organización inteligente.',
    precioDesde: 480000
  },
  {
    id: 4,
    nombre: 'Puertas y ventanas',
    icono: 'puerta',
    descripcion: 'Fabricación e instalación de puertas y ventanas en madera maciza con herrajes de primera calidad.',
    precioDesde: 180000
  },
  {
    id: 5,
    nombre: 'Decks y pérgolas',
    icono: 'deck',
    descripcion: 'Construcción de decks, pérgolas y quinchos en maderas tratadas para intemperie. Resistencia y belleza.',
    precioDesde: 420000
  },
  {
    id: 6,
    nombre: 'Restauración',
    icono: 'restauracion',
    descripcion: 'Restauramos muebles antiguos devolviéndoles su esplendor. Trabajamos piezas con valor sentimental y patrimonial.',
    precioDesde: 95000
  },
  {
    id: 7,
    nombre: 'Tallado y decoración',
    icono: 'tallado',
    descripcion: 'Tallado artístico en madera: cuadros, esculturas, relieves y elementos decorativos únicos.',
    precioDesde: 65000
  },
  {
    id: 8,
    nombre: 'Diseño 3D y planos',
    icono: 'diseno',
    descripcion: 'Renderizado 3D fotorrealista y planos técnicos de tus muebles antes de fabricarlos. Sin costo en proyectos grandes.',
    precioDesde: 35000,
    destacado: true
  },
  {
    id: 9,
    nombre: 'Barnizado y terminaciones',
    icono: 'barnizado',
    descripcion: 'Aplicación profesional de lacas, barnices, aceites y tintes para proteger y embellecer la madera.',
    precioDesde: 45000
  },
  {
    id: 10,
    nombre: 'Carpintería industrial',
    icono: 'industrial',
    descripcion: 'Producción en serie para constructoras, locales comerciales y proyectos de gran envergadura.',
    precioDesde: 1200000
  }
];

const EQUIPO = [
  {
    nombre: 'Joaquín Sandoval',
    cargo: 'Maestro Carpintero y Director',
    foto: 'https://i.pravatar.cc/400?img=12',
    bio: 'Más de 25 años de experiencia en carpintería fina. Formado en la Escuela de Oficios de la Madera de Alemania.'
  },
  {
    nombre: 'Camila Pérez',
    cargo: 'Diseñadora Industrial',
    foto: 'https://i.pravatar.cc/400?img=47',
    bio: 'Arquitecta con maestría en diseño de mobiliario. Traduce tus ideas en planos precisos y renders 3D.'
  },
  {
    nombre: 'Andrés Rojas',
    cargo: 'Jefe de Taller',
    foto: 'https://i.pravatar.cc/400?img=33',
    bio: 'Carpintero con 18 años en el taller. Especialista en ensambles, terminaciones y restauración de piezas finas.'
  },
  {
    nombre: 'Valentina Muñoz',
    cargo: 'Instructora Academia',
    foto: 'https://i.pravatar.cc/400?img=45',
    bio: 'Docente certificada con técnicas pedagógicas modernas. Forma a las nuevas generaciones de carpinteros.'
  },
  {
    nombre: 'Felipe Castillo',
    cargo: 'Especialista en Tallado',
    foto: 'https://i.pravatar.cc/400?img=68',
    bio: 'Maestro tallador con reconocimiento nacional. Sus obras se exhiben en galerías de Santiago y Valparaíso.'
  },
  {
    nombre: 'Constanza Vega',
    cargo: 'Atención al Cliente',
    foto: 'https://i.pravatar.cc/400?img=49',
    bio: 'Primera voz al contactarnos. Coordina visitas, presupuestos y el seguimiento de cada mueble hasta la entrega.'
  }
];

const TESTIMONIOS = [
  {
    nombre: 'Carolina Méndez',
    cargo: 'Dueña de casa',
    avatar: 'https://i.pravatar.cc/100?img=5',
    texto: 'MaderaStudio nos fabricó el comedor completo de roble. La calidad de las uniones y el terminado son impecables. Quedó como una pieza de herencia familiar.',
    rating: 5
  },
  {
    nombre: 'Sebastián Fuentes',
    cargo: 'Arquitecto',
    avatar: 'https://i.pravatar.cc/100?img=15',
    texto: 'Como arquitecto recomiendo a MaderaStudio para mis clientes. Cumplen plazos, los renders son exactos a la realidad y la calidad es consistente.',
    rating: 5
  },
  {
    nombre: 'Lorena Castillo',
    cargo: 'Estudiante de la academia',
    avatar: 'https://i.pravatar.cc/100?img=23',
    texto: 'El curso de carpintería básica me cambió la vida. Hoy tengo mi propio taller y hago muebles por encargo. Valentina es una excelente profesora.',
    rating: 5
  },
  {
    nombre: 'Marcelo Pizarro',
    cargo: 'Dueño de restaurant',
    avatar: 'https://i.pravatar.cc/100?img=51',
    texto: 'Nos restauraron las 12 sillas de un comedor antiguo de 1920. Quedaron como nuevas pero conservando la pátina original. Trabajo de orfebre.',
    rating: 5
  },
  {
    nombre: 'Daniela Soto',
    cargo: 'Emprendedora',
    avatar: 'https://i.pravatar.cc/100?img=29',
    texto: 'Pedí un mostrador a medida para mi cafetería. El diseño 3D ayudó mucho a visualizar y el resultado final fue exactamente lo esperado.',
    rating: 5
  }
];

const PLANES = [
  {
    nombre: 'Plan Esencial',
    precio: 79990,
    periodicidad: 'mes',
    descripcion: 'Ideal para amoblar tu primera vivienda.',
    destacado: false,
    caracteristicas: [
      '1 mueble a medida al mes',
      'Diseño 3D sin costo',
      'Asesoría en elección de maderas',
      'Entrega a domicilio',
      'Garantía de 1 año en estructura'
    ]
  },
  {
    nombre: 'Plan Hogar',
    precio: 169990,
    periodicidad: 'mes',
    descripcion: 'Para amoblar toda tu casa.',
    destacado: true,
    caracteristicas: [
      'Hasta 3 muebles a medida al mes',
      'Diseño 3D sin costo',
      'Asesoría en elección de maderas',
      'Entrega e instalación incluida',
      'Garantía de 2 años en estructura',
      'Mantención anual sin costo'
    ]
  },
  {
    nombre: 'Plan Empresarial',
    precio: 349990,
    periodicidad: 'mes',
    descripcion: 'Solución para constructoras y comercios.',
    destacado: false,
    caracteristicas: [
      'Muebles ilimitados en el mes',
      'Diseñador dedicado',
      'Producción en serie',
      'Instalación profesional',
      'Garantía de 3 años',
      'Reportes mensuales',
      'Gerente de cuenta dedicado'
    ]
  }
];

const PRECIOS_SERVICIOS = [
  { servicio: 'Diseño 3D y renderizado', precio: 35000, nota: 'Bonificable al aceptar el proyecto' },
  { servicio: 'Mesa de comedor (6 pers.)', precio: 350000, nota: 'Madera pino o MDF' },
  { servicio: 'Mesa de comedor (6 pers.)', precio: 580000, nota: 'Madera roble o nogal' },
  { servicio: 'Ropero 2 puertas', precio: 280000, nota: 'Melamina blanca' },
  { servicio: 'Ropero 2 puertas', precio: 480000, nota: 'Madera maciza' },
  { servicio: 'Cocina integral (lineal 4m)', precio: 850000, nota: 'MDF con melamina' },
  { servicio: 'Cocina integral (lineal 4m)', precio: 1450000, nota: 'Madera maciza + lacado' },
  { servicio: 'Closet 3 módulos', precio: 480000, nota: 'Con maletero e iluminación' },
  { servicio: 'Puerta de interior', precio: 180000, nota: 'Marco incluido' },
  { servicio: 'Restauración silla antigua', precio: 95000, nota: 'Evaluación previa sin costo' },
  { servicio: 'Deck de madera (m²)', precio: 45000, nota: 'Madera tratada intemperie' },
  { servicio: 'Pérgola 3x4m', precio: 420000, nota: 'Madera pino impregnado' },
  { servicio: 'Barnizado y lacado (m²)', precio: 8500, nota: 'Incluye lijado y sellado' },
  { servicio: 'Tallado decorativo', precio: 65000, nota: 'Según diseño y tamaño' }
];

const CURSOS = [
  {
    id: 1,
    nivel: 'Carpintería Básica',
    duracion: '4 semanas',
    cupos: 12,
    cuposDisponibles: 5,
    precio: 199990,
    proximoInicio: '10 de noviembre',
    descripcion: 'Aprende los fundamentos de la carpintería: herramientas, uniones básicas, lijado, ensambles y armado de tu primer mueble.',
    temario: [
      'Herramientas manuales y eléctricas',
      'Tipos de madera y sus usos',
      'Uniones básicas: caja y espiga, machimbre',
      'Lijado, tintes y barnices',
      'Armado de un banco de trabajo',
      'Proyecto final: caja de madera'
    ]
  },
  {
    id: 2,
    nivel: 'Diseño y Fabricación',
    duracion: '6 semanas',
    cupos: 10,
    cuposDisponibles: 8,
    precio: 349990,
    proximoInicio: '18 de noviembre',
    descripcion: 'Profundiza en diseño de muebles, lectura de planos, máquinas estacionarias y creación de piezas funcionales completas.',
    temario: [
      'Diseño y dibujo técnico de muebles',
      'Software de diseño 3D básico',
      'Uso de sierra de banco y cepilladora',
      'Uniones avanzadas: cola de milano',
      'Tallado y moldurado',
      'Proyecto final: silla o banco'
    ]
  },
  {
    id: 3,
    nivel: 'Tallado y Restauración',
    duracion: '8 semanas',
    cupos: 8,
    cuposDisponibles: 8,
    precio: 549990,
    proximoInicio: '1 de diciembre',
    descripcion: 'Especialízate en tallado artístico y restauración de muebles antiguos. Aprende las técnicas que dominan los profesionales.',
    temario: [
      'Técnicas de tallado en bajorrelieve',
      'Restauración de muebles antiguos',
      'Identificación de maderas nobles',
      'Acabados finos: goma laca, poliuretano',
      'Patrimonio y antigüedades',
      'Proyecto final: pieza restaurada'
    ]
  }
];

const HORARIOS_CLASES = [
  { dia: 'Lunes', manana: '10:00 - 13:00', tarde: '15:00 - 18:00', noche: null },
  { dia: 'Martes', manana: '10:00 - 13:00', tarde: '15:00 - 18:00', noche: null },
  { dia: 'Miércoles', manana: '10:00 - 13:00', tarde: '15:00 - 18:00', noche: null },
  { dia: 'Jueves', manana: '10:00 - 13:00', tarde: '15:00 - 18:00', noche: null },
  { dia: 'Viernes', manana: '10:00 - 13:00', tarde: '15:00 - 18:00', noche: null },
  { dia: 'Sábado', manana: '09:00 - 13:00', tarde: null, noche: null },
  { dia: 'Domingo', manana: 'Cerrado', tarde: null, noche: null }
];

const HORARIOS_ATENCION = [
  { dia: 'Lunes a Viernes', horario: '09:00 - 19:00' },
  { dia: 'Sábado', horario: '10:00 - 14:00' },
  { dia: 'Domingo', horario: 'Cerrado' },
  { dia: 'Visitas al taller', horario: 'Con cita previa' }
];

const GALERIA = [
  { id: 1, img: 'https://picsum.photos/seed/cocina01/800/600', titulo: 'Cocina integral de roble', categoria: 'cocinas' },
  { id: 2, img: 'https://picsum.photos/seed/closet01/800/600', titulo: 'Closet con iluminación LED', categoria: 'closets' },
  { id: 3, img: 'https://picsum.photos/seed/comedor01/800/600', titulo: 'Comedor de 8 personas', categoria: 'muebles' },
  { id: 4, img: 'https://picsum.photos/seed/puerta01/800/600', titulo: 'Puerta tallada', categoria: 'puertas' },
  { id: 5, img: 'https://picsum.photos/seed/cafeteria01/800/600', titulo: 'Mostrador para cafetería', categoria: 'comercial' },
  { id: 6, img: 'https://picsum.photos/seed/deck01/800/600', titulo: 'Deck con pérgola', categoria: 'exterior' },
  { id: 7, img: 'https://picsum.photos/seed/living01/800/600', titulo: 'Living completo', categoria: 'muebles' },
  { id: 8, img: 'https://picsum.photos/seed/oficina01/800/600', titulo: 'Mobiliario oficina', categoria: 'comercial' },
  { id: 9, img: 'https://picsum.photos/seed/restauracion01/800/600', titulo: 'Antes - Silla antigua', categoria: 'restauracion' },
  { id: 10, img: 'https://picsum.photos/seed/restauracion02/800/600', titulo: 'Después - Silla restaurada', categoria: 'restauracion' },
  { id: 11, img: 'https://picsum.photos/seed/tallado01/800/600', titulo: 'Tallado decorativo', categoria: 'tallado' },
  { id: 12, img: 'https://picsum.photos/seed/quincho01/800/600', titulo: 'Quincho con mesón', categoria: 'exterior' }
];

const MADERAS = [
  {
    nombre: 'Pino',
    color: '#D4A574',
    descripcion: 'Madera blanda, económica y noble. Ideal para muebles de estilo rústico, pérgolas y decks.',
    usos: ['Muebles rústicos', 'Pérgolas', 'Estructuras'],
    precio: 'Económico'
  },
  {
    nombre: 'Roble',
    color: '#A0825A',
    descripcion: 'Madera dura de gran resistencia y veta atractiva. Para muebles de calidad y larga vida.',
    usos: ['Muebles finos', 'Puertas', 'Pisos'],
    precio: 'Premium'
  },
  {
    nombre: 'Nogal',
    color: '#5C4033',
    descripcion: 'Madera oscura y elegante. Muy cotizada para muebles finos, escritorios y piezas de lujo.',
    usos: ['Muebles de lujo', 'Escritorios', 'Decoración'],
    precio: 'Alto'
  },
  {
    nombre: 'Cedro',
    color: '#9D6B4A',
    descripcion: 'Madera aromática y resistente a la humedad. Perfecta para closets, cajones y exteriores.',
    usos: ['Closets', 'Cajones', 'Revestimientos'],
    precio: 'Medio-Alto'
  },
  {
    nombre: 'MDF',
    color: '#C4A77D',
    descripcion: 'Tablero de fibras de madera. Base ideal para lacados, enchapados y muebles contemporáneos.',
    usos: ['Muebles modernos', 'Cocinas', 'Revestimientos'],
    precio: 'Económico'
  },
  {
    nombre: 'Melamina',
    color: '#BFA67A',
    descripcion: 'Tablero con superficie melamínica. Práctico, fácil de limpiar y muy resistente al uso diario.',
    usos: ['Closets', 'Roperos', 'Oficinas'],
    precio: 'Económico'
  }
];

const PROCESO = [
  { num: 1, titulo: 'Consulta inicial', descripcion: 'Conversamos sobre tu proyecto, ideas, necesidades y presupuesto. Te orientamos en maderas y diseños.' },
  { num: 2, titulo: 'Diseño 3D', descripcion: 'Creamos renders 3D fotorrealistas y planos técnicos para que visualices tu mueble antes de fabricarlo.' },
  { num: 3, titulo: 'Cotización', descripcion: 'Te entregamos un presupuesto detallado por escrito, sin sorpresas, con plazos claros de fabricación.' },
  { num: 4, titulo: 'Fabricación', descripcion: 'Nuestros carpinteros elaboran tu mueble con maderas nobles y técnicas tradicionales de ensamble.' },
  { num: 5, titulo: 'Terminaciones', descripcion: 'Lijado fino, aplicación de tintes, lacas o barnices. Acabados perfectos listos para muchos años.' },
  { num: 6, titulo: 'Entrega e instalación', descripcion: 'Transportamos e instalamos tu mueble en tu hogar o negocio. Garantía escrita de 2 años.' }
];

const ESTADISTICAS = [
  { num: 25, sufijo: '+', label: 'Años de experiencia' },
  { num: 1850, sufijo: '+', label: 'Muebles fabricados' },
  { num: 1200, sufijo: '+', label: 'Clientes satisfechos' },
  { num: 380, sufijo: '+', label: 'Alumnos formados' }
];

const CERTIFICACIONES = [
  'Registro Nacional de Artesanos',
  'Sello de Calidad Maderera FSC',
  'ISO 9001 - Gestión de Calidad',
  'Mutual de Seguridad',
  'Asociación Gremial de Carpinteros',
  'Cámara Chilena de la Construcción'
];

const FAQ = [
  {
    pregunta: '¿Cuáles son los medios de pago aceptados?',
    respuesta: 'Aceptamos efectivo, transferencia bancaria, tarjetas de débito y crédito (hasta 12 cuotas precio contado), y cheques al día. Para proyectos grandes ofrecemos financiamiento en cuotas con un pie inicial del 30%.'
  },
  {
    pregunta: '¿Las cotizaciones tienen costo?',
    respuesta: 'La consulta inicial y el diseño 3D del proyecto son gratuitos. Para muebles a medida, una vez aprobado el diseño 3D, se cobra un pie inicial del 40% que se descuenta del total. Los proyectos sobre $800.000 no tienen costo de diseño.'
  },
  {
    pregunta: '¿Qué garantía tienen sus muebles?',
    respuesta: 'Todos nuestros muebles cuentan con garantía escrita de 2 años en estructura y 1 año en terminaciones. La garantía oficial del fabricante aplica para herrajes. En planes empresariales la garantía se extiende a 3 años.'
  },
  {
    pregunta: '¿Cuánto demora la fabricación de un mueble?',
    respuesta: 'Los tiempos varían según la complejidad: un mueble simple (mesa, repisa) toma entre 10 y 15 días hábiles. Una cocina integral o closet puede tomar entre 30 y 45 días. Te entregamos un cronograma detallado al aprobar el proyecto.'
  },
  {
    pregunta: '¿Pueden restaurar muebles antiguos de familia?',
    respuesta: 'Sí, somos especialistas en restauración. Evaluamos la pieza, te presentamos un diagnóstico y presupuesto, y decidimos juntos qué técnicas aplicar. Trabajamos muebles con valor sentimental o patrimonial.'
  },
  {
    pregunta: '¿Hacen instalación a domicilio?',
    respuesta: 'Sí, dentro del radio urbano de la Región Metropolitana la instalación está incluida en proyectos sobre $400.000. Para regiones, evaluamos cada proyecto y te entregamos una cotización de envío e instalación.'
  },
  {
    pregunta: '¿Puedo llevar mi propio diseño?',
    respuesta: 'Por supuesto. Si tienes un diseño, plano o foto de referencia, lo respetamos y lo adaptamos a las medidas y materiales que necesites. También podemos mejorarlo con sugerencias técnicas de nuestros carpinteros.'
  }
];

window.APP_DATA = {
  APP, NAV_ITEMS, SERVICIOS, EQUIPO, TESTIMONIOS,
  PLANES, PRECIOS_SERVICIOS, CURSOS, HORARIOS_CLASES,
  HORARIOS_ATENCION, GALERIA, MADERAS, PROCESO, ESTADISTICAS,
  CERTIFICACIONES, FAQ
};