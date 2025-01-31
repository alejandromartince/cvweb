import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'

const Mando = (props) => {
  const { nodes, materials } = useGLTF('/models/samsung_tv_remote_control.glb')
  const mandoRef = useRef()

  useEffect(() => {
    if (props.texture) {
      gsap.fromTo(mandoRef.current.position, 
        { y: -2.1 }, 
        { y: -1.5, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.inOut" }
      )
    }
  }, [props.texture])

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
  )
}

useGLTF.preload('/models/samsung_tv_remote_control.glb')
export default Mando
