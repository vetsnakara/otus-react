import React, { FC } from 'react'

import { Task } from '../Task'

import { TaskListProps } from 'types'

import './styles.scss'

export const TaskList: FC<TaskListProps> = ({
  tasks = [],
  onToggleComplete,
  onRemove
}) => {
  if (tasks.length === 0) return null

  return (
    <ul className="task-list" data-test="task-list">
      {tasks.map((task) => {
        const { id } = task

        return (
          <li key={id} className="task-list__item" data-test="task-list-item">
            <Task
              task={task}
              onToggleComplete={() => onToggleComplete(id)}
              onRemove={() => onRemove(id)}
            />
          </li>
        )
      })}
    </ul>
  )
}
