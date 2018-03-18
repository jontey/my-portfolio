import React, { Component } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const skillIconStyles = {
  fontSize: '1em',
  marginLeft: '10px'
}


const SkillIcon = ({icon}) => {
	return (
		<FontAwesomeIcon style={skillIconStyles} icon={icon} />
	)
}

export default SkillIcon;