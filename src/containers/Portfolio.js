import React, { Component } from 'react'

import Header from './Header'
import Lead from './Lead'
import Content from './Content'


const Info = {
  name: 'Jonathan Tey',
  position: 'Full-Stack Engineer',
  resume: '#'
}

const About = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat."

const Experiences = [
  {
    date: 'September 2015 – September 2016',
    company: 'Employer Name',
    title: 'Job Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.'
  },
  {
    date: 'September 2014 – September 2015',
    company: 'Employer Name',
    title: 'Job Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.'
  }
]

const Skills = [
  {
    title: 'JavaScript',
    description: 'Project A, Project B'
  },
  {
    title: 'Python',
    description: 'Project A, Project B'
  }
]


const Sections = [
  {
    title: 'Home',
    link: 'lead'
  },
  {
    title: 'About Me',
    link: 'about',
    type: 'about',
    content: About
  },
  {
    title: 'Experience',
    link: 'experience',
    type: 'experience',
    content: Experiences
  },
  {
    title: 'Skills',
    link: 'skill',
    type: 'skill',
    content: Skills
  }
]

const Portfolio = () => (
  [
    <Header sections={Sections} />,
    <Lead info={Info}/>,
    ...Sections.map((section, i) => <Content section={section} index={i} />)
  ]
)

export default Portfolio