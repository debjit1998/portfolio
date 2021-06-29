import React from "react";
import githubImage from "../../assets/icons/github.svg";

function ProjectCard({ p: { name, image, github } }) {
  return (
    <div className="col-md-6 projectcard">
      <figure className="projectcard__wrapper">
        <img src={image} alt="project" className="projectcard__image" />
        <div className="projectcard__title">
          <a
            href={github}
            target={github !== "" ? "_blank" : ""}
            rel="noreferrer"
            title="github link"
          >
            <img src={githubImage} alt="github" className="projectcard__icon" />
          </a>
          <span>{name}</span>
        </div>
      </figure>
    </div>
  );
}

export default ProjectCard;
