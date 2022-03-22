import React from "react";
import Project from "./ProjectCard";
import mern from "../../assets/projects_images/mern.jpg";
import portfolio from "../../assets/projects_images/portfolio.JPG";
import qmin from "../../assets/projects_images/qmin.jpg";
import bookthatstudio from "../../assets/projects_images/bookthatstudio.jpeg";
import automate from "../../assets/projects_images/automate-to-web.jpeg";

import "./Projects.css";

const projects_data = [
  {
    name: "M.E.R.N stack Ecommerce",
    image: mern,
    github: "https://github.com/debjit1998/ecommerce-server",
  },
  {
    name: "Portfolio using React.js and Emailjs",
    image: portfolio,
    github: "",
  },
  {
    name: "BookThatStudio Website",
    image: bookthatstudio,
    github: "https://bookthatstudio.com",
  },
  {
    name: "QMIN Website frontend (Work Project)",
    image: qmin,
    github: "",
  },
  {
    name: "Automate To Web (Work Project)",
    image: automate,
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
