import React from 'react'

import { GlobalStyles } from './styles'

import { Tasks } from './components/Tasks'
import { TaskList } from './components/Tasks/components/TaskList'

import { getTasks } from 'data'

const tasks = getTasks({
  titles: ['One', 'Two', 'Three']
})

export const App = () => {
  return (
    <GlobalStyles>
      <div className="container">
        <Tasks tasks={tasks} ListComponent={TaskList} />
      </div>
    </GlobalStyles>
  )
}
