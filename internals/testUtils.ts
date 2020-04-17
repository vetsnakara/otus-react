import { ShallowWrapper, ReactWrapper } from 'enzyme'

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

type Wrapper = ShallowWrapper | ReactWrapper

export const findByDataAttr = (wrapper: Wrapper, val: string) =>
  wrapper.find(`[data-test="${val}"]`)
