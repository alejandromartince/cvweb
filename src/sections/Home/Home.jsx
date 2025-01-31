import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

// Contextos y datos
import { useIdioma } from "../../contexts/idioma-context";
import { homeData } from "../../constants/index.js";

// Componentes internos
import Button from "../../components/Button.jsx";
import ThreeDScene from "../../components/ThreeDScene.jsx"; // Importar el nuevo archivo que contiene el Canvas

// Estilos
import "./Home.css";

const Home = () => {
  const { language } = useIdioma();
  const { saludo, roles } = homeData[language];

  return (
    <section className="home-section" id="home">
      <div className="espacio-objetos">
        <h1 className="bienvenida">
          {saludo} <span className="minombre">Alejandro Martin</span>
          <span className="waving-emoji">👋</span>
        </h1>

        <p className="typewriter-effect">
          <Typewriter
            words={roles}
            loop={true}
            cursor
            cursorStyle={<span className="typewriter-cursor">|</span>}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorBlinkSpeed={1000} // Ajustar la velocidad del parpadeo del cursor
          />
        </p>

        {/* Componente que contiene el Canvas */}
        <ThreeDScene />
      </div>

      <div>
        <Link
          to="about" // El ID del destino
          spy={true}
          smooth={true}
          duration={650}
          offset={-50}
        >
          <Button
          name={language === "es" ? "¡Conocer más!" : "Know more about me!"}
          containerClass="custom-class"
        />
        </Link>
      </div>
    </section>
  );
};

export default Home;
