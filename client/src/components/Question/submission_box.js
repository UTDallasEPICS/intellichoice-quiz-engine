import React, {useState} from 'react';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';
import Form from './form';
import './style.css'

const SubmissionBox = ({num1, num2, funct, answer, score}) => {
    
    const [results, setResults] = useState('');

    const updateAppState = (guess) => {
        answer = answer.toString();
        const correct = (answer === guess);
        if (correct) {
            score = score + 1;
            result = document.getElementById("result");
            result.innerHTML = "Excellent Work!";
            result.style.fontSize = "50px";
            result.style.fontWeight = "bold";
            result.style.color = "#4CAF50";
            setTimeout(function () {
              window.location.reload();
            }, 1000); 
            
            
        }
        else {
            setResults("Not quite, try again!");
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
                    <div className='result'>
                        {results}
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default SubmissionBox;


