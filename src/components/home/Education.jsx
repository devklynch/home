import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Education = ({ heading, listings }) => {
  return (
    <Jumbotron
      id="leadership"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="container">
        {listings.map((item, index) => (
          <div key={index} className="row align-items-center mb-4">
            {/* Left column: Image */}
            <div className="col-md-4 text-center">
              {item.img && (
                <img
                  src={item.img}
                  alt={`${item.school} logo`}
                  className="img-fluid"
                  style={{ maxWidth: "150px", height: "auto" }}
                />
              )}
            </div>

            {/* Right column: Text */}
            <div className="col-md-8">
              <h3>{item.school}</h3>

              {Array.isArray(item.description) &&
                item.description.length > 0 && (
                  <ul>
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                )}

              <p>
                <strong>{item.dates}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Jumbotron>
  );
};

export default Education;
