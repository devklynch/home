import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const Project = ({ heading, projects }) => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              img={project.img}
              backendrepo={project.backendrepo}
              frontendrepo={project.frontendrepo}
              deployedsite={project.deployedsite}
            />
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
