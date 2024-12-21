import "./Header.css";
import { useState, useEffect } from "react";

function Header() {
  const [pantallaMenor, actualizarEPantalla] = useState(window.innerWidth < 769); //Guarda en pantallaMenor el valor true o false si esta es mayor o menos de 769px
  const [estadoHamburguesa, cambiarEHamburguesa] = useState(false); //Guarda en estadoHamburguesa false y cambiarEHamburguesa cambiar el valor de esta.

  useEffect(function () {
    // Función para verificar si el ancho de la ventana es menor a 769px
    function manejoTPantalla() {
      const esPantallaPequeña = window.innerWidth < 769;
      actualizarEPantalla(esPantallaPequeña); // La funcion sobre esPantallaPequeña actualiza el estado de pantallaMenor
    }

    // Agregar el listener para el evento 'resize'
    window.addEventListener("resize", manejoTPantalla);

    // Función de limpieza para eliminar el listener cuando el componente se desmonte
    return function () {
      window.removeEventListener("resize", manejoTPantalla);
    };
  }, []); // El array vacío [] asegura que este efecto solo se ejecute al montar/desmontar el componente

  // Función para manejar el clic en el icono de hamburguesa
  function toggleHamburguesa() {
    cambiarEHamburguesa(!estadoHamburguesa); // Alternar el estado de la hamburguesa
  }

  // Variables condicionales para el menú y la hamburguesa
  const mostrarHamburguesa = pantallaMenor; // Muestra la hamburguesa en pantallas pequeñas y si el menú no se muestra
  const mostrarMenu = estadoHamburguesa || !pantallaMenor; // Muestra el menú si la hamburguesa está abierta o en pantallas grandes

  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__nombre">Alejandro Martín</h1>
        {mostrarHamburguesa && (
          <div className="iconohamburguesa" onClick={toggleHamburguesa}>
            <span class="material-symbols-outlined">menu</span>
          </div>
        )}

        {mostrarMenu && (
          <ul className="header__menu">
            <li className="header__item">
              <a href="#home" className="header__link">
                Home
              </a>
            </li>
            <li className="header__item">
              <a href="#about" className="header__link">
                About
              </a>
            </li>
            <li className="header__item">
              <a href="#projects" className="header__link">
                Projects
              </a>
            </li>
            <li className="header__item">
              <a href="#contact" className="header__link">
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
