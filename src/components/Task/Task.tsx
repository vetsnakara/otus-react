import React, { FC } from 'react'

import type { TaskProps } from 'types'

import {
  TaskContainer as Container,
  Title,
  ToggleButton,
  RemoveButton,
  Icon
} from './styles'

export const Task: FC<TaskProps> = ({
  task: { title, completed = false },
  onToggleComplete,
  onRemove
}) => (
  <Container>
    <ToggleButton completed={completed} onClick={onToggleComplete}>
      <Icon name="check" />
    </ToggleButton>

    <Title completed={completed}>{title}</Title>

    <RemoveButton onClick={onRemove}>
      <Icon name="cancel" />
    </RemoveButton>
  </Container>
)
