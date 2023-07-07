import React, { FC, useState } from 'react'
import { TaskListType } from './TaskManagerFinal'
import List from './List'
type ToDoProps = {
  dropDown: boolean
  AddToList: () => void
  taskList: TaskListType[]
  setTask: React.Dispatch<React.SetStateAction<string>>
  task: string
  DeleteFromList: (id: number) => void
  EditList: (id: number) => void
  setEditText: React.Dispatch<React.SetStateAction<string>>
}
const ToDo: FC<ToDoProps> = ({
  dropDown,
  AddToList,
  taskList,
  setTask,
  task,
  DeleteFromList,
  EditList,
  setEditText,
}): JSX.Element => {
  const [inputDropDown, setInputDropDown] = useState<boolean>(false)
  return (
    <div className={` ${dropDown ? 'to-do-wrapper' : 'hidden'}   `}>
      <div className="list-wrapper">
        {taskList?.map((val: TaskListType) => (
          <List
            key={val.id}
            taskList={val}
            DeleteFromList={DeleteFromList}
            setEditText={setEditText}
            EditList={EditList}
          />
        ))}
      </div>

      <button
        onClick={() => setInputDropDown(!inputDropDown)}
        className={` ${dropDown ? 'to-do-btn' : 'btn-hidden'}   `}
      >
        + New task
      </button>

      <div className={` ${inputDropDown ? 'input-wrapper' : 'hidden'}   `}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task..."
          className="input-field"
        />
        <button onClick={AddToList} className="add-btn">
          Add
        </button>
      </div>
    </div>
  )
}

export default ToDo
