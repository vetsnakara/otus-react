import React from 'react'
import { mount } from 'enzyme'

import Tasks from './Tasks'
import TaskList from '../TaskList'

import { getTasks } from '../../data'
import { findByDataAttr } from '../../../internals/testUtils'

describe('Tasks', () => {
  test('State is correct', () => {
    const tasks = getTasks({
      titles: ['One', 'Two', 'Three']
    })

    const wrapper = mount(<Tasks tasks={tasks} ListComponent={TaskList} />)

    expect(wrapper.instance().state).toEqual({ tasks })
  })

  test('Toggle task correct', () => {
    const tasks = getTasks({
      titles: ['One', 'Two', 'Three']
    })

    const wrapper = mount(<Tasks tasks={tasks} ListComponent={TaskList} />)

    const index = 1

    expect(wrapper.state('tasks')[index].completed).toBe(false)

    const spy = jest.spyOn(wrapper.instance(), 'handleToggleComplete')

    // https://github.com/enzymejs/enzyme/issues/365#issuecomment-362166762
    wrapper.instance().forceUpdate()

    const task = findByDataAttr(wrapper, 'task').at(index)
    const toggleButton = findByDataAttr(task, 'task-toggle-btn')

    // click to complete task
    toggleButton.simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(tasks[index].id)

    expect(wrapper.state('tasks')[index].completed).toBe(true)
  })

  test('Remove task correct', () => {
    const tasks = getTasks({
      titles: ['One', 'Two', 'Three']
    })

    const wrapper = mount(<Tasks tasks={tasks} ListComponent={TaskList} />)

    const index = 1

    const spy = jest.spyOn(wrapper.instance(), 'handleRemove')

    // https://github.com/enzymejs/enzyme/issues/365#issuecomment-362166762
    wrapper.instance().forceUpdate()

    const task = findByDataAttr(wrapper, 'task').at(index)
    const toggleButton = findByDataAttr(task, 'task-remove-btn')

    let stateTasks: Array<{ id: string }> = wrapper.state('tasks')
    expect(stateTasks.length).toBe(tasks.length)

    // click to remove
    toggleButton.simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(tasks[index].id)

    // length = length - 1
    stateTasks = wrapper.state('tasks')
    expect(stateTasks.length).toBe(tasks.length - 1)

    // no task with specified id
    expect(
      stateTasks.find((task) => task.id === tasks[index].id)
    ).toBeUndefined()
  })
})
