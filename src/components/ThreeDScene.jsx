import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

// Componentes internos
import CanvasLoader from "../../src/components/CanvasLoader.jsx";
import MesaOficina from "../../src/components/MesaOficina.jsx";
import Suelo from "../../src/components/Suelo.jsx";
import Ordenador from "../../src/components/Ordenador.jsx";
import HomeCamara from "../../src/components/HomeCamara.jsx";
import Silla from "../../src/components/Silla.jsx";
import PS4 from "../../src/components/PS4.jsx";
import PS4Mando from "../../src/components/PS4Mando.jsx";
import MesaVinilo from "../../src/components/MesaVinilo.jsx";
import JuegosPS4 from "./JuegosPS4.jsx";
import PosterTote from "./PosterTote.jsx";
import PosterArcane from "./PosterArcane.jsx"


/* prettier-ignore-start */
// Hooks personalizados
import { useCameraControls, usePosterArcaneControls, useLuzControls, useMesaControls, useSueloControls, useOrdenadorControls, useGrupoControls, useSillaControls, usePS4Controls, usePS4MandoControls, useMesaViniloControls, useBalonControls, useJuegosPS4Controls, usePosterToteControls } from "../../src/constants/levaControls.js";
/* prettier-ignore-end */

// Hook para detectar si el dispositivo es móvil
import useIsMobile from "../../src/Hooks/isMobile.jsx";
import Balon from "./Balon.jsx";

const ThreeDScene = () => {

  /* prettier-ignore-start */
  // Usar controles desde levaControls.js  
  const { camX, camY, camZ, fov } = useCameraControls();
  const { luzX, luzY, luzZ, luzIntensidad } = useLuzControls();
  const { mesaX, mesaY, mesaZ, mesaRotX, mesaRotY, mesaRotZ, mesaScale } = useMesaControls();
  const { JuegosPS4X, JuegosPS4Y, JuegosPS4Z, JuegosPS4RotX, JuegosPS4RotY, JuegosPS4RotZ, JuegosPS4Scale } = useJuegosPS4Controls();
  const { BalonX, BalonY, BalonZ, BalonRotX, BalonRotY, BalonRotZ, BalonScale } = useBalonControls();
  const { sueloX, sueloY, sueloZ, sueloRotX, sueloRotY, sueloRotZ, sueloScale } = useSueloControls();
  const { posX, posY, posZ, rotX, rotY, rotZ, scale } = useOrdenadorControls();
  const { grupoX, grupoY, grupoZ, grupoRotX, grupoRotY, grupoRotZ, grupoScale } = useGrupoControls();
  const { sillaX, sillaY, sillaZ, sillaRotX, sillaRotY, sillaRotZ, sillaScale } = useSillaControls();
  const { ps4X, ps4Y, ps4Z, ps4RotX, ps4RotY, ps4RotZ, ps4Scale } = usePS4Controls();
  const { ps4MandoX, ps4MandoY, ps4MandoZ, ps4MandoRotX, ps4MandoRotY, ps4MandoRotZ, ps4MandoScale } = usePS4MandoControls();
  const { MesaViniloX, MesaViniloY, MesaViniloZ, MesaViniloRotX, MesaViniloRotY, MesaViniloRotZ, MesaViniloScale } = useMesaViniloControls();
  const { PosterToteX, PosterToteY, PosterToteZ, PosterToteRotX, PosterToteRotY, PosterToteRotZ, PosterToteScale } = usePosterToteControls();
  const { PosterArcaneX, PosterArcaneY, PosterArcaneZ, PosterArcaneRotX, PosterArcaneRotY, PosterArcaneRotZ, PosterArcaneScale } = usePosterArcaneControls();
  /* prettier-ignore-end */


  const isMobile = useIsMobile();

  return (
    <Canvas className="canvas">
      <Suspense fallback={<CanvasLoader />}>
        {/* Cámara con perspectiva */}
        <PerspectiveCamera
          makeDefault
          position={[camX, camY, camZ]}
          fov={fov}
        />

        {/* Luz ambiental */}
        <ambientLight intensity={luzIntensidad} position={[luzX, luzY, luzZ]} />

        {/* Luz direccional */}
        <directionalLight
          position={[luzX, luzY, luzZ]}
          intensity={luzIntensidad}
        />

        {/* Controles de órbita */}
        {!isMobile && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        )}
        <HomeCamara>
        <group
          position={isMobile ? [grupoX, -10, grupoZ] : [grupoX, grupoY, grupoZ]}
          rotation={
            isMobile
              ? [grupoRotY, grupoRotX, grupoRotZ]
              : [grupoRotY, grupoRotX, grupoRotZ]
          }
          scale={isMobile ? 1 : grupoScale}
        >
          <MesaOficina
            position={[mesaX, mesaY, mesaZ]}
            rotation={[mesaRotY, mesaRotX, mesaRotZ]}
            scale={mesaScale}
          />

          <Suelo
            position={[sueloX, sueloY, sueloZ]}
            scale={sueloScale}
            rotation={[sueloRotY, sueloRotX, sueloRotZ]}
          />

          <Silla
            position={[sillaX, sillaY, sillaZ]}
            rotation={[sillaRotY, sillaRotX, sillaRotZ]}
            scale={sillaScale}
          />

          <Ordenador
            position={[posX, posY, posZ]}
            rotation={[rotY, rotX, rotZ]}
            scale={scale}
          />

          <MesaVinilo
            position={[MesaViniloX, MesaViniloY, MesaViniloZ]}
            rotation={[MesaViniloRotY, MesaViniloRotX, MesaViniloRotZ]}
            scale={MesaViniloScale}
          />

          <PS4
            position={[ps4X, ps4Y, ps4Z]}
            rotation={[ps4RotY, ps4RotX, ps4RotZ]}
            scale={ps4Scale}
          />

          <JuegosPS4
            position={[JuegosPS4X, JuegosPS4Y, JuegosPS4Z]}
            rotation={[JuegosPS4RotX, JuegosPS4RotY, JuegosPS4RotZ]}
            scale={JuegosPS4Scale}
          />

          <PS4Mando
            position={[ps4MandoX, ps4MandoY, ps4MandoZ]}
            rotation={[ps4MandoRotY, ps4MandoRotX, ps4MandoRotZ]}
            scale={ps4MandoScale}
          />

          <Balon
            position={[BalonX, BalonY, BalonZ]}
            rotation={[BalonRotX, BalonRotY, BalonRotZ]}
            scale={BalonScale}
          />

          <PosterTote
            position={[PosterToteX, PosterToteY, PosterToteZ]}
            rotation={[PosterToteRotX, PosterToteRotY, PosterToteRotZ]}
            scale={PosterToteScale}
          />

          <PosterArcane 
            position={[PosterArcaneX, PosterArcaneY, PosterArcaneZ]} 
            rotation={[PosterArcaneRotX, PosterArcaneRotY, PosterArcaneRotZ]} 
            scale={PosterArcaneScale}
          />

        </group>
        </HomeCamara>
      </Suspense>
    </Canvas>
  );
};

export default ThreeDScene;

