import React from 'react'

function Quizresult({result, retry}) {
  return (
    <div className='quizresult'>
      <h2> Result : {result.percentage}%</h2>
        <p>Selcted {result.correct} correct options out {result.total} questions.</p>
        <button onClick={retry}>Retry</button>
    </div>
  )
}

export default Quizresult
