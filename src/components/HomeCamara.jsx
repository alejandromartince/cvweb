import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import useIsMobile from "../Hooks/isMobile";

const HomeCamara = ({ children, isMobile, sensitivity = 5 }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Mueve la posición de la cámara suavemente
    easing.damp3(state.camera.position, [1, 0, 50], 0.25, delta);

    // Si no es móvil, rota el grupo en función del puntero con sensibilidad ajustable
    if (!isMobile && groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / (sensitivity*3), state.pointer.x / sensitivity, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={groupRef} scale={isMobile ? 0.6 : 1} position={isMobile ? [0.1, 6, 0] : [0, 0, 0]}>{children}</group>;
};

export default HomeCamara;
