import { useControls } from "leva";

export const useNombreControls = () => ({
  NombreX: 0,
  NombreY: 0,
  NombreZ: 0,
  NombreRotX: 0,
  NombreRotY: 0,
  NombreRotZ: 0,
  NombreScale: 1,
});

/* Controles para la cámara */
export const useCameraControls = () => ({
  camX: -37,
  camY: 34,
  camZ: 50,
  fov: 45,
});

/* Controles para la luz */
export const useLuzControls = () => ({
  luzX: -62.3,
  luzY: 38.5,
  luzZ: 120.6,
  luzIntensidad: 1.6,
});

/* Controles para la mesa */
export const useMesaControls = () => ({
  mesaX: -7.8,
  mesaY: 3.8,
  mesaZ: 15.0,
  mesaRotX: -3.01,
  mesaRotY: 0,
  mesaRotZ: 0,
  mesaScale: 6.6,
});

/* Controles para el suelo */
export const useSueloControls = () => ({
  sueloX: -9.3,
  sueloY: 3.7,
  sueloZ: 11.6,
  sueloRotX: 1.7,
  sueloRotY: 0,
  sueloRotZ: 0,
  sueloScale: 0.1,
});

/* Controles para el ordenador */
export const useOrdenadorControls = () => ({
  posX: -3.8,
  posY: 11.6,
  posZ: 5.4,
  rotX: -0.65,
  rotY: 0,
  rotZ: 0,
  scale: 0.1,
});

/* Controles para el grupo global */
export const useGrupoControls = () => ({
  grupoX: 0,
  grupoY: -0.4,
  grupoZ: 0,
  grupoRotX: 0.65,
  grupoRotY: 0.35,
  grupoRotZ: 0,
  grupoScale: 0.7,
});

/* Controles para la silla */
export const useSillaControls = () => ({
  sillaX: -8.9,
  sillaY: 3.8,
  sillaZ: 14.1,
  sillaRotX: -0.58,
  sillaRotY: 0,
  sillaRotZ: 0,
  sillaScale: 10.5,
});

/* Controles para PS4 */
export const usePS4Controls = () => ({
  ps4X: 0.7,
  ps4Y: 11.6,
  ps4Z: 20.0,
  ps4RotX: -1.47,
  ps4RotY: 0,
  ps4RotZ: 0,
  ps4Scale: 0.29,
});

/* Controles para el mando PS4 */
export const usePS4MandoControls = () => ({
  ps4MandoX: 6.2,
  ps4MandoY: 11.8,
  ps4MandoZ: 9.1,
  ps4MandoRotX: 0.16,
  ps4MandoRotY: -1.55,
  ps4MandoRotZ: -1.59,
  ps4MandoScale: 0.15,
});

/* Controles para mesa de vinilo */
export const useMesaViniloControls = () => ({
  MesaViniloX: -20.3,
  MesaViniloY: 18.4,
  MesaViniloZ: 5.0,
  MesaViniloRotX: 0.12,
  MesaViniloRotY: 0.0,
  MesaViniloRotZ: 0,
  MesaViniloScale: 0.02,
});

/* Controles para balón */
export const useBalonControls = () => ({
  BalonX: -31.9,
  BalonY: 4.0,
  BalonZ: 1.8,
  BalonRotX: 0,
  BalonRotY: 0,
  BalonRotZ: 0,
  BalonScale: 1.4,
});

/* Controles para juegos PS4 */
export const useJuegosPS4Controls = () => ({
  JuegosPS4X: 1.8,
  JuegosPS4Y: 11.6,
  JuegosPS4Z: 16.0,
  JuegosPS4RotX: 0,
  JuegosPS4RotY: -1.53,
  JuegosPS4RotZ: 0,
  JuegosPS4Scale: 8.2,
});

/* Controles para PosterTote */
export const usePosterToteControls = () => ({
  PosterToteX: -11.0,
  PosterToteY: 19.6,
  PosterToteZ: -0.6,
  PosterToteRotX: 0,
  PosterToteRotY: 0.12,
  PosterToteRotZ: -3.14,
  PosterToteScale: 0.05,
});

/* Controles para PosterArcane */
export const usePosterArcaneControls = () => ({
  PosterArcaneX: 3.5,
  PosterArcaneY: 19.6,
  PosterArcaneZ: 10.2,
  PosterArcaneRotX: 0,
  PosterArcaneRotY: -1.46,
  PosterArcaneRotZ: -3.14,
  PosterArcaneScale: 0.05,
});

/* Controles para el CV */

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

export const useTableControls = () => ({
  TableposX: 3.4,
  TableposY: -4.0,
  TableposZ: 0,
  TablerotX: 0,
  TablerotY: 3.1,
  TablerotZ: 0,
  Tablescale: 3.7,
});

export const useSpotLightControls = () => ({
  SpotPosX: -0.2,
  SpotPosY: 0.0,
  SpotPosZ: -20.0,
  SpotIntensity: 4.5,
  SpotAngle: 0.8,
  SpotPenumbra: 1.0,
  SpotDecay: 0.0,
});
