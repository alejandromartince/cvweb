import React, { useState } from "react";
import {
  FaArrowRightLong,
  FaArrowLeftLong,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import { useIdioma } from "../../contexts/idioma-context";
import { myProjects } from "../../constants/index.js";

import EscenaProyecto from "../../components/EscenaProyecto.jsx";
import "./Projects.css";


const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const { language } = useIdioma();

  const projectCount = myProjects.length;
  const currentProject = myProjects[selectedProjectIndex];

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
              <p>{language === "es" ? "Ver Sitio Web" : "View Web Site"}</p>
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

        <div className="projects-aside">
          <EscenaProyecto currentProject={currentProject.texture} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
