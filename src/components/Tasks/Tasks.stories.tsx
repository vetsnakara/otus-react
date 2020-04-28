import React, { FC } from 'react'

import { Tasks } from './Tasks'
import { TaskList } from './components/TaskList'

import { getTasks } from 'data'

export default {
  title: 'Tasks',
  component: Tasks
}

/**
 * With tasks
 */
export const WithTasks: FC<{}> = () => {
  const tasks = getTasks({
    titles: ['One', 'Two', 'Three']
  })

  return <Tasks tasks={tasks} ListComponent={TaskList} />
}

/**
 * Without tasks
 */
export const WithoutTasks: FC<{}> = () => {
  return <Tasks tasks={[]} ListComponent={TaskList} />
}
