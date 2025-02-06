import { useControls } from "leva";

/* ====================================
    Controles GENERALES
==================================== */
export const useNombreControls = () => {
  return useControls("Nombre", {
    NombrePosX: { value: -1.10, step: 0.05, min: -10, max: 10 },
    NombrePosY: { value: -0.15, step: 0.05, min: -10, max: 10 },
    NombrePosZ: { value: 1.05, step: 0.05, min: -10, max: 10 },
    NombreIntensity: { value: 3.4, step: 0.1, min: 0, max: 10 },

    // Para la luz en are
    SecondNombrePosX: { value: 2.00, step: 0.05, min: -10, max: 10 },
    SecondNombrePosY: { value: 20.10, step: 0.05, min: -10, max: 50 },
    SecondNombrePosZ: { value: 7.40, step: 0.05, min: -10, max: 10 },
    SecondNombreIntensity: { value: 3.7, step: 0.1, min: 0, max: 10 },
  });
};
/* ====================================
    Controles para el HOME
==================================== */
export const useCHomeControls = () => ({
  CHomeRotationX: 0.2,
  CHomeRotationY: -0.8,
  CHomeRotationZ: 0,
  CHomeScale: 5,
});

export const useCameraCHomeControls = () => ({
  CamaraPositionX: 0,
  CamaraPositionY: 0,
  CamaraPositionZ: 5,
  CamaraFOV: 45,
});

export const useLuzControls = () => ({
  LightPosX: -1.10,
  LightPosY: -0.15,
  LightPosZ: 1.05,
  LightIntensity: 3.4,

  // Para la luz en are
  SecondLightPosX: 2.00,
  SecondLightPosY: 21.10,
  SecondLightPosZ: 7.40,
  SecondLightIntensity: 3,
});



/* ====================================
    Controles para el CV
==================================== */

export const useCVControls = () => ({
  cvX: 1.5,
  cvY: -2.9,
  cvZ: -0.07,
  cvScale: 1.3,
  cvRotX: 0,
  cvRotY: 0.0,
  cvRotZ: 0,
});

export const useCameraCVControls = () => ({
  camX: 0.0,
  camY: 0.0,
  camZ: 10.0,
  fov: 18,
});

/* ====================================
    Controles para la sala de proyectos 
==================================== */
export const useCamaraRoomControls = () => ({
  fov: 49,
  near: 0.1,
  CamaraPositionX: 1,
  CamaraPositionY: 0,
  CamaraPositionZ: 20.0,
  Distance: 10,
});

export const useRoomControls = () => ({
  RoomPositionX: 0.9,
  RoomPositionY: -2.8,
  RoomPositionZ: 7.85,
  RoomRotationX: 0,
  RoomRotationY: -1.45,
  RoomRotationZ: 0,
  RoomScale: 3.1,
});

export const useLightControls = () => ({
  LightPosX: -0.5,
  LightPosY: 4.6,
  LightPosZ: -6.6,
  LightIntensity: 1.2,
});

export const useMandoControls = () => ({
  MandoPositionX: 1.55,
  MandoPositionY: -0.8,
  MandoPositionZ: 2.55,
  MandoRotationX: 0,
  MandoRotationY: 0.2,
  MandoRotationZ: 0,
  MandoScale: 0.6,
});
