import { useIdioma } from "../../contexts/idioma-context";
import Button from "../../components/Button";
import { useState, useRef, Suspense } from "react";
import { Link } from "react-scroll";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaLinux,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import { SiBlender } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import CV from "../../components/mostrar_cv";
import CanvasLoader from "../../components/CanvasLoader";
import Mundo from "../../components/Mundo";
import Portatil from "../../components/portatil";
import "./About.css";

const About = () => {
  const { language } = useIdioma();
  const [hasCopied, setHasCopied] = useState(false);
  const globeRef = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText("alejandromartin@alejandromartince.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const [isDragging, setIsDragging] = useState(false);

  return (
    <section className="about-container" id="about">
      <div className="grid-container">
        <div className="contact-card" id="grid-contacto">
          <Canvas
            shadows
            className="image-avatar"
            style={{ height: "40vh", cursor: isDragging ? "grabbing" : "grab" }}
            onPointerDown={() => setIsDragging(true)}
            onPointerUp={() => setIsDragging(false)}
            onPointerLeave={() => setIsDragging(false)} // Para evitar que quede trabado al salir del Canvas
          >
            <ambientLight intensity={2} />

            {/* 🔹 Luz direccional enfocando al portátil */}
            <directionalLight
              position={[6, 15, 30]}
              intensity={1.5}
              castShadow
              target-position={[0, -5, 5]}
            />

            <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={45} />

            <Suspense fallback={<CanvasLoader />}>
              <group scale={0.3}>
                <Portatil scale={.5} position={[0, -5, 5]} />
                <OrbitControls
                  enableRotate
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                />
              </group>
            </Suspense>
          </Canvas>
          <div className="text-container">
            <p className="grid-headtext">
              {language === "es"
                ? "Ingeniero Informático"
                : "Computer Engineer"}
            </p>
            <p className="grid-subtext">
              {language === "es"
                ? "Me considero una persona organizada, autodidacta y disciplinada con ganas de iniciar nuevos proyectos. "
                : "I consider myself an organized, self-taught and disciplined person with a desire to start new projects."}
            </p>
          </div>
        </div>
        <div className="developer-card" id="grid-desarrollador">
          <a
            href={
              language === "es" ? "../assets/CV_es.pdf" : "../assets/CV_en.pdf"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="cv"
          >
            <CV />
          </a>
          <div>
            <p className="grid-headtext">{language === "es" ? "CV" : "CV"}</p>
            <p className="grid-subtext">
              {language === "es" ? (
                <>
                  Haz click&nbsp;
                  <a
                    href="/assets/CV_es.pdf"
                    download="CV_es.pdf"
                    className="enlace_cv"
                  >
                    aquí
                  </a>
                  &nbsp;para descargar mi CV o haz click en la imagen para
                  verlo.
                </>
              ) : (
                <>
                  Click&nbsp;
                  <a
                    href="/assets/CV_en.pdf"
                    download="CV_en.pdf"
                    className="enlace_cv"
                  >
                    here
                  </a>
                  &nbsp;to download my CV or click on the image to view it.
                </>
              )}
            </p>
          </div>
        </div>
        <div className="globe-card" id="grid-mundo">
          <div className="globe-container">
            <Canvas>
              <ambientLight intensity={1.5} />

              {/* Aquí la cámara está fijada al centro inicial */}
              <PerspectiveCamera
                makeDefault
                position={[0, 0, 5]}
                fov={15} // Aumenta el campo de visión
              />

              <Suspense fallback={<CanvasLoader />}>
                <Mundo scale={2} />
                <OrbitControls
                  enableRotate
                  autoRotate
                  enablePan={false}
                  enableZoom={false}
                />
              </Suspense>
            </Canvas>
          </div>
          <div>
            <p className="grid-headtext">
              {language === "es"
                ? "Puedo trabajar en remoto"
                : "I can work remotely"}
            </p>
            <p className="grid-subtext">
              {language === "es"
                ? "Vivo en Málaga, España, pero puedo trabajar desde cualquier parte del mundo."
                : "I live in Malaga, Spain, but I can work from anywhere in the world."}
            </p>

            <Link
              to="contact" // El ID del destino
              spy={true}
              smooth={true}
              duration={650}
              offset={-70}
            >
              <Button
                name={
                  language === "es" ? "¡Conocer más!" : "Know more about me!"
                }
                containerClass="custom-class"
              />
            </Link>
          </div>
        </div>

        <div className="react-card" id="grid-tecnologias">
          <div className="titulo-tecnologia">
            <p className="grid-headtext">
              {language === "es"
                ? "Conocimientos y Habilidades"
                : "Knowledge and Skills"}
            </p>
            <p className="grid-subtext">
              {language === "es"
                ? "A pesar de contar con una experiencia profesional limitada, mi capacidad autodidacta, junto con mis estudios en Formación Profesional y Universidad, me permite manejar diversos campos de la informática, destacando especialmente los siguientes:"
                : "Despite having limited professional experience, my self-taught ability, combined with my studies in Vocational Training and University, allows me to tackle various fields of IT, with particular emphasis on the following:"}
            </p>
          </div>
          <div className="tecnologias">
            <div className="tecnologias-front">
              <div>
                <p className="grid-headtext">Front-end</p>
              </div>
              <FaReact
                style={{ color: "#61dafb" }}
                className="icono-tecnologia"
              />
              <SiThreedotjs className="icono-tecnologia" />
              <FaCss3Alt
                style={{ color: "rgb(32, 128, 255)" }}
                className="icono-tecnologia"
              />
              <FaHtml5 style={{ color: "red" }} className="icono-tecnologia" />
              <FaJs style={{ color: "yellow" }} className="icono-tecnologia" />
            </div>
            <div className="tecnologias-back">
              <div>
                <p className="grid-headtext">Back-end</p>
              </div>
              <SiMysql
                className="icono-tecnologia"
                style={{ color: "#0db7ed" }}
              />
              <FaPhp
                style={{ color: "rgb(113, 74, 145)" }}
                className="icono-tecnologia"
              />
            </div>
            <div className="otras-tecnologias">
              <div>
                <p className="grid-headtext">
                  {language === "es" ? "Conocimientos en" : "Knowledge of"}
                </p>
              </div>
              <FaLinux
                style={{ color: "black" }}
                className="icono-tecnologia"
              />
              <FaDocker
                style={{ color: "#0db7ed" }}
                className="icono-tecnologia"
              />
              <SiBlender style={{ color: "orange" }} />
              <FaGithub
                style={{ color: "black" }}
                className="icono-tecnologia"
              />
            </div>
          </div>
        </div>

        <div className="copy-card" id="grid-copiar">
          <img
            src="/assets/Extras/email.png"
            alt="Contact"
            className="image-small-image"
          />
          <div className="spaced-items">
            <p className="grid-headtext" style={{ paddingTop: "1rem" }}>
              Email
            </p>
            <div className="copy-box" onClick={handleCopy}>
              <img
                src={
                  hasCopied
                    ? "../assets/Extras/tick.svg"
                    : "../assets/Extras/copy.svg"
                }
                alt="copy"
              />
              <p className="copy-email">
                alejandromartin@alejandromartince.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
