import React from 'react';

import { TextField, Button } from '@material-ui/core';

const Form = ({ returnGuessToApp }) => {
    const onSubmit = (event) => {
        event.preventDefault();

        const guess = (event.target.elements.guess.value);

           
        returnGuessToApp(guess);
    };

    return (
        <form style={{marginTop: '20px', marginBottom: '35px'}} onSubmit={onSubmit}>
            <TextField fullWidth type="number" color="secondary" name="guess" label="Enter your answer" style={{color:"purple", padding:"0px 0px 30px 0px"}}></TextField>
            <Button fullWidth variant="contained" color="inherit" type="submit" style={{color: "white", background: "#4CAF50", height:"40px"}}>Check Answer</Button>
        </form>
    )
}

export default Form;