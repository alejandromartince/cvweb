import React, { useRef, useEffect } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'

const Television = (props) => {
  const { nodes, materials } = useGLTF('/models/tv.glb')
  const video = useVideoTexture(props.texture ? props.texture : '/textures/video.mp4')
  
  // Crear una referencia para el grupo que quieres animar
  const group = useRef()

  

  return (
    <group {...props} dispose={null}>
      <group ref={group} rotation={[-Math.PI / 2, 0, 0]} scale={29.586} position={[0, 0.8, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[2.05, 4.94, 0]} rotation={[3.13, 0, 0]} scale={[0.265, 7.46, 15.134]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curved_Monitor_MAT_Plastic_0.geometry}
              material={materials.MAT_Plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curved_Monitor_MAT_Screen_0.geometry}
              material={materials.MAT_Screen}
            > 
              <meshBasicMaterial map={video} toneMapped={false} />
            </mesh>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Peana_MAT_Plastic_0.geometry}
            material={materials.MAT_Plastic}
            position={[0.08, 0, 0]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/tv.glb')
export default Television
