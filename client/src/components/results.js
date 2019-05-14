import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const Question = props => (
    <tr>
        <td>{props.question.quiz_question}</td>
        <td>{props.question.quiz_answer}</td>
        <td>{props.question.quiz_correctAnswer}</td>
    </tr>
);

class Results extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {questions: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/questions/')
              .then(response => {
                  this.setState({ questions: response.data });
              })
              .catch(function (error){
                  console.log(error);
              })
  }

  questionList() {
    return this.state.questions.map(function(currentQuestion,i){
      return <Question question={currentQuestion} key={i} />;
    })
  }

  render() {
    return (
      <div>
      <Button component={Link} to="/components/Quiz">BACK</Button>
      <h3> Questions List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }} >

      <thead>
      <tr>
      <th>Question</th>
      <th>Answer</th>
      <th>Correct Answer</th>
      </tr>
      </thead>

      <tbody>
      {this.questionList()}
      </tbody>

      </table>

      <br></br>
      </div>
    );
  }
}

export default Results;
