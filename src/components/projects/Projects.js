import React from "react";
import Project from "./ProjectCard";
import mern from "../../assets/projects_images/mern.jpg";
import portfolio from "../../assets/projects_images/portfolio.JPG";
import qmin from "../../assets/projects_images/qmin.jpg";
import "./Projects.css";

const projects_data = [
  {
    name: "M.E.R.N stack Ecommerce",
    image: mern,
    github: "",
  },
  {
    name: "Portfolio using React.js and Emailjs",
    image: portfolio,
    github: "",
  },
  {
    name: "QMIN app backend (Work Project)",
    image: qmin,
    github: "",
  },
];

function Projects() {
  return (
    <div className="container projects">
      <div className="row">
        {projects_data.map((p, i) => (
          <Project p={p} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
