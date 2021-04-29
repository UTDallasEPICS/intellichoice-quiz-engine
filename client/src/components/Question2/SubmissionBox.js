import React, {useState} from 'react';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';
import Form from './form';
//import './style.css'

import { TextField, Button } from '@material-ui/core';

/*
export default class SubmissionBox extends Question2{
    constructor(props) {
        this.state = { 
                       //subtopics: this.props.location.state.subtopics, 
                       topic: this.props.location.state.topic,
                       //grade: this.props.location.state.grade,
                       questions: this.props.location.state.questions,
                       subtopics: [],
                     
    }}
*/
console.log("here too");
const SubmissionBox = ({q}) => {
   
    const [index, setIndex] = useState(0);
    var i = 0;
    const updateAppState = (guess, answerIndex) => {
        //console.log(answer);
       // console.log(guess);
        
        var result; 
        var rightAnswer = q[answerIndex].correctAnswer;

       rightAnswer = rightAnswer.toString();

       let correct = (rightAnswer === guess);
        if (correct) {
            result = document.getElementById("result");
            result.style.display = "block";
            result.innerHTML = "Excellent Work!";
            result.style.fontSize = "50px";
            result.style.fontWeight = "bold";
            result.style.color = "#4CAF50";
            setTimeout(function () {
                //getQuestion(questionsArray);
                i++;

                //var q2Display = document.getElementById("anything");
                //q2Display.style.display = "initial";
                //window.location.reload();
                result.style.display = "none";
                if ((index + 1) < q.length)
                {
                    setIndex(index + 1);
                }
            }, 1000);
            
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
    
    function toggle()
    {
        for (var i = 0; i < questionsArray.length; i++)
        {
        var x = document.getElementById("query");
        if (x.style.display === "none")
        {
            x.style.display = "block";
        }
        else
        {
            x.style.display = "none";
        }
        }
    }
    //var i = 0;
    function test(i)
    {
        /*
        return (
       <>
       <Typography align="center" variant="h2" gutterBottom> Hello Shreya </Typography>
       </>
        )
        */
        var x = document.getElementById("query");
        x.style.display = "block";
    }

   
   //console.log(quizQuestion);
   
    return(
        <>
        
            <Grid container style = {{height: '50vh'}} justify="center" alignItems="center">
                <Grid item xs={4}>
                    <Paper style = {{padding: '50px 50px 5px 50px'}} elevation={6}>
                    
        
                       <Typography id = "query" align="center" variant="h2" gutterBottom> {getQuestion(index)}</Typography>  
                     <Divider style ={{margin: '20px 0'}} />
                     <Form returnGuessToApp={guess => updateAppState(guess, index)}/>
                         
                         
                        
                    
                    </Paper>
                </Grid>
            </Grid>

            <div id="result" style = {{margin: 'auto', align: 'center', textAlign: "center"}}>
            </div>
        </>
        
    )
   
}
export default SubmissionBox;


