import React, { Component } from "react";

import Header from "./Header";
import Lead from "./Lead";
import Content from "./Content";

const Info = {
  name: "Jonathan Tey",
  position: "Full-Stack Engineer",
  resume: require("../../Resume-JonathanTey.pdf")
};

const Sections = [
  {
    title: "Home",
    link: "lead"
  },
  {
    title: "About Me",
    link: "about",
    type: "about"
  },
  {
    title: "Projects",
    link: "project",
    type: "experience"
  },
  {
    title: "Skills",
    link: "skill",
    type: "skill"
  }
];

const Portfolio = () => [
  <Header key="Header" sections={Sections} />,
  <Lead key="Lead" info={Info} />,
  ...Sections.map((section, i) => (
    <Content section={section} key={`Sections_${i}`} index={i} />
  ))
];

export default Portfolio;
