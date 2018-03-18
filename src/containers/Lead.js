import React, { Component } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/fontawesome-free-solid'

const handleShow = name => {
  document.getElementById(name).scrollIntoView({block: 'start', behavior: 'smooth'})
}

const Lead = ({info}) => (
  <div id="lead">
    <div id="lead-content">
      <h1>{info.name}</h1>
      <h2>{info.position}</h2>
      <a href={info.resume} className="btn-rounded-white">Download Resume</a>
    </div>
    <div id="lead-down" onClick={handleShow.bind(this, 'about')}>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  </div>
)

export default Lead