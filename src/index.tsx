import React from 'react'
import ReactDOM from 'react-dom'

import ClickCounter from './components/ClickCounter'

ReactDOM.render(<ClickCounter start={2} />, document.querySelector('#root'))
