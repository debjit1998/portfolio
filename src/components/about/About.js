import React from "react";
import { motion } from "framer-motion";
import api from "../../assets/icons/api.svg";
import computer from "../../assets/icons/computer.svg";
import repair from "../../assets/icons/repair.svg";
import puzzle from "../../assets/icons/puzzle.svg";
import algo from "../../assets/icons/algo.svg";
import backend from "../../assets/icons/backend.svg";
import "./About.css";

const skills = [
  {
    icon: computer,
    title: "Frontend Development",
    about:
      "Simple and scalable front-end aplications using HTML, CSS and React.js",
  },
  {
    icon: backend,
    title: "Backend Development",
    about:
      "Handle server and database using Node.js and NoSQL databases like MongoDb, CosmosDb",
  },
  {
    icon: api,
    title: "API Development",
    about: "Develop robust REST API's using Node.js and Express.js",
  },
  {
    icon: algo,
    title: "Data Structures and Algorithms",
    about: "General understanding of different data structures and alogrithms",
  },
  {
    icon: puzzle,
    title: "Databricks Scripts",
    about: "Simple scripts in Azure databricks using python and spark-SQL",
  },
  {
    icon: repair,
    title: "Quick Learner",
    about:
      "Ability to work hard and acquire the skills necessary for a project",
  },
];

function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="about__intro">
        I describe myself as someone who is hard working, a quick learner and
        loves solving problems using simple and scalable solutions
      </h4>
      <div className="container-fluid about__container">
        <h3 className="about__heading">What I Offer</h3>
        <div className="row">
          {skills.map((skill, index) => (
            <motion.div
              className="col-lg-6"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="skill-card">
                <img
                  src={skill.icon}
                  alt="skill card icon"
                  className="skill-card__icon"
                />
                <div className="skill-card__body">
                  <h4 className="skill-card__title">{skill.title}</h4>
                  <p className="skill-card__content">{skill.about}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
