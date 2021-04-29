import React from 'react'
//import './style.css'
import SubmissionBox from './SubmissionBox'
//import answer_function from './functions/math_function'

const Question2 = ({ques}) => {
    console.log(ques);

    /*
    for (var i = 0; i < ques.length; i++)
    {
        var singleQuestion = ques[i];
        console.log(singleQuestion);
    }
    */
   
    /*
    return(
        <>
        {ques.map(function(ques, i){
            console.log("got here");
            <SubmissionBox id = "test" q = {ques[i]} />
            
        })}
        </>
    )
  */
 return (
     <>
     <SubmissionBox id = "test" q = {ques} />
     </>
 )
   
}

export default Question2;