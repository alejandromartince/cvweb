import React, { Suspense } from "react";
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
        <div style={{ width: "100%", height: "100%" }}>
          <Canvas shadows gl={{ outputColorSpace: THREE.SRGBColorSpace }}>
            <PerspectiveCamera
              makeDefault
              position={[CamaraPositionX, CamaraPositionY, CamaraPositionZ]}
              near={CamaraNear}
            />
            <ambientLight intensity={1} />
            {/* Luz direccional */}
            <directionalLight
              position={[LightPosX, LightPosY, LightPosZ]}
              intensity={LightIntensity}
              castShadow
              shadow-mapSize-width={2048} // Mejora la resolución horizontal
              shadow-mapSize-height={2048} // Mejora la resolución vertical
              shadow-camera-near={0.5} // Qué tan cerca empiezan las sombras
              shadow-camera-far={500} // Qué tan lejos llegan las sombras
              shadow-camera-left={-10} // Extiende el área de la izquierda
              shadow-camera-right={10} // Extiende el área de la derecha
              shadow-camera-top={10} // Extiende hacia arriba
              shadow-camera-bottom={-10} // Extiende hacia abajo
              shadow-bias={-0.001} // Evita artefactos de sombra
            />

            <rectAreaLight
              castShadow
              width={30} // Ancho del plano de luz
              height={30} // Alto del plano de luz
              intensity={SecondLightIntensity} // Intensidad de la luz
              position={[SecondLightPosX, SecondLightPosY, SecondLightPosZ]} // Posición del plano de luz
              rotation={[-Math.PI / 2, 0, 0]} // Orientación de la luz (por ejemplo, apuntando hacia abajo)
            />

            <Suspense fallback={<CanvasLoader />}>
              <group scale={2} position={[-3, -3.5, 0]}>
                <HomeCamara sensitivity={2}>
                  <CHome
                    rotation={[CHomeRotationX, CHomeRotationY, CHomeRotationZ]}
                    scale={CHomeScale}
                  />
                </HomeCamara>
              </group>
            </Suspense>
          </Canvas>
        </div>
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
