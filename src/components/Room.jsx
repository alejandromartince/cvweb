import React from "react";
import { useGLTF, useVideoTexture, useTexture } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

const Room = ({ currentProject, ...props }) => {
  const { nodes, materials } = useGLTF("/models/Room.glb");
  const group = useRef();

  const textura = useVideoTexture(currentProject);

  useEffect(() => {
    if (textura) {
      // Se asegura de modificar la textura solo cuando haya cambiado
      textura.rotation = Math.PI / 2; // Rotate the texture by 90 degrees
      textura.wrapS = THREE.MirroredRepeatWrapping; // Flip the texture horizontally
      textura.repeat.x = -1; // Reverse the horizontal direction
    }
  }, [textura]); // Solo se ejecuta cuando 'textura' cambia

  const pared = useTexture("/textures/green-wall.jpg");

  textura.center.set(0.5, 0.5);

  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.44, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.54, 1, 1]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-1.781, 0.301, 0.865]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[1, 0.891, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_85.geometry}
              material={materials.Book_Cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_86.geometry}
              material={materials.Book_Pages}
            />
          </group>
          <group
            position={[1.691, 0.789, -2.006]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_113.geometry}
              material={materials.Plug}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_114.geometry}
              material={materials.Rubber}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_115.geometry}
              material={materials.String_Lights}
            />
          </group>
          <group position={[1.705, 0.548, 1.667]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_110.geometry}
              material={materials.Chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_111.geometry}
              material={materials.Lamp}
            />
          </group>
          <group position={[0.726, 0.026, 0.05]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_33.geometry}
              material={materials.Rug_Border}
              position={[-0.945, 0, 0]}
            />
          </group>
          <group position={[0.726, 0.026, 0.05]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_35.geometry}
              material={materials.material}
              position={[-0.945, 0, 0]}
            />
          </group>
          <group position={[0, 2.174, 0.03]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_55.geometry}
              material={materials.Moulding}
              position={[0.004, 0.187, 0]}
              rotation={[1.568, -1.565, -1.568]}
            />
          </group>
          <group
            position={[1.691, 0.789, -2.006]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_75.geometry}
              material={materials.White_Finish_Shiny}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_76.geometry}
              material={materials.Rubber}
            />
          </group>
          <group
            position={[-1.462, 0.394, -2.006]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_78.geometry}
              material={materials.White_Finish_Shiny}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_79.geometry}
              material={materials.Rubber}
            />
          </group>
          <group position={[-1.814, 0.288, 0.05]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.White_Finish_Shiny}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_23.geometry}
              material={materials.Purple_Finish_Shiny}
            />
          </group>
          <group
            position={[-1.998, 0.805, -0.717]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials.Rubber}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.Black_Finish_Shiny}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials["Material.001"]}
            >
              <meshBasicMaterial map={textura} toneMapped={false} />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.Emission_Red}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.Emission_Green}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_90.geometry}
            material={materials.Cable}
            position={[2.15, -0.063, 2.041]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_71.geometry}
            material={materials.Black_Finish_Shiny}
            position={[-0.471, 1.97, -1.958]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_69.geometry}
            material={materials.Black_Finish_Shiny}
            position={[-0.471, 1.97, -1.958]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_73.geometry}
            material={materials.Curtains}
            position={[-0.471, 1.97, -1.958]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_53.geometry}
            material={materials.Moulding}
            position={[0, 0, 0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_98.geometry}
            material={materials.material_21}
            position={[-1.624, 0.025, 1.752]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_104.geometry}
            material={materials.material_21}
            position={[0.688, 1.33, -1.897]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={0.249}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_92.geometry}
            material={materials.material_21}
            position={[-1.624, 0.025, -1.621]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_100.geometry}
            material={materials.Dirt}
            position={[-1.624, 0.244, 1.752]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={0.144}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_106.geometry}
            material={materials.Dirt}
            position={[0.688, 1.384, -1.897]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={0.036}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_94.geometry}
            material={materials.Dirt}
            position={[-1.624, 0.244, -1.621]}
            scale={0.144}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_96.geometry}
            material={materials.Plant}
            position={[-1.615, 0.171, -1.616]}
            rotation={[Math.PI / 2, 0, -1.484]}
            scale={[0.031, 0.632, 0.703]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_102.geometry}
            material={materials.Plant}
            position={[-1.617, 0.17, 1.777]}
            rotation={[1.616, -0.002, 0.502]}
            scale={[0.024, 0.477, 0.477]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_108.geometry}
            material={materials.Plant}
            position={[0.688, 1.366, -1.895]}
            rotation={[1.628, 0, -0.178]}
            scale={[0.009, 0.175, 0.175]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Floor}
            position={[0.23, 2.347, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials.Drywall}
            position={[-0.002, -0.001, 0.002]}
          >
            <meshStandardMaterial
              color={0x333333}
              roughness={1}
              toneMapped={false}
            />{" "}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.Wood_Light}
            position={[0, 0, 0.1]}
            rotation={[0, 1.571, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_45.geometry}
            material={materials.Wood_Dark}
            position={[0.127, 0, -3.338]}
            scale={0.306}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_37.geometry}
            material={materials.Wood_Dark}
            position={[0.127, 0, 0]}
            scale={0.306}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_47.geometry}
            material={materials.Wood_Dark}
            position={[1.636, 0.505, -1.618]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_39.geometry}
            material={materials.Wood_Dark}
            position={[1.636, 0.505, 1.72]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_49.geometry}
            material={materials.Wood_Dark}
            position={[1.636, 0.505, -1.618]}
            rotation={[Math.PI, -Math.PI / 3, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_41.geometry}
            material={materials.Wood_Dark}
            position={[1.636, 0.505, 1.72]}
            rotation={[Math.PI, -Math.PI / 3, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_51.geometry}
            material={materials.Wood_Dark}
            position={[1.636, 0.505, -1.618]}
            rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_43.geometry}
            material={materials.Wood_Dark}
            position={[1.636, 0.505, 1.72]}
            rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_65.geometry}
            material={materials.Black_Finish_Rough}
            position={[-0.471, 1.424, -2.113]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_67.geometry}
            material={materials.Glass}
            position={[-0.471, 1.424, -2.113]}
            rotation={[0, 0, Math.PI]}
            scale={[1, 1, 0.2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_59.geometry}
            material={materials.Black_Finish_Rough}
            position={[0, 0, -0.022]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_61.geometry}
            material={materials.Black_Finish_Rough}
            position={[-0.471, 1.249, -2.153]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_63.geometry}
            material={materials.Glass}
            position={[-0.471, 1.249, -2.153]}
            scale={[1, 1, 0.2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_57.geometry}
            material={materials.Wood_Dark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_83.geometry}
            material={materials.White_Finish_Shiny}
            position={[1.029, 1.315, -1.898]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_81.geometry}
            material={materials.White_Finish_Shiny}
            position={[1.029, 1.315, -1.898]}
          />
        </group>
      </group>
      <group
        position={[-0.44, 0, 0]}
        rotation={[-1.581, -0.49, -1.612]}
        scale={[1.001, 1.437, 1.142]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, -0.007, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CoffeeTable_CoffeeTable_mat_0.geometry}
              material={materials.CoffeeTable_mat}
              position={[-0.65, 0.689, 0.977]}
              rotation={[-0.604, -0.002, 0.012]}
            />
          </group>
        </group>
      </group>
      <group
        position={[-0.44, 0, 2.182]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.54, 1, 1]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.002, -0.001, 0.002]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14001.geometry}
              material={materials["Drywall.001"]}
              position={[0, 2.235, -2.145]}
              rotation={[1.568, -1.565, -1.568]}
            >
              <meshStandardMaterial
                color={0x333333}
                roughness={1}
                toneMapped={false}
              />
            </mesh>
          </group>
        </group>
      </group>
      <group
        position={[-0.44, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.54, 1, 1]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_55001.geometry}
            material={materials["Moulding.001"]}
            position={[0, 2.174, 0.03]}
          />
        </group>
      </group>
      <group
        position={[-0.44, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.54, 1, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4001.geometry}
          material={materials["Floor.001"]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/Room.glb");
export default Room;
