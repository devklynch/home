import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, img, isScrolled }) {
  return (
    <div style={{ width: "95%" }}>
      <img src={img} alt={skill} width="50" height="50" />
    </div>
  );
}

export default SkillsBar;
