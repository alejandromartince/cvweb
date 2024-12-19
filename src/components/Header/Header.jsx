import "./Header.css";
import { useState, useEffect } from "react";

function Header() {

  const [hamburguesa, setHamburguesa] = useState(false); //Inicializamos la variable hamburguesa en "false" y creamos la funcion "setHamburguesa"

  const cambioEstadoHamburguesa = () => { //Esto es lo mismo que poner "function cambioEstadoHamburguesa(){..}"

    setHamburguesa(!hamburguesa); //Usamos la funcion setHamburguesa para cambiar el valor de hamburguesa

  };



  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__nombre">Alejandro Martín</h1>
        <ul className="header__menu">
          <li className="header__item">
            <a href="#home" className="header__link">Home</a></li>
          <li className="header__item">
            <a href="#about" className="header__link">About</a></li>
          <li className="header__item">
            <a href="#projects" className="header__link">Projects</a></li>
          <li className="header__item">
            <a href="#contact" className="header__link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
