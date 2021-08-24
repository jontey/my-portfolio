import React, { Component } from "react";
import Content from "./content";

import aboutMeImage from "../../../images/jt.png";

const About = ({ section }) => (
  <div className="row">
    <div className="col-sm-2">
      <img className="img-rounded" src={aboutMeImage} />
    </div>
    <div className="col-sm col-sm-offset-1">
      <h2 className="heading">{section.title}</h2>
      <p>{Content}</p>
    </div>
  </div>
);

export default About;
