import React from "react";

import Header from "./Header";
import Lead from "./Lead";
import ScrollStory from "./ScrollStory";
import Content from "./Content";
import Footer from "./Footer";

import resume from "../../Resume-JonathanTey.pdf";

const Info = {
  name: "Jonathan Tey",
  position: "Senior Full-Stack Engineer & Technical Consultant",
  resume: resume
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
    title: "Experiences",
    link: "project",
    type: "experience"
  },
  {
    title: "Solutions",
    link: "skill",
    type: "skill"
  },
  {
    title: "Blog",
    link: "blog",
    type: "blog"
  }
];

const Portfolio = () => (
  <div className="relative isolate overflow-x-hidden bg-slate-950/80">
    <ScrollStory />
    <Header sections={Sections} />
    <Lead info={Info} />
    {Sections.map((section, i) => (
      <Content section={section} key={`Sections_${i}`} index={i} />
    ))}
    <Footer />
  </div>
);

export default Portfolio;
