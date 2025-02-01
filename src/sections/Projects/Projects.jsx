import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import {
  FaArrowRightLong,
  FaArrowLeftLong,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import { useIdioma } from "../../contexts/idioma-context";
import { myProjects } from "../../constants";
import {
  useTableControls,
  useSpotLightControls,
} from "../../constants/levaControls";


import CanvasLoader from "../../components/CanvasLoader.jsx";
import Table from "../../components/Table.jsx";
import Television from "../../components/TV.jsx";

import "./Projects.css";
import Mando from "../../components/Mando.jsx";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0); // Index del proyecto seleccionado
  const { language } = useIdioma(); // Obtener idioma

  const projectCount = myProjects.length;
  const currentProject = myProjects[selectedProjectIndex];

  const spotLightControls = useSpotLightControls(); // ✅ Obtiene valores de Leva
  const tableControls = useTableControls();
  const {
    TableposX,
    TableposY,
    TableposZ,
    TablerotX,
    TablerotY,
    TablerotZ,
    Tablescale,
  } = useTableControls("Table Controls", tableControls);

  

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="projects-section" id="projects">
      <p className="projects-head-text">
        {language === "es" ? (
          <>
            Mis <span className="nombre-proyecto">Proyectos</span>
          </>
        ) : (
          <>
            My <span className="nombre-proyecto">Projects</span>
          </>
        )}
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image-wrapper">
            <img
              src={currentProject.spotlight}
              alt={currentProject.spotlight}
              className="project-image"
            />
          </div>

          <div className="project-logo-wrapper">
            <img src={currentProject.logo} className="project-logo" />
          </div>
          <div className="project-details">
            <p className="project-title">{currentProject.title[language]}</p>
            <p className="project-description">
              {currentProject.desc[language]}
            </p>
            <p className="project-subdescription">
              {currentProject.subdesc[language]}
            </p>
          </div>

          <div className="project-tags-wrapper">
            <div className="project-tags">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="imagen-tecnologia"
                  />
                </div>
              ))}
            </div>

            <a
              className="project-live-link"
              href={currentProject.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{language === "es" ? "Ver Sitio Web" : "Check Live Site"}</p>
              <FaArrowUpRightFromSquare color="var(--verde-claro)" />
            </a>
          </div>

          <div className="project-navigation">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <FaArrowLeftLong className="arrow-icon" />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <FaArrowRightLong className="arrow-icon" />
            </button>
          </div>
        </div>

        {/* 🎥 Sección con Canvas y modelos 3D */}
        <div className="projects-aside">
          <Canvas shadows>
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 5]} intensity={4} />

            <spotLight
              position={[
                spotLightControls.SpotPosX,
                spotLightControls.SpotPosY,
                spotLightControls.SpotPosZ,
              ]}
              intensity={spotLightControls.SpotIntensity}
              angle={spotLightControls.SpotAngle}
              penumbra={spotLightControls.SpotPenumbra}
              decay={spotLightControls.SpotDecay}
              castShadow
            />

            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={1.7} position={[0, 0, 0]} rotation={[0, 0, 0]}>
                  {/* <Television texture = {currentProject.texture}
                    position={[0, -2, -0.5]}
                    rotation={[0, -1.6, 0]}
                    scale={1}
                  /> */}
                </group>
              </Suspense>
            </Center>

            <Suspense fallback={<CanvasLoader />}>
              {/* <Table
                position={[TableposX, TableposY, TableposZ]}
                rotation={[TablerotX, TablerotY, TablerotZ]}
                scale={Tablescale}
              />{" "} */}

              {/* <Mando position={[3, -2.1, 2]} rotation={[0, 0, 0]} scale={0.6} texture={currentProject.texture}/> */}
            </Suspense>

            <OrbitControls
              maxPolarAngle={Math.PI / 2}
              maxDistance={6}
              enablePan={false} 
              enableZoom={false}
              enableRotate={true}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
