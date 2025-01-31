import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import CV from "./cv";
import CanvasLoader from "./CanvasLoader";
import { useCVControls, useCameraCVControls } from "../constants/levaControls";
import "../sections/About/About.css";

const MostrarCV = () => {
  // 📌 Ref para el grupo del CV
  const cvRef = useRef();

  // 📌 Controles de CV (posición, escala, rotación inicial)
  const { cvX, cvY, cvZ, cvScale, cvRotX, cvRotY, cvRotZ } = useCVControls();

  // 📌 Controles de Cámara (posición, FOV)
  const { camX, camY, camZ, fov } = useCameraCVControls();

  // 📌 Animaciones al pasar el ratón sobre el Canvas
  const handleMouseEnter = () => {
    if (cvRef.current) {
      gsap.to(cvRef.current.rotation, {
        y: Math.PI, // Gira 180 grados
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (cvRef.current) {
      gsap.to(cvRef.current.rotation, {
        y: 0, // Vuelve a la posición inicial
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="cv-container">
      <Canvas
        className="cv-canvas"
        shadows
        style={{ width: "100%", height: "19rem" }}
        onMouseEnter={handleMouseEnter} // 🖱️ Evento en el canvas
        onMouseLeave={handleMouseLeave} // 🖱️ Evento en el canvas
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* 📌 Cámara dinámica con controles de Leva */}
          <PerspectiveCamera makeDefault position={[camX, camY, camZ]} fov={fov} />

          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

          {/* 📌 CV con controles dinámicos y referencia para la animación */}
          <group ref={cvRef}>
            <CV position={[cvX, cvY, cvZ]} scale={cvScale} rotation={[cvRotX, cvRotY, cvRotZ]} />
          </group>

          {/* 📌 OrbitControls sin rotación manual */}
          <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MostrarCV;
