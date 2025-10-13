import React, { Component } from "react";
import Content from "./content";
import SectionHeading from "../../components/SectionHeading";

import aboutMeImage from "../../../images/jt.png";

const About = ({ section }) => (
  <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
    <div className="w-48 flex-shrink-0">
      <img className="rounded-full w-full" src={aboutMeImage} alt="Jonathan Tey" />
    </div>
    <div className="flex-1">
      <SectionHeading>{section.title}</SectionHeading>
      {Content.map((paragraph, index) => (
        <p key={index} className="mb-0 leading-[1.8]">{paragraph}</p>
      ))}
    </div>
  </div>
);

export default About;
