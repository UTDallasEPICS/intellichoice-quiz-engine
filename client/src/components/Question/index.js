import React from 'react'
import './style.css'
import SubmissionBox from './submission_box'
import answer_function from './functions/math_function'

const Question = ({symbol, max1, max2}) => {
const questionInfo = answer_function({max1, max2, symbol});

    return(
        <>
            <SubmissionBox num1={questionInfo[0]} num2={questionInfo[1]} funct={symbol} answer={questionInfo[2]}/>
        </>
    )
}

export default Question;