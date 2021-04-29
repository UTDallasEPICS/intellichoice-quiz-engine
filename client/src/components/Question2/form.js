import React from 'react';

import { TextField, Button } from '@material-ui/core';

const Form = ({ returnGuessToApp }) => {
   
    const onSubmit = (event) => {
        
        event.preventDefault();
       // guess2.style.display = "block";
        const guess = (event.target.elements.guess.value);
        //guess2.contentWindow.location.reload(true);
        var guess2 = document.getElementById("guess");
        var content = guess2.innerHTML;
        guess2.innerHTML = content;
        returnGuessToApp(guess);
    }; 


    

    return (
        <form style={{marginTop: '20px', marginBottom: '35px'}} onSubmit={onSubmit}>
            <TextField fullWidth color="secondary" id = "guess" name="guess" label="Enter your answer" style={{color:"purple", padding:"0px 0px 30px 0px"}}></TextField>
            <Button fullWidth variant="contained" color="inherit" type="submit" style={{color: "white", background: "#4CAF50", height:"40px"}}>Check Answer</Button>
        </form>
    )
}


export default Form;