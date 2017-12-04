import React, { Component } from 'react'

const Skill = ({section}) => {
  const skillItems = section.content.map((e, i) => {
    return (
      <div class="card skills">
        <div class="section">
          <h3>e.title</h3>
          <p>e.description</p>
        </div>
      </div>
      )
  })
  return ([
      <div className="row">
        <div className="col-sm">
          <h2 className="heading">{section.title}</h2>
        </div>
      </div>,
      <div className="row">
        {skillItems}
      </div>
    ]
    )
}

export default Skill