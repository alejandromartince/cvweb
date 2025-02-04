import React from 'react';
import { useIdioma } from "../../contexts/idioma-context";
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
      </div>
    </footer>
  );
};

export default Footer;
