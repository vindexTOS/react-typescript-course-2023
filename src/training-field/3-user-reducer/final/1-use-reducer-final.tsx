import React, { Dispatch, useReducer } from 'react'

type State = {
  num: number
}

type Action = {
  type: 'increase' | 'decrease' | 'add'
  payload?: number
}

const Usereducerfinal = () => {
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'increase':
        return { ...state, num: state.num + 1 }
      case 'decrease':
        return { ...state, num: state.num - 1 }
      case 'add':
        return { ...state, num: state.num = action.payload || 0 }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    num: 0,
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
    </div>
  )
}

export default Usereducerfinal
