import React, { useEffect, useState } from "react";

import { CarouselProps, IProject, ProjectProps } from "../../utils/interfaces";

import Carousel from "../Carousel";

import { Container } from "./styles";

const Projects = ({ projects }: ProjectProps) => {
  const [project, setProject] = useState<ProjectProps>();

  useEffect(() => {
    setProject({ projects });
  }, [projects]);
  return (
    <Container>
      <h2>Last Project</h2>
      <Carousel>
        {projects.map((project) => (
          <div key={project.name}>
            <a href="">
              <p>{project.name}</p>
              <img src={project.image} alt="" />
            </a>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Projects;
