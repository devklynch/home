import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

// const dummyProject = {
//   name: null,
//   description: null,
//   svn_url: null,
//   stargazers_count: null,
//   languages_url: null,
//   pushed_at: null,
// };
// const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, projects }) => {
  // const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  // const specficReposAPI = `${API}/repos/${username}`;
  // const dummyProjectsArr = new Array(length + specfic.length).fill(
  //   dummyProject
  // );

  // const [projectsArray, setProjectsArray] = useState([]);

  // const fetchRepos = useCallback(async () => {
  //   let repoList = [];
  //   try {
  //     // getting all repos
  //     const response = await axios.get(allReposAPI);
  //     // slicing to the length
  //     repoList = [...response.data.slice(0, length)];
  //     // adding specified repos
  //     try {
  //       for (let repoName of specfic) {
  //         const response = await axios.get(`${specficReposAPI}/${repoName}`);
  //         repoList.push(response.data);
  //       }
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //     // setting projectArray
  //     // TODO: remove the duplication.
  //     setProjectsArray(repoList);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }, [allReposAPI, length, specfic, specficReposAPI]);

  // useEffect(() => {
  //   fetchRepos();
  // }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
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
