import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import type { TaskProps, TaskData, TaskActions } from 'types'
import { Task } from './Task'

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

  const element = <Task {...setupProps} />

  return {
    snapshot: renderer.create(element).toJSON(),
    wrapper: mount(element)
  }
}

describe(`Task`, () => {
  test(`Renders correctly`, () => {
    const title = 'Hello'
    const { wrapper, snapshot } = setup({ title })

    // snapshot
    expect(snapshot).toMatchSnapshot()

    // task is rendered
    const task = wrapper.find('TaskContainer')
    expect(task.length).toBe(1)

    // toggle btn is rendered
    const completeBtn = task.find('ToggleButton')
    expect(completeBtn.length).toBe(1)

    // remove btn is rendered
    const removeBtn = task.find('RemoveButton')
    expect(removeBtn.length).toBe(1)

    // title value is expected
    const taskTitle = task.find('Title')
    expect(taskTitle.text()).toContain(title)
  })

  test(`Click 'complete' button`, () => {
    const onToggleComplete = jest.fn()
    const { wrapper } = setup({ onToggleComplete })
    const completeBtn = wrapper.find('ToggleButton').childAt(0)

    completeBtn.simulate('click')
    expect(onToggleComplete).toHaveBeenCalledTimes(1)
  })

  test(`Click 'remove' button`, () => {
    const onRemove = jest.fn()
    const { wrapper } = setup({ onRemove })
    const removeBtn = wrapper.find('RemoveButton').childAt(0)

    removeBtn.simulate('click')
    expect(onRemove).toHaveBeenCalledTimes(1)
  })
})
