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
      es: "Mundo Vinilo - Proyecto Final",
      en: "Mundo Vinilo - Final Project"
    },
    desc: {
      es: "Mundo Vinilo es una plataforma innovadora que revoluciona la forma en que los vinilos son coleccionados y compartidos.",
      en: "Mundo Vinilo is an innovative platform that revolutionizes the way vinyl records are collected and shared."
    },
    subdesc: {
      es: "Desarrollado con PHP y MySql para facilitar el manejo del contenido de la página y una escalabilidad óptima.",
      en: "Developed with PHP and MySQL to facilitate content management on the page and optimal scalability."
    },
    href: "https://github.com/AleMR12/Proyecto-Vinilo",
    texture: "/textures/video.mp4",
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
      es: "De Sur A Sur - Tienda de Bolsos y Canastas",
      en: "De Sur A Sur - Bags and Purses Store"
    },
    desc: {
      es: "De Sur A Sur es una tienda online especializada en el mundo de la moda, ofreciendo una exclusiva selección de bolsos, cestas y canastas.",
      en: "De Sur A Sur is an online store specialized in the fashion world, offering an exclusive selection of bags, baskets, and hampers."
    },
    subdesc: {
      es: "Fue mi primer proyecto, realizado con la intención de aprender y mejorar mis conocimientos y habilidades en el desarrollo web.",
      en: "It was my first project, created with the intention of learning and improving my knowledge and skills in web development."
    },
    href: "https://github.com/alejandromartince/desurasur",
    texture: "/textures/video2.mp4",
    logo: "../assets/Logos/LogoDSAS.png",
    spotlight: "/assets/Spotlights/spotlight1.png",  // Cambia aquí
    tags: [
      { id: 1, name: "HTML", path: "/assets/Logos/HTML.png" },
      { id: 2, name: "CSS", path: "/assets/Logos/CSS.png" },
      { id: 3, name: "JS", path: "/assets/Logos/JS.png" },
    ],
  }
];
