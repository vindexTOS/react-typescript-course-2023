import React, { Dispatch, useEffect, useReducer } from 'react'

type UserType = {
  name: string
  age: number
}[]

type State = {
  num: number
  user: UserType
}

type Action = {
  type: 'increase' | 'decrease' | 'add' | 'user'

  payload?: number | UserType
}

const userData = [
  { name: 'gio', age: 23 },
  { name: 'dato', age: 32 },
  { name: 'chainika', age: 66 },
]

const Usereducerfinal = () => {
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'increase':
        return { ...state, num: state.num + 1 }
      case 'decrease':
        return { ...state, num: state.num - 1 }
      case 'add':
        return { ...state, num: (action.payload as number) || 0 }
      case 'user':
        return { ...state, user: action.payload as UserType }
      default:
        return state
    }
  }

  useEffect(() => {
    dispatch({ type: 'user', payload: userData })
  }, [])

  const [state, dispatch] = useReducer(reducer, {
    num: 0,
    user: [],
  })

  return (
    <div className="dispaly-center">
      <button onClick={() => dispatch({ type: 'increase' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrease' })}>-</button>
      <input
        onChange={(e) =>
          dispatch({ type: 'add', payload: Number(e.target.value) })
        }
      />
      <p>{state.num}</p>

      <div>
        {/* დავალება, make val UserType  */}
        {state.user?.map((val: any) => {
          return (
            <div key={val.name}>
              <h1>{val.name}</h1>
              <h1>{val.age}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Usereducerfinal
