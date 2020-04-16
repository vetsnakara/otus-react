import React, { ReactElement } from 'react'
import cn from 'classnames'
import Icon from '../SVGIcon'

import './styles.scss'

export interface TaskData {
  title: string
  completed?: boolean
}

export interface Props {
  task: TaskData
  onToggleComplete: () => void
  onRemove: () => void
}

const Task: React.FC<Props> = ({
  task: { title, completed = false },
  onToggleComplete,
  onRemove
}): ReactElement => (
  <div data-test="task" className="task">
    <button
      data-test="task-complete-btn"
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

export default Task
