export default {
  global: {
    componenteFormativo: 'Diseño de circuito esquemático mediante CAD',
    descripcionCurso:
      'Este componente formativo es una guía para el uso de las herramientas de la ventana <em>Board</em> en el diseño de circuitos impresos. Explica desde la ubicación de componentes hasta la configuración de pistas, abordando etapas clave como transformación, rectificación, regulación y filtrado. Está orientado a optimizar la organización y conexión en el diseño, garantizando un cumplimiento técnico adecuado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ventana <em>Board</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ventana <em>Board</em>',
      referencia:
        'Unicrom. (s. f.). <em>Cómo hacer un circuito impreso (PCB) con EAGLE Layout</em> Editor.',
      tipo: 'Documento',
      link:
        'https://unicrom.com/hacer-un-circuito-impreso-pcb-eagle-layout-editor/',
    },
    {
      tema: 'Ventana <em>Board</em>',
      referencia:
        'Terminal Two. (2017). Autodesk Eagle #2 | Basics of Schematic Design.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=3WBYL0-m-mg&list=PLr0mEvO7yBe6QHexsgU2WFUGesFFobGZp&index=3',
    },
    {
      tema: 'Ventana <em>Board</em>',
      referencia:
        'Universidad de los Andes (2018, mayo 11). <em>Guía para el uso de Eagle</em> (Versión 2.0, pp. 1-26).',
      tipo: 'Documento',
      link:
        'https://electricayelectronica.uniandes.edu.co/sites/default/files/laboratorios/Generacin_de_archivos_GERBER_desde_EAGLE.pdf',
    },
  ],
  glosario: [
    {
      termino: '<em>Layer</em>',
      significado:
        'Herramienta que permite seleccionar y editar capas en el diseño, como márgenes, pistas, alambres y nombres.',
    },
    {
      termino: '<em>Text</em>',
      significado:
        'Función que abre una ventana para agregar texto en el diseño, utilizado para etiquetar y reconocer componentes.',
    },
    {
      termino: '<em>Show</em>',
      significado:
        'Herramienta que resalta conexiones de pines, facilitando la identificación de las redes a las que pertenecen.',
    },
    {
      termino: '<em>Auto</em>',
      significado:
        'Función que ajusta automáticamente las pistas en cada componente del diseño.',
    },
    {
      termino: '<em>Route</em>',
      significado:
        'Herramienta que permite enrutar manualmente las pistas que no fueron ajustadas automáticamente.',
    },
    {
      termino: '<em>Board</em>',
      significado:
        'Ventana en EAGLE donde se visualizan los componentes y conexiones de manera realista.',
    },
    {
      termino: '<em>Schematic</em>',
      significado:
        'Ventana en EAGLE donde se elabora el esquema inicial de conexiones de los componentes.',
    },
    {
      termino: '<em>tPlace</em>',
      significado:
        'Capa en la que se agregan textos y etiquetas para identificar los componentes en el diseño.',
    },
    {
      termino: 'Enrutado',
      significado:
        'Proceso de creación de rutas o pistas que conectan los componentes en el diseño de un circuito impreso.',
    },
    {
      termino: 'Bloque funcional',
      significado:
        'Conjunto de componentes organizados por función (transformación, regulación, filtrado, etc.) para mejorar el diseño.',
    },
  ],
  referencias: [
    {
      referencia:
        'Autodesk. (2024). EAGLE PCB <em>Design</em> and <em>Schematic</em> Software. Autodesk.',
      link: 'https://www.autodesk.com/products/eagle/overview',
    },
    {
      referencia:
        'Franco, S. (2019). <em>Design with Operational Amplifiers and Analog Integrated Circuits</em>. McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Horowitz, P., & Hill, W. (2015). <em>The Art of Electronics</em> (3ra ed.). Cambridge University Press.',
      link: '',
    },
    {
      referencia:
        'Mehler, D. (2018). <em>Practical Electronics for Inventors</em> (4ta ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Ulaby, F. T., & Maharbiz, M. M. (2020). <em>Circuit Analysis and Design</em>. Michigan Publishing.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Francisco Arnaldo Vargas Bermúdez',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
