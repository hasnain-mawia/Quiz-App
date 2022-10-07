import React from 'react'
import {useState} from 'react'
import Quizscreen from './component/Quizscreen.js'
import JoinScreen from './component/Joinscreen.js'
import Navbar from './component/Navbar.js'



function App() {
  const [isQuizstarted , setisQuizstarted] = useState(false);
return (
     <>
    <Navbar />
    <div className='quiz-contaibner'>{
    isQuizstarted ? (
      <Quizscreen retry= {()=> setisQuizstarted(false)}/>  ) : ( 
      <JoinScreen start= {()=> setisQuizstarted(true)}/>
    )}
    </div>



    </>
  )
}

export default App
