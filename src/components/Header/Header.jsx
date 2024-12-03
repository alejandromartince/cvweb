import { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la apertura del menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Cambiar el estado del menú
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__nombre">Alejandro Martín</h1>
        <div className="header__hamburguesa" onClick={toggleMenu}>
          <div className="iconohamburguesa"></div>
        </div>
        <ul className={`header__menu ${menuOpen ? 'header__menu--open' : ''}`}>
          <li className="header__item"><a href="#home" className="header__link">Home</a></li>
          <li className="header__item"><a href="#about" className="header__link">About</a></li>
          <li className="header__item"><a href="#projects" className="header__link">Projects</a></li>
          <li className="header__item"><a href="#contact" className="header__link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
