import React, { Component } from 'react'
import Skills from './content'
import SkillIcon from './icon'


const Skill = ({section}) => {
  const skillItems = Skills.map((e, i) => {
    return (
      <div key={`skills_${i}`} className="card skills">
        <div className="section">
          <h3>
            {e.title}
            <SkillIcon icon={e.icon}/>
          </h3>
          <p>{e.description}</p>
        </div>
      </div>
      )
  })
  return ([
      <div key="skills_header" className="row">
        <div className="col-sm">
          <h2 className="heading">{section.title}</h2>
        </div>
      </div>,
      <div key="skills_content" className="row">
        {skillItems}
      </div>
    ]
    )
}

export default Skill