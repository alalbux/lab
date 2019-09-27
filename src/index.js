import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'

import * as serviceWorker from './serviceWorker'

import Root from './Root'

WebFont.load({
  google: {
    families: [
      'Poppins:300,400,500,600,700',
      'sans-serif'
    ]
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

serviceWorker.unregister()
