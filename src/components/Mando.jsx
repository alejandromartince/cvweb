import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

const Mando = ({ currentProject, ...props }) => {
  const { nodes, materials } = useGLTF('/models/samsung_tv_remote_control.glb');
  const mandoRef = useRef();

  useEffect(() => {
    if (currentProject && mandoRef.current) {
      const tl = gsap.timeline();

      // Subir el mando
      tl.to(mandoRef.current.position, {
        y: mandoRef.current.position.y + 0.6,
        duration: 0.4,
        ease: 'power1.out',
      });

      // Regresar a la posición exacta X=1.55, Y=-0.8, Z=2.55
      tl.to(mandoRef.current.position, {
        x: 1.55,
        y: -0.8,
        z: 2.55,
        duration: 0.4,
        ease: 'power1.in',
      });
    }
  }, [currentProject]); // Solo se ejecuta cuando currentProject cambia

  return (
    <group ref={mandoRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.002}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_TVRemote_0.geometry}
              material={materials.TVRemote}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Buttons_TVRemote_0.geometry}
              material={materials.TVRemote}
              position={[0, -0.4, 0]}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/samsung_tv_remote_control.glb');
export default Mando;
