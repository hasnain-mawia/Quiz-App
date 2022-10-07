import {useState, useEffect , useRef} from "react";
import {flushSync} from 'react-dom';


function Question({
    Question,totalQuestions , currentQuestion, setAnswer
}) {
const[selectedOptions, setselectedOption] = useState (null);
const timer = useRef(null);
const progressBar = useRef(null);
return(

function gotoNextQuestion(){
if(timer.current){
    clearTimeout(timer.current);
}
flushSync(()=> {
    setAnswer(selectedOptions);
});
setselectedOption(null);    

useEffect(()=>{
progressBar.current.classlist.remove('active');
setTimeout(()=>{
progressBar.current.classlist.add('active');
},0);
timer.current = setTimeout(gotoNextQuestion, 10*1000);
return gotoNextQuestion;

},[Question])}); 

return (
<div  className="question">
<div className="progressbar" ref={progressbar}></div>
<div className="Questioncount"><b>{currentQuestion}</b> of 
<b>{totalQuestion}</b></div>
<div className="main">
<div className="title">
    <span>Question</span>
    <p>{Question.title}</p>
</div>
<div className="options">
{
    Question.options.map ((option , index)=> {
        return(
            <div className={index == selectedOptions ? 'option active' : 'option'} key= {index}>
              onClick= {()=> setselectedOption (index)}     
              {
                option
              }</div>
        );
    })
}
</div>
</div>
<div className="control">
    <button onClick={gotoNextQuestion}>Next</button>
</div>
</div>

);
}

export default Question
