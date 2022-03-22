import React from "react";
import Bar from "./Bar";
import "./Resume.css";
import react from "../../assets/icons/react.svg";
import js from "../../assets/icons/js.svg";
import git from "../../assets/icons/github.svg";
import python from "../../assets/icons/python.svg";

const languages = [
  {
    icon: react,
    name: "Node.js",
    level: "80",
  },
  {
    icon: react,
    name: "React.js",
    level: "80",
  },
  {
    icon: js,
    name: "Javascript",
    level: "70",
  },
  {
    icon: react,
    name: "HTML",
    level: "75",
  },
  {
    icon: react,
    name: "CSS",
    level: "75",
  },
  {
    icon: react,
    name: "Bootstrap",
    level: "75",
  },
  {
    icon: react,
    name: "C++",
    level: "80",
  },
  {
    icon: python,
    name: "Python",
    level: "55",
  },
];

const tools = [
  {
    icon: git,
    name: "Git",
    level: "65",
  },
  {
    icon: react,
    name: "Azure Databricks",
    level: "70",
  },
  {
    icon: react,
    name: "Azure CosmosDb",
    level: "75",
  },
  {
    icon: react,
    name: "VS Code",
    level: "70",
  },
  {
    icon: react,
    name: "Service Now",
    level: "75",
  },
];

function Resume() {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h3 className="resume-card__heading">Education</h3>
          <div className="resume-card__body">
            <h4 className="resume-card__title">Jadavpur University</h4>
            <p className="resume-card__name">
              B.E in Computer Science and Engineering
            </p>
            <p className="resume-card__details">
              I have graduated from Jadavpur University with 7.72 overall CGPA
              in the year 2020.
            </p>
          </div>
        </div>

        <div className="col-lg-6 resume-card">
          <h3 className="resume-card__heading">Work Experience</h3>
          <div className="resume-card__body">
            <h4 className="resume-card__title">
              TATA Consultancy Servies(TCS)
            </h4>
            <p className="resume-card__name">
              Frontend Web Developer on QMIN project
            </p>
            <h4 className="resume-card__title">Connectwise LLP</h4>
            <p className="resume-card__name">
              Frontend Web Developer on Automate To Web project
            </p>
          </div>
        </div>
      </div>

      <div className="row ">
        <div className="col-lg-6 resume-language resume__language-tools">
          <h3 className="resume-language__heading">Languages and Frameworks</h3>
          <div className="resume-language__body pt-3">
            {languages.map((l, i) => (
              <Bar value={l} key={i} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-language resume__language-tools">
          <h3 className="resume-language__heading">Tools and Softwares</h3>
          <div className="resume-language__body pt-3">
            {tools.map((t, i) => (
              <Bar value={t} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
