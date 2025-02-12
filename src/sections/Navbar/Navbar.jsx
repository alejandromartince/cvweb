import React, { useState, useEffect, useRef } from "react";
import { IoIosMenu, IoIosClose, IoIosArrowDown } from "react-icons/io";
import { useIdioma } from "../../contexts/idioma-context";
import { navLinks } from "../../constants/index.js";
import { Link } from "react-scroll";
import "./Navbar.css";

const NavItems = ({ onClick, language }) => {
  return (
    <ul className="nav__list">
      {navLinks.map((item) => (
        <li key={item.id} className="nav__item">
          <Link
            to={item.href.replace("#", "")}
            className="nav__link"
            smooth={true}
            duration={500}
            onClick={onClick}
            offset={-100}
          >
            {item.name[language]}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const { language, cambiarIdioma } = useIdioma();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageChange = (newLanguage) => {
    cambiarIdioma(newLanguage);
    setIsLanguageMenuOpen(false);
  };

  const rutaImagen = {
    es: "../assets/Extras/España.png",
    en: "../assets/Extras/EN.png",
  };

  const Idioma = {
    es: "ES",
    en: "EN",
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target)
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Language Switcher */}
        <div
          className="language-switcher"
          onClick={toggleLanguageMenu}
          ref={languageMenuRef}
        >
          <div className="bandera">
            <img src={rutaImagen[language]}  alt="Idioma" className="img-bandera" /> 
            <span>&nbsp;&nbsp;{Idioma[language]}</span>
          </div>
          <IoIosArrowDown className="hiswitchhorizontal" size={22} />
          {isLanguageMenuOpen && (
            <div className="language-dropdown">
              <div
                className="language-option"
                onClick={() => handleLanguageChange("es")}
              >
                <img
                  src="../assets/Extras/España.png"
                  alt="idioma"
                  className="img-bandera"
                />
                ES
              </div>
              <div
                className="language-option"
                onClick={() => handleLanguageChange("en")}
              >
                <img
                  src="../assets/Extras/EN.png"
                  alt="idioma"
                  className="img-bandera"
                />
                EN
              </div>
            </div>
          )}
        </div>

        {/* Menu brand or logo */}
        <nav className="navbar__desktop">
          <NavItems language={language} />
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
        className={`navbar__mobile ${isMenuOpen ? "navbar__mobile--open" : ""}`}
      >
        <NavItems language={language} onClick={() => setIsMenuOpen(false)} />
      </nav>
    </header>
  );
};

export default Navbar;
