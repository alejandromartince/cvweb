export const navLinks = [
  {
    id: 1,
    name: {
      es: "Inicio", // En español
      en: "Home", // En inglés
    },
    href: "#home",
  },
  {
    id: 2,
    name: {
      es: "Sobre mí", // En español
      en: "About me", // En inglés
    },
    href: "#about",
  },
  {
    id: 3,
    name: {
      es: "Proyectos", // En español
      en: "Projects", // En inglés
    },
    href: "#projects",
  },
  {
    id: 4,
    name: {
      es: "Contacto", // En español
      en: "Contact", // En inglés
    },
    href: "#contact",
  },
];

export const homeData = {
  es: {
    saludo: "¡Hola!, soy",
    roles: [
      "Ingeniero Informático",
      "Desarrollador Full Stack",
      "Apasionado por la programación",
      "Aprendiendo cada día",
      "Gestión de bases de datos",
      "Administrador de equipos informáticos",
    ],
  },
  en: {
    saludo: "Hello, I'm",
    roles: [
      "Computer Engineer",
      "Full Stack Developer",
      "Passionate about development",
      "Learning every day",
      "Database Management",
      "Computer Equipment Management",
    ],
  },
};
export const myProjects = [
  {
    title: { 
      es: "Toldos Andalucía (En desarrollo)",
      en: "Toldos Andalucía (In development)"
    },
    desc: {
      es: "Toldos Andalucia es una empresa con más de 25 años de experiencia especializada en la instalación de toldos en Málaga, comprometida en ofrecer soluciones efectivas para proteger tu hogar del sol y las lluvias.",
      en: "Toldos Andalucia is a company with more than 25 years of experience specializing in installing windows in Malaga, committed to offering effective solutions to protect your home from the sun and rain."
    },
    subdesc: {
      es: "Es un proyecto real que incluye una interfaz moderna y responsiva utilizando React, Three.js, HTML, CSS y JavaScript, con elementos interactivos en 3D para mejorar la experiencia del usuario.",
      en: "It is a real project that includes a modern and responsive interface using React, Three.js, HTML, CSS and JavaScript, with interactive elements in 3D to improve the user experience."
    },
    href: "https://toldosandalucia.alejandromartince.com",
    texture: "/textures/ToldosAndalucia.mp4",
    logo: "../assets/Logos/TA.png",
    // Cambia las rutas de las imágenes
    spotlight: "/assets/Spotlights/spotlight3.png",  // Cambia aquí
    tags: [
      { id: 1, name: "HTML", path: "/assets/Logos/HTML.png" },
      { id: 2, name: "CSS", path: "/assets/Logos/CSS.png" },
      { id: 3, name: "JS", path: "/assets/Logos/JS.png" },
      { id: 4, name: "React", path: "/assets/Logos/React.png" },
      { id: 5, name: "Three", path: "/assets/Logos/Three.png" },
    ],
  },
  {
    title: { 
      es: "Mundo Vinilo",
      en: "Mundo Vinilo"
    },
    desc: {
      es: "Mundo Vinilo es una plataforma innovadora que revoluciona la forma en que los vinilos son coleccionados y compartidos.",
      en: "Mundo Vinilo is an innovative platform that revolutionizes the way vinyl records are collected and shared."
    },
    subdesc: {
      es: "Desarrollado con PHP y MySql para facilitar el manejo del contenido de la página y una escalabilidad óptima.",
      en: "Developed with PHP and MySQL to facilitate content management on the page and optimal scalability."
    },
    href: "https://mundovinilo.alejandromartince.com",
    texture: "/textures/MV.mp4",
    logo: "../assets/Logos/LogoMV.png",
    // Cambia las rutas de las imágenes
    spotlight: "/assets/Spotlights/spotlight2.png",  // Cambia aquí
    tags: [
      { id: 1, name: "HTML", path: "/assets/Logos/HTML.png" },
      { id: 2, name: "CSS", path: "/assets/Logos/CSS.png" },
      { id: 3, name: "JS", path: "/assets/Logos/JS.png" },
      { id: 4, name: "MySQL", path: "/assets/Logos/mysql.png" },
      { id: 5, name: "PHP", path: "/assets/Logos/PHP.png" },
    ],
  },
  {
    title: { 
      es: "De Sur A Sur",
      en: "De Sur A Sur"
    },
    desc: {
      es: "De Sur A Sur es una tienda online especializada en el mundo de la moda, ofreciendo una exclusiva selección de bolsos, cestas y canastas.",
      en: "De Sur A Sur is an online store specialized in the fashion world, offering an exclusive selection of bags, baskets, and hampers."
    },
    subdesc: {
      es: "Fue mi primer proyecto, realizado con la intención de aprender y mejorar mis conocimientos y habilidades en el desarrollo web.",
      en: "It was my first project, created with the intention of learning and improving my knowledge and skills in web development."
    },
    href: "https://desurasur.alejandromartince.com",
    texture: "/textures/SurASur.mp4",
    logo: "../assets/Logos/LogoDSAS.png",
    spotlight: "/assets/Spotlights/spotlight1.png",  // Cambia aquí
    tags: [
      { id: 1, name: "HTML", path: "/assets/Logos/HTML.png" },
      { id: 2, name: "CSS", path: "/assets/Logos/CSS.png" },
      { id: 3, name: "JS", path: "/assets/Logos/JS.png" },
    ],
  }
];
