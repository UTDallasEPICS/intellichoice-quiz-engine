import React from 'react';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';
import Form from './form';
import './style.css'

const SubmissionBox = ({num1, num2, funct, answer}) => {
    
    const updateAppState = (guess) => {
        console.log(answer);
        console.log(guess);
        
        var result;
        const correct = (answer === guess);
        if (correct) {
            result = document.getElementById("result");
            result.innerHTML = "Excellent Work!";
            result.style.fontSize = "50px";
            result.style.fontWeight = "bold";
            result.style.color = "#4CAF50";
            window.location.reload();
        }
        else {
            result = document.getElementById("result");
            result.innerHTML = "Not quite, try again!";
            result.style.fontSize = "50px";
            result.style.fontWeight = "bold";
            result.style.color = "#C83131";
        }

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
