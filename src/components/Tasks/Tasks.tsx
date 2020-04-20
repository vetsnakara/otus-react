import React, { Component } from 'react'

import type { TaskListProps, TaskListItemData } from '../../interfaces'

import Icon from '../SVGIcon'

import './styles.scss'

type ListComponentInterface = React.FC<TaskListProps>

interface TasksProps {
  tasks: Array<TaskListItemData>
  ListComponent: ListComponentInterface
}

interface TasksState {
  tasks: Array<TaskListItemData>
}

class Tasks extends Component<TasksProps, TasksState> {
  private ListComponent: ListComponentInterface

  constructor(props: TasksProps) {
    super(props)

    this.ListComponent = props.ListComponent

    this.state = {
      tasks: props.tasks
    }

    this.handleToggleComplete = this.handleToggleComplete.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleToggleComplete(id: string) {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    }))
  }

  handleRemove(id: string) {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => task.id !== id)
    }))
  }

  render() {
    const { tasks } = this.state
    const ListComponent = this.ListComponent

    if (tasks.length === 0) {
      return (
        <section className="tasks__no-tasks-box" data-test="no-tasks-message">
          <div className="tasks__no-tasks-icon">
            <Icon name="check" />
          </div>
          <h2 className="tasks__no-tasks-title">You have no tasks</h2>
          <p className="tasks__no-tasks-subtitle">Sit back and relax</p>
        </section>
      )
    }

    return (
      <ListComponent
        tasks={tasks}
        onToggleComplete={this.handleToggleComplete}
        onRemove={this.handleRemove}
      />
    )
  }
}

export default Tasks
