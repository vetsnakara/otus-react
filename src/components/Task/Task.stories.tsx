import React, { ReactElement } from 'react'

import { actions } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Task from './Task'

export default {
  title: 'Task',
  component: Task,
  excludeStories: /.*Data$/,
  decorators: [withKnobs, (story) => <div className="container">{story()}</div>]
}

const taskData = {
  title: 'My awesome task',
  completed: false
}

const taskDataWithKnobs = () => ({
  title: text('title', 'My awesome task'),
  completed: boolean('completed', false)
})

const taskActions = actions({
  onToggleComplete: 'Toggle task complete',
  onRemove: 'Remove'
})

const veryLongTitle = Array.from(Array(20).keys())
  .map(() => 'Very long title.')
  .join(' ')

export const Default: React.FC<{}> = (): ReactElement => (
  <Task task={{ ...taskDataWithKnobs() }} {...taskActions} />
)

export const LongTitle: React.FC<{}> = (): ReactElement => (
  <Task task={{ ...taskData, title: veryLongTitle }} {...taskActions} />
)

export const Completed: React.FC<{}> = (): ReactElement => (
  <Task task={{ ...taskData, completed: true }} {...taskActions} />
)
