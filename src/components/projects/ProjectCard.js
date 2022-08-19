import React from "react";
import { motion } from "framer-motion";
import githubImage from "../../assets/icons/github.svg";

function ProjectCard({ p: { name, image, github }, index }) {
  return (
    <motion.div
      className="col-md-6 projectcard"
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      <figure className="projectcard__wrapper">
        <div className="projectcard__image-container">
          <img src={image} alt="project" className="projectcard__image" />
        </div>
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
    </motion.div>
  );
}

export default ProjectCard;
