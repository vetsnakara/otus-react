import React, { FC } from 'react'
import cn from 'classnames'

import type { TaskProps } from 'types'

import { SVGIcon as Icon } from '../SVGIcon'

import './styles.scss'

export const Task: FC<TaskProps> = ({
  task: { title, completed = false },
  onToggleComplete,
  onRemove
}) => (
  <div data-test="task" className="task">
    <button
      data-test="task-toggle-btn"
      className={cn('task__btn', 'task__btn--toggle', {
        completed
      })}
      onClick={onToggleComplete}
    >
      <Icon name="check" className="task__icon" />
    </button>

    <p data-test="task-title" className={cn('task__title', { completed })}>
      {title}
    </p>

    <button
      data-test="task-remove-btn"
      className="task__btn task__btn--remove"
      onClick={onRemove}
    >
      <Icon name="cancel" className="task__icon" />
    </button>
  </div>
)
