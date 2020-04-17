/**
 * Task
 */
export interface TaskData {
  title: string
  completed?: boolean
}

export interface TaskActions {
  onToggleComplete: () => void
  onRemove: () => void
}

export interface TaskProps extends TaskActions {
  task: TaskData
}

/**
 * TaskList
 */
export interface TaskListItemData extends TaskData {
  id: string
}

export interface TaskListActions {
  onToggleComplete: (id: string) => void
  onRemove: (id: string) => void
}

export interface TaskListProps extends TaskListActions {
  tasks?: Array<TaskListItemData>
}
