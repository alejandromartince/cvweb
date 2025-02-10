import React, { Suspense, useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// Contextos y datos
import { useIdioma } from "../../contexts/idioma-context";
import { homeData } from "../../constants/index.js";

// Componentes internos
import {
  useCHomeControls,
  useCameraCHomeControls,
  useLuzControls,
} from "../../constants/levaControls.js";
import CanvasLoader from "../../components/CanvasLoader.jsx";
import CHome from "../../components/CHome.jsx";
import Button from "../../components/Button.jsx";

// Estilos
import "./Home.css";
import HomeCamara from "../../components/HomeCamara.jsx";

const Home = () => {
  const { language } = useIdioma();
  const { saludo, roles } = homeData[language];

  const { CamaraPositionX, CamaraPositionY, CamaraPositionZ, CamaraNear } =
    useCameraCHomeControls();
  const { CHomeRotationX, CHomeRotationY, CHomeRotationZ, CHomeScale } =
    useCHomeControls();
  const {
    LightPosX,
    LightPosY,
    LightPosZ,
    LightIntensity,
    SecondLightPosX,
    SecondLightPosY,
    SecondLightPosZ,
    SecondLightIntensity,
  } = useLuzControls();

  // Estado para detectar si es móvil o tablet
  const [esMovil, setEsMovil] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const manejarResize = () => {
      setEsMovil(window.innerWidth <= 768);
    };

    window.addEventListener("resize", manejarResize);
    return () => window.removeEventListener("resize", manejarResize);
  }, []);

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
            cursorBlinkSpeed={1000}
          />
        </p>

        {/* Componente que contiene el Canvas */}
        <div style={{ width: "100%", height: "100%" }}>
          <Canvas shadows>
            <PerspectiveCamera
              makeDefault
              position={[
                esMovil ? CamaraPositionX * 0.5 : CamaraPositionX,
                esMovil ? CamaraPositionY * 0.5 : CamaraPositionY,
                esMovil ? CamaraPositionZ * 0.5 : CamaraPositionZ,
              ]}
              near={CamaraNear}
            />
            <ambientLight intensity={1} />
            <directionalLight
              position={[LightPosX, LightPosY, LightPosZ]}
              intensity={LightIntensity}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-near={0.5}
              shadow-camera-far={500}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
              shadow-bias={-0.001}
            />

            <rectAreaLight
              width={30}
              height={30}
              intensity={SecondLightIntensity}
              position={[SecondLightPosX, SecondLightPosY, SecondLightPosZ]}
              rotation={[-Math.PI / 2, 0, 0]}
            />

            <Suspense fallback={<CanvasLoader />}>
              <group scale={esMovil ? 1.5 : 2} position={esMovil ? [-1.5, -1.5, 0] : [-3, -3.5, 0]}>
                <HomeCamara sensitivity={esMovil ? 1 : 2}>
                  <CHome
                    rotation={[CHomeRotationX, CHomeRotationY, CHomeRotationZ]}
                    scale={esMovil ? CHomeScale * 0.8 : CHomeScale}
                  />
                </HomeCamara>
              </group>
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div>
        <Link to="about" spy={true} smooth={true} duration={650} offset={-50}>
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
