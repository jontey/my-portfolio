import React, { Component } from 'react'

import About from './About'
import Experience from './Experience/'
import Skill from './Skill'

const Content = ({section, index}) => {
  if (!section.type){
    return null
  }
  let content = null
  switch (section.type){
    case 'about':
      content = <About section={section} />
      break;
    case 'experience':
      content = <Experience section={section} />
      break;
    case 'skill':
      content = <Skill section={section} />
      break;
  }
  return (
    <div className="container" id={section.link}>
      {content}
    </div>
  )
}

export default Content
