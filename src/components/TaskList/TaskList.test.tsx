import React from 'react'
import { shallow, mount } from 'enzyme'

import type { TaskListProps } from '../../interfaces'

import TaskList from './TaskList'

import { findByDataAttr } from '../../../internals/testUtils'
import { getTasks } from '../../data'

interface SetupProps extends Partial<TaskListProps> {
  useMount?: boolean
}

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
  test('Renders correctly without tasks', () => {
    const wrapper = setup()

    const noTasksMsg = findByDataAttr(wrapper, 'task-list-empty')
    expect(noTasksMsg.length).toBe(1)

    const taskList = findByDataAttr(wrapper, 'task-list')
    expect(taskList.length).toBe(0)
  })

  test('All tasks are rendered correctly', () => {
    const tasks = getTasks({ titles: ['One', 'Two', 'Three'] })
    const wrapper = setup({ tasks })

    const items = findByDataAttr(wrapper, 'task-list-item')
    expect(items.length).toBe(tasks.length)
  })

  test('Toggle/remove callbacks are called correctly', () => {
    const tasks = getTasks({ titles: ['One'] })
    const { id: firstTaskId } = tasks[0]

    const onToggleComplete = jest.fn()
    const onRemove = jest.fn()

    const wrapper = setup({
      useMount: true,
      tasks,
      onToggleComplete,
      onRemove
    })

    const firstTask = findByDataAttr(wrapper, 'task').first()

    const toggleBtn = findByDataAttr(firstTask, 'task-toggle-btn')
    toggleBtn.simulate('click')
    expect(onToggleComplete).toHaveBeenCalledTimes(1)
    expect(onToggleComplete).toHaveBeenCalledWith(firstTaskId)

    const removeBtn = findByDataAttr(firstTask, 'task-remove-btn')
    removeBtn.simulate('click')
    expect(onRemove).toHaveBeenCalledTimes(1)
    expect(onRemove).toHaveBeenCalledWith(firstTaskId)
  })
})
