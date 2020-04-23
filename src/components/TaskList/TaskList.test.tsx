import React from 'react'
import { shallow, mount } from 'enzyme'

import type { TaskListProps } from 'types'

import { TaskList } from './TaskList'

import { getTasks } from 'data'

interface SetupProps extends Partial<TaskListProps> {
  useMount?: boolean
}

/**
 * TaskList wrapper factory function
 */
const setup = ({
  tasks,
  onToggleComplete = jest.fn(),
  onRemove = jest.fn(),
  useMount = false
}: SetupProps = {}) => {
  const setupProps: TaskListProps = {
    tasks,
    onToggleComplete,
    onRemove
  }

  return useMount
    ? mount(<TaskList {...setupProps} />)
    : shallow(<TaskList {...setupProps} />)
}

describe('TaskList', () => {
  test('Nothing is rendered if no tasks passed', () => {
    const wrapper = setup()
    const taskList = wrapper.find('TaskListContainer')
    expect(taskList.length).toBe(0)
  })

  test('All tasks are rendered correctly', () => {
    const tasks = getTasks({ titles: ['One', 'Two', 'Three'] })

    const onToggleComplete = jest.fn()
    const onRemove = jest.fn()

    const wrapper = setup({ tasks, onToggleComplete, onRemove, useMount: true })

    // item elements are rendered
    const items = wrapper.find('TaskListItem')
    expect(items.length).toBe(tasks.length)
  })

  test('Toggle callback is called properly', () => {
    const tasks = getTasks({ titles: ['One'] })
    const { id: firstTaskId } = tasks[0]

    const onToggleComplete = jest.fn()

    const wrapper = setup({
      useMount: true,
      tasks,
      onToggleComplete
    })

    const toggleBtn = wrapper
      .find('Task')
      .first()
      .find('ToggleButton')
      .childAt(0)

    toggleBtn.simulate('click')

    expect(onToggleComplete).toHaveBeenCalledTimes(1)
    expect(onToggleComplete).toHaveBeenCalledWith(firstTaskId)
  })

  test('Remove callback is called properly', () => {
    const tasks = getTasks({ titles: ['One'] })
    const { id: firstTaskId } = tasks[0]

    const onRemove = jest.fn()

    const wrapper = setup({
      useMount: true,
      tasks,
      onRemove
    })

    const removeBtn = wrapper
      .find('Task')
      .first()
      .find('RemoveButton')
      .childAt(0)

    removeBtn.simulate('click')

    expect(onRemove).toHaveBeenCalledTimes(1)
    expect(onRemove).toHaveBeenCalledWith(firstTaskId)
  })
})
