import React from 'react'

import { actions } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { TaskData } from '../../interfaces'
import Task from './Task'

import { veryLongTitle } from '../../../internals/testUtils'

export default {
  title: 'Task',
  component: Task,
  excludeStories: /.*Data$/,
  decorators: [withKnobs, (story) => <div className="container">{story()}</div>]
}

// default task data
const taskData: TaskData = {
  title: 'My awesome task',
  completed: false
}

// task data with knobs
const taskDataWithKnobs = () => ({
  title: text('title', 'My awesome task'),
  completed: boolean('completed', false)
})

// task actions
const taskActions = actions({
  onToggleComplete: 'Toggle task complete',
  onRemove: 'Remove'
})

/**
 * Default task
 */
export const Default: React.FC<{}> = () => (
  <Task task={{ ...taskDataWithKnobs() }} {...taskActions} />
)

/**
 * Task with long title
 */
export const LongTitle: React.FC<{}> = () => (
  <Task task={{ ...taskData, title: veryLongTitle }} {...taskActions} />
)

/**
 * Competed task
 */
export const Completed: React.FC<{}> = () => (
  <Task task={{ ...taskData, completed: true }} {...taskActions} />
)
