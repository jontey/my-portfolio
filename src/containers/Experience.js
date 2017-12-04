import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'

const Experience = ({section}) => {
  const experienceItems = section.content.map((e, i) => {
    return (
      <div key={e.date} className="vtimeline-point">
        <div className="vtimeline-icon">
          <i className="fa fa-map-marker" />
        </div>
        <div className="vtimeline-block">
          <span className="vtimeline-date">
            {e.date}
          </span>
          <div className="vtimeline-content">
            <h3>
              {e.company}
            </h3>
            <h4>
              {e.title}
            </h4>
            <p>
              {e.description}
            </p>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className="row">
      <div className="col-sm">
        <h2 className="heading">{section.title}</h2>
        <div id="experience-timeline">
          {experienceItems}
        </div>
      </div>
    </div>
  )
}

export default Experience