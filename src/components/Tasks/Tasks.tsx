import React, { Component } from 'react'

import type { TaskListProps, TaskListItemData } from '../../interfaces'

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
  }

  handleToggleComplete = (id: string) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    }))
  }

  handleRemove = (id: string) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => task.id !== id)
    }))
  }

  render() {
    const { tasks } = this.state
    const ListComponent = this.ListComponent

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
