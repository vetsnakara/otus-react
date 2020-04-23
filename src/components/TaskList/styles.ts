import styled from '@emotion/styled'

/**
 * TaskListContainer
 */
export const TaskListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

TaskListContainer.displayName = 'TaskListContainer'

/**
 * TaskListItem
 */
export const TaskListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`

TaskListItem.displayName = 'TaskListItem'
