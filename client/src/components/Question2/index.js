import React from 'react'
import SubmissionBox from './SubmissionBox'

const Question2 = ({ques}) => {
    
    ques.sort(() => Math.random() - 0.5);
 return (
     <>
     <SubmissionBox q = {ques} />
     </>
 )
   
}

export default Question2;