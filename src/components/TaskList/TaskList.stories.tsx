import React, { FC } from 'react'
import { actions } from '@storybook/addon-actions'

import { getTasks } from '../../data'

import TaskList from './TaskList'

export default {
  title: 'TaskList',
  component: TaskList
}

// task actions
const taskListActions = actions({
  onToggleComplete: 'Toggle task',
  onRemove: 'Remove task'
})

/**
 * List with tasks
 */
export const UncompletedTasks: FC<{}> = () => (
  <TaskList
    tasks={getTasks({ titles: ['One', 'Two', 'Three'] })}
    {...taskListActions}
  />
)

/**
 * List with completed tasks
 */
export const WithCompletedTasks: FC<{}> = () => (
  <TaskList
    tasks={[
      ...getTasks({ titles: ['One', 'Two'] }),
      ...getTasks({ titles: ['Three', 'Four'], completed: true })
    ]}
    {...taskListActions}
  />
)
