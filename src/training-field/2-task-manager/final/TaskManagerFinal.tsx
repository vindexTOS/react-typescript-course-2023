import React, { useState } from 'react'
import ToDo from './ToDo'
import { AiOutlineBars } from 'react-icons/ai'

export type TaskListType = {
  task: string
  id: number
}

const TaskManagerFinal = () => {
  const [dropDown, setDropDown] = useState<boolean>(false)
  const [task, setTask] = useState<string>('')
  const [taskList, setTaskList] = useState<TaskListType[]>([])
  const [error, setError] = useState<string>('')
  const [editText, setEditText] = useState<string>('')
  const AddToList = (): void => {
    if (task) {
      let id = Math.random() * 2000
      setTaskList([...taskList, { task, id }])
      setTask('')
    } else {
      setError('Please Input The Task')
      setTimeout(() => {
        setError('')
      }, 2000)
    }
  }

  const DeleteFromList = (id: number): void => {
    let newList = taskList.filter((val: TaskListType) => val.id !== id)
    setTaskList(newList)
  }

  const EditList = (id: number): void => {
    if (editText) {
      let newList = taskList.map((val: TaskListType) => {
        if (id === val.id) {
          val.task = editText
        }
        return val
      })

      setTaskList(newList)
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
          DeleteFromList={DeleteFromList}
          setEditText={setEditText}
          EditList={EditList}
        />
      </div>
    </section>
  )
}

export default TaskManagerFinal
