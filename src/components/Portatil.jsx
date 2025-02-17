import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const Portatil = (props) => {
  const { nodes, materials } = useGLTF('/models/laptop.glb')

  // Cargar la textura de la pantalla
  const screen = useTexture('/assets/Extras/screen.png')

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_2.geometry}
              material={materials.LaptopKeys}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_3.geometry}
              material={materials.LaptopBack}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_4.geometry}
              material={materials.LaptopFront}
            />
          </group>
          <group position={[0, 0.626, -12]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_5.geometry}
            >
              {/* Aplicar la textura en la pantalla */}
              <meshBasicMaterial map={screen} toneMapped={false} />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_6.geometry}
              material={materials.LaptopBack}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_7.geometry}
              material={materials.LaptopFront}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.LaptopKeys}
            position={[-3.419, 0.779, -0.907]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.LapTopMisc}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/laptop.glb')
export default Portatil
