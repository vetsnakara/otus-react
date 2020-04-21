import React from 'react'
import ReactDOM from 'react-dom'

import { Tasks } from './components/Tasks'
import { TaskList } from './components/TaskList'

import { getTasks } from 'data'

const tasks = getTasks({
  titles: ['One', 'Two', 'Three']
})

ReactDOM.render(
  <Tasks tasks={tasks} ListComponent={TaskList} />,
  document.querySelector('#root')
)
