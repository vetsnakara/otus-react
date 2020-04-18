import type { TaskListItemData } from '../src/interfaces'

export const getTasks = ({
  titles,
  completed = false
}: {
  titles: string[]
  completed?: boolean
}): Array<TaskListItemData> => {
  return titles.map((title) => ({
    id: title,
    completed,
    title
  }))
}
