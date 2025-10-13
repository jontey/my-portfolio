import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import SectionHeading from '../../components/SectionHeading'

import Experiences from './content'

const Experience = (section) => {
  const experienceItems = Experiences.map((e, i) => {
    return (
      <div
        key={`experiences_${i}`}
        className="bg-white border-l-4 border-brand rounded-lg p-5 shadow-md text-left transition-all duration-300 hover:shadow-xl hover:translate-x-1 md:px-6"
      >
        <div className="mb-4">
          <div className="flex items-center gap-2 text-brand font-semibold text-sm">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xs" />
            <span>{e.date}</span>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-base-dark mb-2">{e.title}</h3>
          <h4 className="text-lg font-medium text-gray-600 mb-3">{e.company}</h4>
          <div className="text-gray-700 leading-relaxed space-y-3">
            {e.description.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className="max-w-full">
      <div className="w-full">
        <SectionHeading>{section.title}</SectionHeading>
        <div className="max-w-[1000px] mx-auto mt-8 flex flex-col gap-5">
          {experienceItems}
        </div>
      </div>
    </div>
  )
}

export default Experience