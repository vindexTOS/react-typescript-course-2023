import React, { useState } from 'react'
import ToDo from './ToDo'
import { AiOutlineBars } from 'react-icons/ai'

export type TaskListType = {
  task: string
  id: string
}

const TaskManagerFinal = () => {
  const [dropDown, setDropDown] = useState<boolean>(false)
  const [task, setTask] = useState<string>('')
  const [taskList, setTaskList] = useState<TaskListType[]>([])
  const [error, setError] = useState<string>('')
  const AddToList = (): void => {
    if (task) {
      let id = String(Math.random() * 2000)
      setTaskList([...taskList, { task, id }])
      setTask('')
    } else {
      setError('Please Input The Task')
      setTimeout(() => {
        setError('')
      }, 2000)
    }
  }
  return (
    <section className="task-body">
      <div className="to-do-list">
        <div onClick={() => setDropDown(!dropDown)} className="drop-down-div">
          <AiOutlineBars className="bar-icon" />
          <h1>Things to do...</h1>
        </div>
        <ToDo
          AddToList={AddToList}
          taskList={taskList}
          setTask={setTask}
          task={task}
          dropDown={dropDown}
        />
      </div>
    </section>
  )
}

export default TaskManagerFinal
