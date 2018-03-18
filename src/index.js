import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Portfolio from './containers/Portfolio'

import './styles.scss'

/* Mini.css imports */
import 'mini.css/dist/mini-default.css'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Portfolio);

/* HMR settings */
if (module.hot) {
  module.hot.accept('./containers/Portfolio', () => {
  	const Portfolio = require('./containers/Portfolio').default
    render(Portfolio)
  });
}