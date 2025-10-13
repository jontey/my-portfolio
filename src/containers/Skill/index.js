import React, { Component } from 'react'
import Skills from './content'
import SkillIcon from './icon'
import SectionHeading from '../../components/SectionHeading'


const Skill = ({section}) => {
  const skillItems = Skills.map((e, i) => {
    return (
      <div
        key={`skills_${i}`}
        className="flex-[0_1_calc(33.333%-20px)] max-w-[350px] min-w-[280px] bg-white rounded-xl shadow-lg transition-all duration-300 ease-out border border-black/5 cursor-pointer hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:border-brand/30"
      >
        <div className="p-6">
          <h3 className="text-base-dark text-xl font-semibold mb-4 flex items-center justify-between">
            {e.title}
            <SkillIcon icon={e.icon}/>
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm text-left">{e.description}</p>
        </div>
      </div>
      )
  })
  return ([
      <div key="skills_header" className="max-w-full">
        <div className="w-full">
          <SectionHeading>{section.title}</SectionHeading>
        </div>
      </div>,
      <div key="skills_content" className="max-w-full">
        <div className="flex flex-wrap justify-center gap-5 max-w-[1200px] mx-auto">
          {skillItems}
        </div>
      </div>
    ]
    )
}

export default Skill