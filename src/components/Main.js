import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Tabs } from "antd";
import { useHistory } from "react-router-dom";
import About from "./about/About";
import Projects from "./projects/Projects";
import Resume from "./resume/Resume";
import "./Main.css";
import "antd/dist/antd.css";

const { TabPane } = Tabs;

const map = {
  1: "/about",
  2: "/resume",
  3: "/projects",
  "/about": "1",
  "/resume": "2",
  "/projects": "3",
};

function Main() {
  const history = useHistory();
  const location = useLocation();

  const handleChange = (key) => {
    history.push(map[key]);
  };

  return (
    <div className="app__main-content">
      <Tabs defaultActiveKey={map[location.pathname]} onChange={handleChange}>
        <TabPane tab="About" key="1" />
        <TabPane tab="Resume" key="2" />
        <TabPane tab="Projects" key="3" />
      </Tabs>

      <AnimatePresence exitBeforeEnter>
        <Switch key={location.pathname} location={location}>
          <Route component={About} path="/about" exact />
          <Route component={Projects} path="/projects" exact />
          <Route component={Resume} path="/resume" exact />
          <Route render={() => <Redirect to="/about" />} path="/" />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default Main;
