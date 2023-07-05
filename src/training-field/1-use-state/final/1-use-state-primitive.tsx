import React, { useState } from 'react'

type UsersType = {
  name: string
  age: number
}

const UseStatePrimitive = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState<number>(0)

  const [users, setUser] = useState<UsersType[]>([])

  const AddUser = (): void => {
    setUser([...users, { name, age }])
    setName('')
    setAge(0)
  }

  return (
    <div className="dispaly-center">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Age"
      />
      <button onClick={AddUser}>Submit</button>
      {/* <div className="div-wrapper">
        <span>Name: {name}</span>
        <span>Age:{age}</span>
      </div> */}
      {users?.map((val: UsersType) => (
        <div className="div-wrapper">
          <span>Name: {val.name}</span>
          <span>Age:{val.age}</span>
        </div>
      ))}
    </div>
  )
}

export default UseStatePrimitive
