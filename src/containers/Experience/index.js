import React, { useState, useEffect, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import SectionHeading from '../../components/SectionHeading'

import Experiences from './content'

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

const Experience = ({ section }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDesktop, setIsDesktop] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    if (!isDesktop) return undefined

    let rafId = null

    const updateScrollDrivenState = () => {
      const sectionEl = sectionRef.current
      if (!sectionEl) {
        rafId = window.requestAnimationFrame(updateScrollDrivenState)
        return
      }

      const rect = sectionEl.getBoundingClientRect()
      const totalScrollable = rect.height - window.innerHeight
      const progress = totalScrollable > 0 ? clamp(-rect.top / totalScrollable, 0, 1) : 0
      const steppedIndex = clamp(Math.floor(progress * Experiences.length), 0, Experiences.length - 1)

      setScrollProgress(progress)
      setActiveIndex((prevIndex) => (prevIndex === steppedIndex ? prevIndex : steppedIndex))

      rafId = window.requestAnimationFrame(updateScrollDrivenState)
    }

    rafId = window.requestAnimationFrame(updateScrollDrivenState)

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [isDesktop])

  const handleCardClick = (index) => {
    if (!isDesktop) {
      setActiveIndex(index)
    }
  }

  const experienceItems = Experiences.map((e, i) => {
    const isActive = i === activeIndex
    const offset = i - activeIndex

    return (
      <div
        key={`experiences_${i}`}
        onClick={() => handleCardClick(i)}
        className={`
          bg-white/95 border-l-4 border-brand rounded-lg p-5 shadow-md text-left transition-all duration-500 ease-out md:px-6 mb-5 md:mb-0
          md:absolute w-full
          ${isActive ? 'md:z-30 md:translate-y-0 opacity-100 md:scale-100 md:shadow-2xl' : ''}
          ${!isActive && offset > 0 ? 'md:opacity-70 md:scale-95' : ''}
          ${!isActive && offset < 0 ? 'md:z-0 md:-translate-y-12 md:opacity-0 md:scale-90 md:pointer-events-none' : ''}
        `}
        style={isDesktop ? {
          transform: !isActive && offset > 0
            ? `translateY(${offset * 18}px) scale(${1 - offset * 0.025})`
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
          {!isDesktop && !isActive && (
            <div className="text-brand text-sm font-medium mt-3">Tap to expand →</div>
          )}
        </div>
      </div>
    )
  })

  const progressHeight = `${Math.max(scrollProgress * 100, 4)}%`

  return (
    <div className="max-w-full" ref={sectionRef} style={isDesktop ? { minHeight: '320vh' } : {}}>
      <div className={isDesktop ? 'sticky top-20 min-h-[calc(100vh-5rem)]' : ''}>
        <SectionHeading>{section.title}</SectionHeading>

        <div className="mx-auto mt-8 grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_220px]">
          <div className="relative" style={isDesktop ? { minHeight: '500px' } : {}}>
            {experienceItems}
          </div>

          <div className="hidden lg:flex flex-col rounded-xl border border-brand/20 bg-white/80 p-4 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-brand mb-4">Career Timeline</p>

            <div className="relative flex-1 rounded-lg bg-slate-100 p-3 overflow-hidden">
              <div className="absolute left-4 top-3 bottom-3 w-1 rounded-full bg-slate-300" />
              <div
                className="absolute left-4 top-3 w-1 rounded-full bg-brand transition-all duration-300"
                style={{ height: progressHeight }}
              />

              <div className="relative z-10 flex h-full flex-col justify-between py-1">
                {Experiences.map((e, i) => (
                  <button
                    key={`indicator_${i}`}
                    onClick={() => setActiveIndex(i)}
                    className={`group flex items-center gap-3 text-left transition-all duration-300 ${i === activeIndex ? 'opacity-100' : 'opacity-45 hover:opacity-75'}`}
                    aria-label={`View ${e.company} experience`}
                  >
                    <div className="h-3 w-3 rounded-full border-2 border-brand bg-white" />
                    <div>
                      <p className={`text-xs font-semibold ${i === activeIndex ? 'text-brand' : 'text-slate-600'}`}>{e.shortName}</p>
                      <p className="text-[10px] text-slate-500">{e.date.split(' - ')[0]}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">Scroll to scrub through roles like a narrative sequence.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
