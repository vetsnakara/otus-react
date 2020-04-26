import React from 'react'
import ReactDOM from 'react-dom'

import Task from './components/Task'

import './index.scss'

ReactDOM.render(
  <Task
    task={{ title: 'Hello world' }}
    onToggleComplete={() => console.log('completed')}
    onRemove={() => console.log('removed')}
  />,
  document.querySelector('#root')
)
