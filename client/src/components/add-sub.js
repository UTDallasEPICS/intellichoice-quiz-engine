import React from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

class AddSub extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      question:'',
      correct:'',
      answer:''
    };
  }

  componentDidMount() {
        axios.get('http://localhost:4000/questions/5cc8ea6e35f6c4603880519c')
            .then(response => {
                this.setState({
                  question:response.data.quiz_question,
                  correct:response.data.quiz_correctAnswer
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newQuestion = {
      quiz_answer: this.state.answer
    };

    axios.post('http://localhost:4000/questions/update/5cc8ea6e35f6c4603880519c',newQuestion)
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
      <p>
      {this.state.question}
      </p>

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
