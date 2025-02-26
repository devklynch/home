import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import Button from "react-bootstrap/Button";
import axios from "axios";

const ProjectCard = ({
  title,
  description,
  img,
  backendrepo,
  frontendrepo,
  deployedsite,
}) => {
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        {img ? (
          <Card.Img variant="top" src={img} alt={title} />
        ) : (
          <Skeleton height={200} />
        )}
        <Card.Body>
          <Card.Title as="h5">{title || <Skeleton />} </Card.Title>
          <Card.Text>{description || <Skeleton count={3} />}</Card.Text>
          <hr />
          <CardButtons
            backendrepo={backendrepo}
            frontendrepo={frontendrepo}
            deployedsite={deployedsite}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ backendrepo, frontendrepo, deployedsite }) => {
  return (
    <div className="d-grid gap-2 d-md-block text-center">
      {deployedsite && (
        <Button
          variant="secondary"
          href={deployedsite}
          target="_blank"
          className="mb-2 me-2"
        >
          Live Site
        </Button>
      )}
      {frontendrepo && (
        <Button
          variant="secondary"
          href={frontendrepo}
          target="_blank"
          className="mb-2 me-2"
        >
          Frontend Repo
        </Button>
      )}
      {backendrepo && (
        <Button
          variant="secondary"
          href={backendrepo}
          target="_blank"
          className="mb-2 me-2"
        >
          Backend Repo
        </Button>
      )}
    </div>
  );
};

export default ProjectCard;
