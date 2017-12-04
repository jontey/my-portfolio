import React, { Component } from 'react'

const About = ({section}) => (
  <div className="row">
    <div className="col-sm-2">
      <img className="img-rounded" src="../images/about-me.jpg" />
    </div>
    <div className="col-sm col-sm-offset-1">
      <h2 className="heading">{section.title}</h2>
      <p>{section.content}</p>
    </div>
  </div>
)

export default About