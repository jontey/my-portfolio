import React, { Component } from 'react'

import About from './About'
import Experience from './Experience/'
import Skill from './Skill'
import Blog from './Blog'

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
    case 'blog':
      content = <Blog section={section} />
      break;
  }
  const sectionClasses = section.type === 'about'
    ? 'py-20 px-4 border-b border-gray-200 sm:py-12'
    : 'py-16 px-4 text-center border-b border-gray-200 sm:py-12';

  return (
    <div className={sectionClasses} id={section.link}>
      <div className="max-w-4xl mx-auto">
        {content}
      </div>
    </div>
  )
}

export default Content
