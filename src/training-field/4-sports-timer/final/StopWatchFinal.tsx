import React, { Reducer, useEffect, useReducer } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

type LapType = {
  hr: number
  min: number
  sec: number
  mil: number
}

type State = {
  time: number
  milliSec: number
  lap: LapType[]
}

type Action = {
  type: string
  payload?: number
}

const StopWatch = () => {
  const initialState: State = {
    time: 0,
    milliSec: 0,
    lap: [],
  }
  //  დავალება 1. მოხდეს ლაპების წაშლა რესეტზე დაჭერის დროს
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'start':
        return { ...state, time: state.time + 1000 }

      case 'stop':
        return { ...state, time: state.time = 0, milliSec: state.milliSec = 0 }
      case 'milli':
        return { ...state, milliSec: state.milliSec + (1 % 1000) }

      case 'lap':
        let total_seconds = Math.floor(state.time / 1000)
        let hr = Math.floor(total_seconds / 3600)
        let min = Math.floor((total_seconds % 3600) / 60)
        let sec = total_seconds % 60

        return {
          ...state,
          lap: state.lap.concat({ hr, min, sec, mil: state.milliSec }),
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState,
  )

  useEffect(() => {
    if (state.time > 0) {
      let timer = setInterval(() => {
        dispatch({ type: 'start' })
      }, 1000)
      let fastTimer = setInterval(() => {
        dispatch({ type: 'milli' })
      }, 10)
      return () => {
        clearInterval(timer)
        clearInterval(fastTimer)
      }
    }
  }, [state.time])

  const TimerHeader = ({
    time,
    MiliSecs,
  }: {
    time: number
    MiliSecs: number
  }): JSX.Element => {
    let total_seconds = Math.floor(time / 1000)
    let hours = Math.floor(total_seconds / 3600)
    let minutes = Math.floor((total_seconds % 3600) / 60)
    let seconds = total_seconds % 60

    return (
      <div className="time-wrapper">
        <h1 className="time-header">
          {hours < 10 ? '0' + hours : hours}:
          {minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
          <span style={{ fontSize: '1.5rem' }}>
            .{MiliSecs % 100 < 10 ? '0' + (MiliSecs % 100) : MiliSecs % 100}
          </span>
        </h1>
      </div>
    )
  }

  return (
    <section className=" dispaly-center ">
      <div className="watch-wrapper">
        {/* <div className="time-wrapper">
          <h1 className="time-header">{state.time}</h1>
        </div> */}
        <TimerHeader time={state.time} MiliSecs={state.milliSec} />
        <div className="btn-wrapper">
          <button
            onClick={() => dispatch({ type: 'stop' })}
            className="reset-btn"
          >
            RESET
          </button>
          <button
            onClick={() => dispatch({ type: 'start' })}
            className="start-btn"
          >
            START
          </button>
        </div>
        <div className="bottom-time">
          <AiOutlinePlusCircle
            onClick={() =>
              dispatch({
                type: 'lap',
              })
            }
            className="add-icon"
          />
          {/* დავალება 2. მოხდეს ავტომატური სქროლვა ქვემოთ როდესაც ახალი ლაპი დაემატება */}
          <div className="lap">
            {state.lap.map((val: LapType, index: number) => {
              const { hr, min, sec, mil } = val
              return (
                <h1 className="lap-time">
                  <span style={{ marginRight: '10px' }}>Lap {index + 1}</span>
                  {hr < 10 ? '0' + hr : hr}:{min < 10 ? '0' + min : min}:
                  {sec < 10 ? '0' + sec : sec}.
                  {mil % 100 < 10 ? '0' + (mil % 100) : mil % 100}
                </h1>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StopWatch
