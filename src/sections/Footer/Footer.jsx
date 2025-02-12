import React from 'react';
import { useIdioma } from "../../contexts/idioma-context";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  const { language } = useIdioma(); // Aquí obtenemos el idioma del contexto

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text" style={{ color: 'var(--verde-claro)' }}>
          {language === "es" ? "Desarrollado por" : "Developed by"}
        </p>
        <div>
          <h1>Alejandro Martín Rodríguez</h1>
        </div>
        <div className="footer-descripcion">
          <p>{language === "es" ? "Con React y Three.js como principales librerías." : "Using React and Three.js as main libraries."}</p>
        </div>

        {/* Redes Sociales */}
        <div className="footer-socials">
          <a href="https://github.com/alejandromartince" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/alejandromartinro" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/AleMR_10" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="mailto:alejandromartin.ro.ce@gmail.com">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
