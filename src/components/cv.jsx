import React from 'react';
import { useGLTF } from '@react-three/drei';

const CV = (props) => {
  const { nodes, materials } = useGLTF('/models/CV.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano.geometry}
        material={materials['Material.001']}
        position={[-1.197, 2.134, 0.039]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.642, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano001.geometry}
        material={materials['Material.002']}
        position={[-1.197, 2.134, 0.03]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-0.645, -1, -1]}
      />
    </group>
  );
};

useGLTF.preload('/models/CV.glb');
export default CV;
