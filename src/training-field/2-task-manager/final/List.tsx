import React, { FC, useState } from 'react'
import { TaskListType } from './TaskManagerFinal'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { VscSave } from 'react-icons/vsc'
type ListPropType = {
  taskList: TaskListType
  DeleteFromList: (id: number) => void

  setEditText: React.Dispatch<React.SetStateAction<string>>
  EditList: (id: number) => void
}

const List: FC<ListPropType> = ({
  taskList,
  DeleteFromList,
  setEditText,
  EditList,
}) => {
  const { task, id } = taskList
  const [isEdit, setIsEdit] = useState<boolean>(false)
  return (
    <div className="single-list">
      {isEdit ? (
        <div>
          <input
            className="edit-input"
            placeholder={task}
            onChange={(e) => setEditText(e.target.value)}
          />
        </div>
      ) : (
        <div className="task">
          <p>{task}</p>
        </div>
      )}
      <div className="icon-wrapper">
        <BsFillTrash3Fill
          className="trash"
          onClick={() => DeleteFromList(id)}
        />
        {isEdit ? (
          <VscSave
            className="save"
            onClick={() => {
              EditList(id), setIsEdit(!isEdit)
            }}
          />
        ) : (
          <AiFillEdit className="edit" onClick={() => setIsEdit(!isEdit)} />
        )}
      </div>
    </div>
  )
}

export default List
