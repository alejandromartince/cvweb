import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader.jsx";
import Room from "./Room.jsx";
import Mando from "./Mando.jsx";
import {
  useCamaraRoomControls,
  useRoomControls,
  useLightControls,
  useMandoControls,
} from "../constants/levaControls.js";

const EscenaProyecto = ({ currentProject }) => {
  const {
    fov,
    near,
    CamaraPositionX,
    CamaraPositionY,
    CamaraPositionZ,
    Distance,
  } = useCamaraRoomControls();

  const {
    RoomPositionX,
    RoomPositionY,
    RoomPositionZ,
    RoomRotationX,
    RoomRotationY,
    RoomRotationZ,
    RoomScale,
  } = useRoomControls();
  const {
    MandoPositionX,
    MandoPositionY,
    MandoPositionZ,
    MandoRotationX,
    MandoRotationY,
    MandoRotationZ,
    MandoScale,
  } = useMandoControls();

  const { LightPosX, LightPosY, LightPosZ, LightIntensity } =
    useLightControls();

  const isMobile = window.innerWidth < 768; // Consideramos móvil si el ancho es menor a 768px

  return (
    <Canvas shadows style={{ borderRadius: ".5rem" }}>
      <ambientLight intensity={1} />
      <directionalLight
        position={[LightPosX, LightPosY, LightPosZ]}
        intensity={LightIntensity}
      />

      <PerspectiveCamera
        makeDefault
        fov={fov}
        near={near}
        position={[
          CamaraPositionX,
          CamaraPositionY,
          isMobile
            ? CamaraPositionZ - Distance + 2
            : CamaraPositionZ - Distance,
        ]} // Se aleja 3 unidades más en móviles
      />

      <Suspense fallback={<CanvasLoader />}>
        <group scale={2} position={[0, 0, 0]}>
          <Room
            position={[RoomPositionX, RoomPositionY, RoomPositionZ]}
            rotation={[RoomRotationX, RoomRotationY, RoomRotationZ]}
            scale={RoomScale}
            currentProject={currentProject}
          />
          <Mando
            position={[MandoPositionX, MandoPositionY, MandoPositionZ]}
            rotation={[MandoRotationX, MandoRotationY, MandoRotationZ]}
            scale={MandoScale}
            currentProject={currentProject} // Aquí pasas la textura del proyecto actual
          />
        </group>
      </Suspense>

      <OrbitControls
        makeDefault
        rotateSpeed={0.2}
        enableRotate={true}
        enableZoom={true}
        enablePan={false}
        target={[0, 0, 0]} // Asegúrate de que apunte al centro (0, 0, 0)
        minAzimuthAngle={-Math.PI / 2} // Límite de -90 grados (mirando a la izquierda)
        maxAzimuthAngle={Math.PI / 2} // Límite de +90 grados (mirando a la derecha)
        minPolarAngle={Math.PI / 4} // Límite inferior de inclinación (45°)
        maxPolarAngle={Math.PI / 2} // Límite superior de inclinación (135°)
        maxDistance={12} // Distancia máxima de la cámara (por ejemplo, 10 unidades)
      />
    </Canvas>
  );
};

export default EscenaProyecto;
