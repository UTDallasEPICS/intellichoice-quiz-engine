import React, {useState} from 'react'
import Banner from '../components/Banner'
import { Grid, Paper, Button, Divider } from '@material-ui/core';

export default function MultipleChoice({gradeLevel}){
    const questions = [
        {
            QuestionText: "6+4 = ?",
            answerOptions: [
                {answerText: '10', isCorrect: true},
                {answerText: '12', isCorrect: false},
                {answerText: '15', isCorrect: false},
                {answerText: '20', isCorrect: false},
            ],
            explain: '6 + 4 = 10',
        },
        {
            QuestionText: "2+4 = ?",
            answerOptions: [
                {answerText: '14', isCorrect: false},
                {answerText: '7', isCorrect: false},
                {answerText: '6', isCorrect: true},
                {answerText: '12', isCorrect: false},
            ],
            explain: '2 + 4 = 6',
        },
        {
            QuestionText: "9+12 = ?",
            answerOptions: [
                {answerText: '5', isCorrect: false},
                {answerText: '21', isCorrect: true},
                {answerText: '18', isCorrect: false},
                {answerText: '20', isCorrect: false},
            ],
            explain: '9 + 12 = 21',
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [score, setScore] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [showExplain, setExplain] = useState('');

    const handleAnswerButtonClick = (isCorrect) => {
        if(isCorrect === true){
            setScore(score + 1);
            setExplain('Great Work!!');
        } else {
          setExplain(questions[currentQuestion].explain);
        }      
    }

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        setExplain("");
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }

    return (
        <div>
            <Banner text="Multiple-Choice" color='#4CAF50'></Banner>    
            { showScore ? (
                <div className='result'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <Grid container style = {{height: '50vh', marginTop: '20px'}} justify="center" alignItems="center">
                    <Grid item xs={4}>
                        <Paper style = {{padding: '50px 50px 50px 50px'}} elevation={6}>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <h2><span>Question {currentQuestion + 1}</span>/{questions.length}</h2>
                                </div>
                                <div>
                                    <h2>{questions[currentQuestion].QuestionText}</h2>
                                    <Divider style ={{margin: '20px 0'}} />
                                </div>
                                    
                                <div>
                                    <h2>{showExplain}</h2>
                                </div>
                                <div>
                                    <button fullWidth variant="contained" color="inherit" style={{color: "white", background: "#4CAF50", height:"40px", marginTop: '10px'}} onClick={handleNextQuestion}>Next Question</button>
                                </div>
                            </div>  
                            <div className='answer-section'>                   
                                {questions[currentQuestion].answerOptions.map((anserOption) => (
                                    <Button fullWidth variant="contained" color="inherit" style={{color: "white", background: "#4CAF50", height:"40px", marginTop: '10px'}} onClick={() => handleAnswerButtonClick(anserOption.isCorrect)}>
                                        {anserOption.answerText} 
                                    </Button>))}           
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            )}
        </div>
    )
}