import React, { Component } from 'react'

import About from './About'
import Experience from './Experience/'
import Skill from './Skill'
import Blog from './Blog'
import techBg from '../../images/Gemini_Generated_Image_kqkrrykqkrrykqkr.png'
import experienceBg from '../../images/Gemini_Generated_Image_qnpx97qnpx97qnpx.png'

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

  const getBgImage = () => {
    if (section.type === 'blog') return techBg;
    if (section.type === 'experience') return experienceBg;
    return null;
  };

  const bgImage = getBgImage();
  const sectionStyle = bgImage ? {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative'
  } : {};

  const hasBackground = section.type === 'blog' || section.type === 'experience';

  return (
    <div className={sectionClasses} id={section.link} style={sectionStyle}>
      {section.type === 'blog' && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 to-gray-800/90 backdrop-blur-sm"></div>
      )}
      {section.type === 'experience' && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      )}
      <div className={`max-w-4xl mx-auto ${hasBackground ? 'relative z-10' : ''}`}>
        {content}
      </div>
    </div>
  )
}

export default Content
