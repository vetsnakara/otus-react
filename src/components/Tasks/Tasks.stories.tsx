import React from 'react'

import Tasks from './Tasks'
import TaskList from '../TaskList'

import { getTasks } from '../../data'

export default {
  title: 'Tasks',
  component: Tasks,
  decorators: [(story) => <div className="container">{story()}</div>]
}

export const App = () => {
  const tasks = getTasks({
    titles: ['One', 'Two', 'Three']
  })

  return <Tasks tasks={tasks} ListComponent={TaskList} />
}
