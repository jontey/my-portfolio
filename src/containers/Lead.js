import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const handleShow = name => {
  const target = document.getElementById(name)
  if (!target) return

  const header = document.querySelector("header[role='navigation']")
  const offset = header ? header.getBoundingClientRect().height + 8 : 0
  const top = target.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
}

const Lead = ({info}) => (
  <div
    id="lead"
    className="h-screen min-h-[500px] max-h-[1080px] bg-[url('../images/lead-bg.jpg')] bg-fixed bg-cover p-4 overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:bg-black/30 before:z-[1] md:max-h-none md:min-h-0 md:h-auto md:py-24"
  >
    <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center md:relative md:transform-none md:left-auto md:top-auto">
      <h1 className="text-white font-black text-5xl uppercase tracking-wider leading-[0.9] drop-shadow-[2px_2px_8px_rgba(0,0,0,0.7)] m-0 md:text-5xl sm:text-3xl">
        {info.name}
      </h1>
      <h2 className="text-white font-medium text-4xl mb-4 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)] m-0 mt-2 md:text-3xl sm:text-xl">
        {info.position}
      </h2>
      <a
        href={info.resume}
        className="inline-block bg-white text-base-dark py-4 px-6 border-[3px] border-white rounded-[30px] no-underline transition-all duration-300 font-semibold text-lg shadow-lg hover:bg-brand hover:text-white hover:border-brand visited:text-base-dark sm:py-2.5 sm:px-5 sm:text-base"
      >
        Download Resume
      </a>
    </div>
    <div
      onClick={handleShow.bind(this, 'about')}
      className="absolute left-0 right-0 border border-white rounded-full w-9 h-9 text-center bottom-5 text-white mx-auto cursor-pointer leading-9 md:hidden"
    >
      <FontAwesomeIcon icon={faAngleDown} className="animate-pulsate pt-1" />
    </div>
  </div>
)

export default Lead