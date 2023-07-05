import React, { FC } from 'react'
import { TaskListType } from './TaskManagerFinal'
const List: FC<TaskListType> = (taskList) => {
  const { task, id } = taskList
  return (
    <div>
      <p>{task}</p>
    </div>
  )
}

export default List
