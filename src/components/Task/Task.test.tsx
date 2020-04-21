import React from 'react'
import { shallow } from 'enzyme'

import type { TaskProps, TaskData, TaskActions } from '../../interfaces'
import { Task } from './Task'

import { findByDataAttr } from '../../../internals/testUtils'

interface SetupProps extends Partial<TaskData>, Partial<TaskActions> {}

/**
 * Task wrapper factory function
 */
const setup = ({
  title = 'Hello',
  completed,
  onToggleComplete = jest.fn(),
  onRemove = jest.fn()
}: SetupProps = {}) => {
  const setupProps: TaskProps = {
    task: {
      title,
      completed
    },
    onToggleComplete,
    onRemove
  }

  return shallow(<Task {...setupProps} />)
}

describe(`Task`, () => {
  test(`Renders correctly`, () => {
    const title = 'Hello'
    const wrapper = setup({ title })

    // task is rendered
    const task = findByDataAttr(wrapper, 'task')
    expect(task.length).toBe(1)

    // toggle btn is rendered
    const completeBtn = findByDataAttr(task, 'task-toggle-btn')
    expect(completeBtn.length).toBe(1)

    // remove btn is rendered
    const removeBtn = findByDataAttr(task, 'task-remove-btn')
    expect(removeBtn.length).toBe(1)

    // title value is expected
    const taskTitle = findByDataAttr(task, 'task-title')
    expect(taskTitle.text()).toContain(title)
  })

  test(`Click 'complete' button`, () => {
    const onToggleComplete = jest.fn()
    const wrapper = setup({ onToggleComplete })

    const completeBtn = findByDataAttr(wrapper, 'task-toggle-btn')
    completeBtn.simulate('click')
    expect(onToggleComplete).toHaveBeenCalledTimes(1)
  })

  test(`Click 'remove' button`, () => {
    const onRemove = jest.fn()
    const wrapper = setup({ onRemove })

    const removeBtn = findByDataAttr(wrapper, 'task-remove-btn')
    removeBtn.simulate('click')
    expect(onRemove).toHaveBeenCalledTimes(1)
  })
})
