import React, { useState } from 'react'
import QuestionList from './Data/data';
import Question from '../component/Question';
import Quizresult from '../component/Quizresult';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';


function Quizscreen( {retry}) {
    const [currentQuestionIndex , setcurrentQuestionIndex] = useState(0);
    const [MarkedAnswers , setMarkedAnswers ] = useState ( new Array (QuestionList . length));
    const isQuestionEnd = currentQuestionIndex === QuestionList.length;
    
    function calculateresult(){
      let correct = 0;
      QuestionList.forEach((Question, index)=> {
        if (Question.correctAns == MarkedAnswers[index]){
          correct ++; 
        }
      });
      return {
        total :QuestionList.length,
        correct: correct, percantage : Math.trunc ((correct / QuestionList.length) *100)  
      }
    }
    
    return (
    <div className='Quizscreen'>
    {
      isQuestionEnd ? (
        <Quizresult
        result = {calculateresult()}
        retry = {retry}/>
):(
        <Question
        Question = {QuestionList[currentQuestionIndex]}
        totalQuestions = {QuestionList.length}
        currentQuestion = {currentQuestionIndex +1}
        setAnswer = {(index)=>{
          setMarkedAnswers((arr)=> {
            let newArr = [...arr];
            newArr[currentQuestionIndex]= index;
            return newArr;
          });
          setcurrentQuestionIndex(currentQuestionIndex+1);

        } }
        />
      )
    }      
    </div>
  )
}

export default Quizscreen
