import type { TaskListItemData } from 'types'

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
