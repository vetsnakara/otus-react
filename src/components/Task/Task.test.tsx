import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import Task, { Props as TaskProps } from './Task'

interface SetupProps {
  title?: string
  completed?: boolean
  onToggleComplete?: () => void
  onRemove?: () => void
}

const findByDataAttr = (wrapper: ShallowWrapper, val: string) =>
  wrapper.find(`[data-test="${val}"]`)

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

    const task = findByDataAttr(wrapper, 'task')
    expect(task.length).toBe(1)

    const completeBtn = findByDataAttr(wrapper, 'task-complete-btn')
    expect(completeBtn.length).toBe(1)

    const taskTitle = findByDataAttr(wrapper, 'task-title')
    expect(taskTitle.text()).toBe(title)
  })

  test(`Click 'complete' button`, () => {
    const onToggleComplete = jest.fn()
    const wrapper = setup({ onToggleComplete })

    const completeBtn = findByDataAttr(wrapper, 'task-complete-btn')
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
