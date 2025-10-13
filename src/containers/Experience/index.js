import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import Experiences from './content'

const Experience = (section) => {
  const experienceItems = Experiences.map((e, i) => {
    return (
      <div key={`experiences_${i}`} className="experience-card">
        <div className="experience-header">
          <div className="experience-date">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="date-icon" />
            <span>{e.date}</span>
          </div>
        </div>
        <div className="experience-body">
          <h3 className="experience-title">{e.title}</h3>
          <h4 className="experience-company">{e.company}</h4>
          <p className="experience-description">{e.description}</p>
        </div>
      </div>
    )
  })
  return (
    <div className="row">
      <div className="col-sm">
        <h2 className="heading">{section.title}</h2>
        <div className="experience-grid">
          {experienceItems}
        </div>
      </div>
    </div>
  )
}

export default Experience