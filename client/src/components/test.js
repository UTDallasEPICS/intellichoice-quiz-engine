import React from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

const Question = props => (
    <tr>
        <td>{props.questions.quiz_question}</td>
        <td>{props.questions.quiz_answer}</td>
        <td>{props.questions.quiz_correctAnswer}</td>
    </tr>
);

class Test extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      quiz_question:'',
      quiz_correctAnswer:''
    };
  }

  componentDidMount() {
        axios.get('http://localhost:4000/questions/5cc8ea6e35f6c4603880519c')
            .then(response => {
                this.setState({
                  quiz_question:response.data.quiz_question,
                  quiz_correctAnswer:response.data.quiz_correctAnswer
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

  render() {
    return (
      <div>
      <Button component={Link} to="/components/Quiz">BACK</Button>
      <header>
      <br></br>
      </header>

      <MuiThemeProvider>

      <p>{this.state.quiz_question}</p>
      <p>{this.state.quiz_correctAnswer}</p>

      </MuiThemeProvider>
      </div>
    );
  }
}

export default Test;
