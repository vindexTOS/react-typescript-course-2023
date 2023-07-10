import React from 'react'

const StopWatch = () => {
  return (
    <section className=" dispaly-center ">
      <div className="watch-wrapper">
        <div className="time-wrapper">
          <h1>11:22:33</h1>
        </div>
        <div className="btn-wrapper">
          <button className="reset-btn">RESET</button>
          <button className="start-btn">START</button>
        </div>
      </div>
    </section>
  )
}

export default StopWatch
