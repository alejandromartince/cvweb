import React, { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useIdioma } from "../../contexts/idioma-context"; // Correcto
import { IoIosArrowDown } from "react-icons/io"; // Para el icono de cambio de idioma
import { navLinks } from "../../constants/index.js";
import { Link } from "react-scroll"; // Importamos Link
import "./Navbar.css";

const NavItems = ({ onClick, language }) => {
  return (
    <ul className="nav__list">
      {navLinks.map((item) => (
        <li key={item.id} className="nav__item">
          <Link
            to={item.href.replace("#", "")} // Elimina el "#" del href para usar el ID con react-scroll
            className="nav__link"
            smooth={true} // Desplazamiento suave
            duration={500} // Duración del scroll en milisegundos
            onClick={onClick}
            offset={-100}
          >
            {item.name[language]} {/* Accede dinámicamente según el idioma */}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const { language, cambiarIdioma } = useIdioma(); // Obtener idioma y la función para cambiarlo
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Language Switcher */}
        <div className="language-switcher" onClick={cambiarIdioma}>
          <p id="idioma">{language === "es" ? "ES" : "EN"}</p>
          <IoIosArrowDown className="hiswitchhorizontal" size={22} />
        </div>

        {/* Menu brand or logo */}
        <nav className="navbar__desktop">
          <NavItems language={language} /> {/* Pasamos `language` como prop */}
        </nav>

        <div className="navbar__toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoIosClose className="navbar__icon-cruz" aria-label="Close menu" />
          ) : (
            <IoIosMenu className="navbar__icon-burger" aria-label="Open menu" />
          )}
        </div>
      </div>

      <nav
        className={`navbar__mobile ${
          isMenuOpen ? "navbar__mobile--open" : ""
        }`}
      >
        <NavItems language={language} onClick={() => setIsMenuOpen(false)} />
      </nav>
    </header>
  );
};

export default Navbar;