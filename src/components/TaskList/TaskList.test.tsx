import React from 'react'
import { shallow, mount } from 'enzyme'

import type { TaskListProps } from '../../interfaces'

import Task from '../Task'
import TaskList from './TaskList'

import { findByDataAttr } from '../../../internals/testUtils'
import { getTasks } from '../../data'

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
    const taskList = findByDataAttr(wrapper, 'task-list')
    expect(taskList.length).toBe(0)
  })

  test('All tasks are rendered correctly', () => {
    const tasks = getTasks({ titles: ['One', 'Two', 'Three'] })

    const onToggleComplete = jest.fn()
    const onRemove = jest.fn()

    const wrapper = setup({ tasks, onToggleComplete, onRemove, useMount: true })

    // root element is rendered
    const list = findByDataAttr(wrapper, 'task-list')
    expect(list.length).toBe(1)

    // item elements are rendered
    const items = findByDataAttr(wrapper, 'task-list-item')
    expect(items.length).toBe(tasks.length)

    // each task gets correct props
    items.forEach((item, i) => {
      const task = item.find(Task)
      expect(task.props()).toHaveProperty('task', tasks[i])

      // ! don't work...
      // expect(task.prop('onToggleComplete')).toBe(onToggleComplete)
      // expect(task.prop('onRemove')).toBe(onRemove)
    })
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

    const firstTask = findByDataAttr(wrapper, 'task').first()
    const toggleBtn = findByDataAttr(firstTask, 'task-toggle-btn')

    toggleBtn.simulate('click')
    expect(onToggleComplete).toHaveBeenCalledTimes(1)
    expect(onToggleComplete).toHaveBeenCalledWith(firstTaskId)
  })

  test('Toggle callback is called properly', () => {
    const tasks = getTasks({ titles: ['One'] })
    const { id: firstTaskId } = tasks[0]

    const onRemove = jest.fn()

    const wrapper = setup({
      useMount: true,
      tasks,
      onRemove
    })

    const firstTask = findByDataAttr(wrapper, 'task').first()
    const removeBtn = findByDataAttr(firstTask, 'task-remove-btn')

    removeBtn.simulate('click')
    expect(onRemove).toHaveBeenCalledTimes(1)
    expect(onRemove).toHaveBeenCalledWith(firstTaskId)
  })
})
