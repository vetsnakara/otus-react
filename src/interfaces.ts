export interface TaskData {
  /**
   * task title
   */
  title: string
  /**
   * task completed flag
   */
  completed?: boolean
}

export interface TaskActions {
  /**
   * Complete task callback
   */
  onToggleComplete: () => void
  /**
   * Remove task callback
   */
  onRemove: () => void
}

export interface TaskProps extends TaskActions {
  /**
   * Task data (without ID)
   */
  task: TaskData
}

export interface TaskListItemData extends TaskData {
  /**
   * Task ID
   */
  id: string
}

export interface TaskListActions {
  /**
   * Complete task callback
   */
  onToggleComplete: (id: string) => void
  /**
   * Remove task callback
   */
  onRemove: (id: string) => void
}

export interface TaskListProps extends TaskListActions {
  /**
   * List of tasks
   */
  tasks?: Array<TaskListItemData>
}
