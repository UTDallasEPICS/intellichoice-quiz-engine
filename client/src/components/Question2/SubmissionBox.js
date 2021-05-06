import React, {useEffect, useState} from 'react';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';
import Form from './form';

import { TextField, Button } from '@material-ui/core';
const SubmissionBox = ({q}) => {
   console.log(q);
    const [index, setIndex] = useState(0);
    
    const updateAppState = (guess, answerIndex) => {
        
        var result; 
        var rightAnswer = q[answerIndex].correctAnswer;

       rightAnswer = rightAnswer.toString();

       let correct = (rightAnswer === guess);
        if (correct) {
            guess = null;
            result = document.getElementById("result");
            result.style.display = "block";
            result.innerHTML = "Excellent Work!";
            result.style.fontSize = "50px";
            result.style.fontWeight = "bold";
            result.style.color = "#4CAF50";
            
        }
        else {
            result = document.getElementById("result");
            result.style.display = "block";
            result.innerHTML = "Not quite, try again!";
            result.style.fontSize = "50px";
            result.style.fontWeight = "bold";
            result.style.color = "#C83131";
        }

    }
    
   var questionsArray = q;
   var generatedNumber;
   
    function getQuestion(j){
        console.log(questionsArray);
        //generatedNumber = Math.floor(Math.random() * questionsArray.length);
     
        var quizQuestion = q[j].problem;
        //remove the question selected for next time

        return quizQuestion;
    }

   
    return(
        <>
        
            <Grid container style = {{height: '50vh'}} justify="center" alignItems="center">
                <Grid item xs={4}>
                    <Paper style = {{padding: '50px 50px 90px 50px'}} elevation={6}>
                    
                       <Typography id = "query" align="center" variant="h2" gutterBottom> {getQuestion(index)}</Typography>  
                     <Divider style ={{margin: '20px 0'}} />
                     <Form returnGuessToApp={guess => updateAppState(guess, index)}/>
                        
                             <Button fullWidth variant="contained" color="inherit" style={{color: "white", background: "#4CAF50", height:"40px", width:"200px", float:"right", marginTop:"20px"}} onClick={()=>{
                                setTimeout(function() {
                                    var result = document.getElementById("result");
                                    result.style.display = "none";
                                 
                
                                    if ((index + 1) < q.length)
                                    {
                                        setIndex(index + 1);
                                 }
                                 else
                                    {
                                        window.location.reload();
                                 }
                                 document.getElementById("form1").reset();
                                }, 0);
                            }}>Next Question</Button>
                         
                    
                    </Paper>
                </Grid>
            </Grid>

            <div id="result" style = {{margin: 'auto', align: 'center', textAlign: "center"}}>
            </div>
        </>
        
    )
   
}
export default SubmissionBox;


