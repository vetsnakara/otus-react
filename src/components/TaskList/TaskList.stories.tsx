import React from 'react'
import { actions } from '@storybook/addon-actions'

import { getTasks } from '../../data'

import TaskList from './TaskList'

export default {
  title: 'TaskList',
  component: TaskList,
  decorators: [(story) => <div className="container">{story()}</div>]
}

const taskListActions = actions({
  onToggleComplete: 'Toggle task',
  onRemove: 'Remove task'
})

export const NoTasks: React.FC<{}> = () => <TaskList {...taskListActions} />

export const WithTasks: React.FC<{}> = () => (
  <TaskList
    tasks={getTasks({ titles: ['One', 'Two', 'Three'] })}
    {...taskListActions}
  />
)

export const WithCompletedTasks: React.FC<{}> = () => (
  <TaskList
    tasks={[
      ...getTasks({ titles: ['One', 'Two'] }),
      ...getTasks({ titles: ['Three', 'Four'], completed: true })
    ]}
    {...taskListActions}
  />
)
