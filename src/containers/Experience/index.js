import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import SectionHeading from '../../components/SectionHeading'

import Experiences from './content'

const Experience = ({ section }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const handleCardClick = (index) => {
    setActiveIndex(index)
  }

  const experienceItems = Experiences.map((e, i) => {
    const isActive = i === activeIndex
    const offset = i - activeIndex

    return (
      <div
        key={`experiences_${i}`}
        onClick={() => handleCardClick(i)}
        className={`
          bg-white border-l-4 border-brand rounded-lg p-5 shadow-md text-left cursor-pointer
          transition-all duration-500 ease-out md:px-6 mb-5 md:mb-0
          md:absolute w-full
          ${isActive ? 'md:z-30 md:translate-y-0 opacity-100 md:scale-100 md:shadow-2xl' : ''}
          ${!isActive && offset > 0 ? 'md:opacity-70 md:scale-95' : ''}
          ${!isActive && offset < 0 ? 'md:z-0 md:-translate-y-12 md:opacity-0 md:scale-90 md:pointer-events-none' : ''}
          hover:shadow-lg ${isActive ? '' : 'md:hover:scale-[0.96]'}
        `}
        style={isDesktop ? {
          transform: !isActive && offset > 0
            ? `translateY(${offset * 20}px) scale(${1 - offset * 0.03})`
            : !isActive && offset < 0
              ? 'translateY(-48px) scale(0.9)'
              : 'translateY(0) scale(1)',
          zIndex: isActive ? 30 : offset < 0 ? 0 : 20 - offset,
          maxHeight: isActive ? 'none' : '180px',
          overflow: isActive ? 'visible' : 'hidden'
        } : {}}
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
          <div className={`text-gray-700 leading-relaxed space-y-3 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
            {e.description.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          {!isActive && (
            <div className="hidden md:block absolute bottom-3 right-5 text-brand text-sm font-medium">Click to expand →</div>
          )}
        </div>
      </div>
    )
  })

  return (
    <div className="max-w-full">
      <div className="w-full">
        <SectionHeading>{section.title}</SectionHeading>
        <div className="flex gap-8 max-w-[1100px] mx-auto mt-8">
          <div className="flex-1 md:relative" style={isDesktop ? { minHeight: `${500}px` } : {}}>
            {experienceItems}
          </div>

          {/* Visual indicator on the right */}
          <div className="hidden md:flex flex-col gap-3 pt-2">
            {Experiences.map((e, i) => (
              <button
                key={`indicator_${i}`}
                onClick={() => handleCardClick(i)}
                className={`
                  group flex items-center gap-3 transition-all duration-300
                  ${i === activeIndex ? 'opacity-100' : 'opacity-40 hover:opacity-70'}
                `}
                aria-label={`View ${e.company} experience`}
              >
                <div className="flex flex-col items-end text-right">
                  <span className={`text-xs font-medium transition-all duration-300 ${i === activeIndex ? 'text-brand' : 'text-gray-600'}`}>
                    {e.shortName}
                  </span>
                  <span className="text-[10px] text-gray-500">{e.date.split(' - ')[0]}</span>
                </div>
                <div className={`
                  w-3 h-3 rounded-full border-2 transition-all duration-300
                  ${i === activeIndex ? 'bg-brand border-brand scale-125' : 'bg-white border-gray-400 group-hover:border-brand'}
                `} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience