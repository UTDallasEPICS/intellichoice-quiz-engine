import React from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

class AddSub extends React.Component
{
  state = {
    question:'',
    answer:''
  };


  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newQuestion = {
      quiz_question: this.state.question,
      quiz_answer: this.state.answer
    };

    axios.post('http://localhost:4000/questions/add',newQuestion)
      .then(res => console.log(res.data));

    this.setState({
      question:'',
      answer:''
    })
  };

  render() {
    return (

      <form autoComplete="off">
      <MuiThemeProvider>
      <Button component={Link} to="/components/Quiz">BACK</Button>
      <h1 align="center">ADDITION AND SUBTRACTION QUIZ</h1>
      <TextField
        id="standard-full-width"
        floatingLabelText="Question"
        style={{ margin: 8 }}
        fullWidth
        value={this.state.question}
        onChange={this.handleChange('question')}
        margin="normal"
      />

      <TextField
          id="standard-bare"
          floatingLabelText="Answer"
          style={{ margin: 8 }}
          value={this.state.answer}
          onChange={this.handleChange('answer')}
          margin="normal"
      />

      <br></br>
      <br></br>
      <Button onClick={this.handleSubmit}>SUBMIT</Button>
      </MuiThemeProvider>
      </form>
    );
  }
}

export default AddSub;
