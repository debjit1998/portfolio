import React from "react";
import { Tabs } from "antd";
import About from "./about/About";
import Resume from "./resume/Resume";
import Projects from "./projects/Projects";
import "./Main.css";
import "antd/dist/antd.css";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function Main() {
  return (
    <div className="app__main-content">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="About" key="1">
          <About />
        </TabPane>
        <TabPane tab="Resume" key="2">
          <Resume />
        </TabPane>
        <TabPane tab="Projects" key="3">
          <Projects />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Main;
