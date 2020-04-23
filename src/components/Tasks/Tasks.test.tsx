import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import { Tasks } from './Tasks'
import { TaskList } from '../TaskList'

import { getTasks } from 'data'

const getTasksState = (wrapper: ReactWrapper) => {
  return wrapper.state('tasks') as Array<{ completed: boolean }>
}

describe('Tasks', () => {
  test('State is correct', () => {
    const tasks = getTasks({
      titles: ['One', 'Two', 'Three']
    })

    const wrapper = mount(<Tasks tasks={tasks} ListComponent={TaskList} />)

    expect(wrapper.instance().state).toEqual({ tasks })
  })

  test('NoTasksBox is rendered when no tasks passed', () => {
    const wrapper = mount(<Tasks tasks={[]} ListComponent={TaskList} />)
    expect(wrapper.find('TaskList').length).toBe(0)
    expect(wrapper.find('NoTasksBox').length).toBe(1)
  })

  test('Toggle task correct', () => {
    const tasks = getTasks({
      titles: ['One', 'Two', 'Three']
    })

    const spy = jest.spyOn(Tasks.prototype, 'handleToggleComplete')

    const wrapper = mount(<Tasks tasks={tasks} ListComponent={TaskList} />)

    const taskIndex = 1

    let tasksState = getTasksState(wrapper)
    expect(tasksState[taskIndex].completed).toBe(false)

    const toggleButton = wrapper
      .find('Task')
      .at(taskIndex)
      .find('ToggleButton')
      .childAt(0)

    // click to complete task
    toggleButton.simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(tasks[taskIndex].id)

    tasksState = getTasksState(wrapper)
    expect(tasksState[taskIndex].completed).toBe(true)
  })

  test('Remove task correct', () => {
    const tasks = getTasks({
      titles: ['One', 'Two', 'Three']
    })

    const spy = jest.spyOn(Tasks.prototype, 'handleRemove')

    const wrapper = mount(<Tasks tasks={tasks} ListComponent={TaskList} />)

    const taskIndex = 1

    const removeButton = wrapper
      .find('Task')
      .at(taskIndex)
      .find('RemoveButton')
      .childAt(0)

    let stateTasks: Array<{ id: string }> = wrapper.state('tasks')
    expect(stateTasks.length).toBe(tasks.length)

    // click to remove
    removeButton.simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(tasks[taskIndex].id)

    // length = length - 1
    stateTasks = wrapper.state('tasks')
    expect(stateTasks.length).toBe(tasks.length - 1)

    // no task with specified id
    expect(
      stateTasks.find((task) => task.id === tasks[taskIndex].id)
    ).toBeUndefined()
  })
})
