import React from 'react'

function Joinscreen({start} ) {
  return (
    <div className='joinscreen'>
        <h2>Start Quiz</h2>
        <p>It has survived not only five centuries, but also the leap</p>
      <button onClick={start}>Start</button>
    </div>
  )
}

export default Joinscreen
