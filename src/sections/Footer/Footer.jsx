import React from 'react';
import './Footer.css';  // Asegúrate de tener el archivo CSS que te proporcioné

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text" style={{ color: 'var(--verde-claro)' }}>Sitio web desarrollado por</p>
        <div>
        <h1>Alejandro Martín Rodríguez</h1>
        </div>
        <div className="footer-descripcion">
          <p>Con React y Three.js como principales librerías con el objetivo de crear una experiencia interactiva y atractiva.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
