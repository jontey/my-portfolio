import React, { Component } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid'

import Experiences from './content'

const Experience = (section) => {
  const experienceItems = Experiences.map((e, i) => {
    return (
      <div key={`experiences_${i}`} className="vtimeline-point">
        <div className="vtimeline-icon">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
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