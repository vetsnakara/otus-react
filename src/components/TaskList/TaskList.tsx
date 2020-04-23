import React, { FC } from 'react'

import { Task } from '../Task'

import { TaskListProps } from 'types'

import { TaskListContainer as Container, TaskListItem as Item } from './styles'

export const TaskList: FC<TaskListProps> = ({
  tasks = [],
  onToggleComplete,
  onRemove
}) => {
  if (tasks.length === 0) return null

  return (
    <Container>
      {tasks.map((task) => {
        const { id } = task

        return (
          <Item key={id}>
            <Task
              task={task}
              onToggleComplete={() => onToggleComplete(id)}
              onRemove={() => onRemove(id)}
            />
          </Item>
        )
      })}
    </Container>
  )
}
