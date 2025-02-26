import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container, Col, Image } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(
  ({ heading, programmingLanguages, testing, tools }, ref) => {
    const skillCategories = [
      { title: "Languages and Frameworks", skills: programmingLanguages },
      { title: "Testing", skills: testing },
      { title: "Tools and Workflow", skills: tools },
    ];

    return (
      <Jumbotron fluid className="bg-light m-0" id="skills">
        <Container className="p-5">
          <h2 className="display-4 pb-5 text-center">{heading}</h2>
          {skillCategories.map(({ title, skills }) => (
            <div key={title} className="mb-4">
              <h3 className="lead text-center fw-bold">{title}</h3>
              <Row className="pt-2 px-1 justify-content-center">
                {skills.map((skill, index) => (
                  <Col
                    key={index}
                    xs={6}
                    md={4}
                    lg={2}
                    className="text-center py-2"
                  >
                    {skill.img && (
                      <Image
                        src={skill.img}
                        alt={skill.name}
                        width={50}
                        height={50}
                        className="mb-2"
                      />
                    )}
                    <div>{skill.name}</div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </Jumbotron>
    );
  }
);

export default Skills;
