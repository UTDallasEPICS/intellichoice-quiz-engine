import React from 'react'
//import './style.css'
import SubmissionBox from './SubmissionBox'
//import answer_function from './functions/math_function'

const Question2 = ({ques}) => {
    
    ques.sort(() => Math.random() - 0.5);
 return (
     <>
     <SubmissionBox q = {ques} />
     </>
 )
   
}

export default Question2;