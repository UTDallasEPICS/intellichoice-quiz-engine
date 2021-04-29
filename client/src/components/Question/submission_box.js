import React from 'react';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';
import Form from './form';
import './style.css'


<<<<<<< HEAD
    var result;
    answer = answer.toString();
    const correct = answer === guess;
    if (correct) {
      result = document.getElementById("result");
      result.innerHTML = "Excellent Work!";
      result.style.fontSize = "50px";
      result.style.fontWeight = "bold";
      result.style.color = "#4CAF50";
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    } else {
      result = document.getElementById("result");
      result.innerHTML = "Not quite, try again!";
      result.style.fontSize = "50px";
      result.style.fontWeight = "bold";
      result.style.color = "#C83131";
=======
const SubmissionBox = ({num1, num2, funct, answer, score}) => {
    
    const updateAppState = (guess) => {
        console.log(answer);
        console.log(guess);
        
        var result;
        answer = answer.toString();
        const correct = (answer === guess);
        if (correct) {
            score = score + 1;
            result = document.getElementById("result");
            result.innerHTML = "Excellent Work!";
            result.style.fontSize = "50px";
            result.style.fontWeight = "bold";
            result.style.color = "#4CAF50";
           
            
            
        }
        else {
            result = document.getElementById("result");
            result.innerHTML = "Not quite, try again!";
            result.style.fontSize = "50px";
            result.style.fontWeight = "bold";
            result.style.color = "#C83131";
        }
        
>>>>>>> b8e3d6c0f542e4ccf746393d238febcd4ba915eb
    }

    return(
        <>
            <Grid container style = {{height: '50vh'}} justify="center" alignItems="center">
                <Grid item xs={4}>
                    <Paper style = {{padding: '50px 50px 5px 50px'}} elevation={6}>
                        <Typography align="center" variant="h2" gutterBottom>What is {num1} {funct} {num2}?</Typography>
                        <Divider style ={{margin: '20px 0'}} />
                        <Form returnGuessToApp={guess => updateAppState(guess)}/>
                        
                    </Paper>
                </Grid>
            </Grid>
            
            <div id="result" style = {{margin: 'auto', align: 'center', textAlign: "center"}}>
            </div>
        </>
    )
}

export default SubmissionBox;


