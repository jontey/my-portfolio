import React, { Component } from 'react'

import HeaderItems from '../components/HeaderItems'

const Header = ({sections}) => {
  return (
    <header className="sticky">
      {sections.map(section => HeaderItems({...section}))}
    </header>
  )
}

export default Header