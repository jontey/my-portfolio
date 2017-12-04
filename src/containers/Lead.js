import React, { Component } from 'react'

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
      <i class="fa fa-angle-down" aria-hidden="true"></i>
    </div>
  </div>
)

export default Lead