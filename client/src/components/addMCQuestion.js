import React, { Component} from 'react';
import axios from 'axios';

export default class addMCQuestion extends Component {
    constructor(props){
        super(props);
        this.onChangeTopic = this.onChangeTopic.bind(this);
        this.onChangeSubtopic = this.onChangeSubtopic.bind(this);
        this.onChangeProblem = this.onChangeProblem.bind(this);
        this.onChangeCorrectAnswer= this.onChangeCorrectAnswer.bind(this);
        this.onChangeWrongAnswer1= this.onChangeWrongAnswer1.bind(this);
        this.onChangeWrongAnswer2= this.onChangeWrongAnswer2.bind(this);
        this.onChangeWrongAnswer3= this.onChangeWrongAnswer3.bind(this);
        this.onChangeHint= this.onChangeHint.bind(this);
        this.onChangeDifficulty = this.onChangeDifficulty.bind(this);
        this.onChangeGradeLevel = this.onChangeGradeLevel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            topic: '',
            subtopic: '',
            problem: '',
            correctAnswer: '', 
            difficulty: '',
            gradeLevel: ''

        }

    }
    
    onChangeTopic(e){
        this.setState({
            topic: e.target.value
        });
    }
    onChangeSubtopic(e){
        this.setState({
            subtopic: e.target.value
        });
    }
    onChangeProblem(e){
        this.setState({
            problem: e.target.value
        });
    }
    onChangeCorrectAnswer(e){
        this.setState({
            correctAnswer: e.target.value
        });
    }
    onChangeWrongAnswer1(e){
        this.setState({
            wrongAnswer1: e.target.value
        });
    }
    onChangeWrongAnswer2(e){
        this.setState({
            wrongAnswer2: e.target.value
        });
    }
    onChangeWrongAnswer3(e){
        this.setState({
            wrongAnswer3: e.target.value
        });
    }
    onChangeHint(e){
        this.setState({
            hint: e.target.value
        });
    }
    onChangeDifficulty(e){
        this.setState({
            difficulty: e.target.value
        });
    }
    onChangeGradeLevel(e){
        this.setState({
            gradeLevel: e.target.value
        });
    }


    onSubmit(e){
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Question Topic: ${this.state.topic}`);
        console.log(`Question Subtopic: ${this.state.Subtopic}`);
        console.log(`Question Problem: ${this.state.problem}`);
        console.log(`Question Correct Answer: ${this.state.correctAnswer}`);
        console.log(`Question Wrong Answer 1: ${this.state.wrongAnswer1}`);
        console.log(`Question Wrong Answer 2: ${this.state.wrongAnswer2}`);
        console.log(`Question Wrong Answer 3: ${this.state.wrongAnswer3}`);
        console.log(`Question Hint: ${this.state.hint}`);
        console.log(`Question Difficulty: ${this.state.difficulty}`);
        console.log(`Question Grade Level: ${this.state.gradeLevel}`);

        /****************************connecting to backend****************** */

        const newMCQuestion = {
            topic: this.state.topic,
            subtopic: this.state.subtopic,
            problem: this.state.problem,
            correctAnswer: this.state.correctAnswer,
            wrongAnswer1: this.state.wrongAnswer1,
            wrongAnswer2: this.state.wrongAnswer2,
            wrongAnswer3: this.state.wrongAnswer3,
            hint: this.state.hint,
            difficulty: this.state.difficulty,
            gradeLevel: this.state.gradeLevel,
            
        }

        axios.post('http://localhost:3000/api/mcquestions', newMCQuestion)
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            });

        /***********************************************************************/
        this.setState ({
            topic: '',
            subtopic: '',
            problem: '',
            correctAnswer: '',
            wrongAnswer1: '',
            wrongAnswer2: '',
            wrongAnswer3: '',
            hint: '',
            difficulty: '',
            gradeLevel: ''

        })

    }
    render(){
        return (
            <div style={{marginTop: 20}}>
                <h3>Add new question</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Topic: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.topic}
                            onChange={this.onChangeTopic}/>
                    </div>
                    <div className="form-group">
                    <label>Subtopic: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.subtopic}
                            onChange={this.onChangeSubtopic}/>
                    </div>
                    <div className="form-group">
                    <label>Problem: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.problem}
                            onChange={this.onChangeProblem}/>
                    </div>
                    <div className="form-group">
                    <label>Correct Answer: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.correctAnswer}
                            onChange={this.onChangeCorrectAnswer}/>
                    </div>
                    <div className="form-group">
                    <label>Wrong Answer 1: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.wrongAnswer1}
                            onChange={this.onChangeWrongAnswer1}/>
                    </div>
                    <div className="form-group">
                    <label>Wrong Answer 2: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.wrongAnswer2}
                            onChange={this.onChangeWrongAnswer2}/>
                    </div>
                    <div className="form-group">
                    <label>Wrong Answer 3: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.wrongAnswer3}
                            onChange={this.onChangeWrongAnswer3}/>
                    </div>
                    <div className="form-group">
                    <label>Hint: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.hint}
                            onChange={this.onChangeHint}/>
                    </div>
                    <div className="form-group">
                    <label>Difficulty: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.difficulty}
                            onChange={this.onChangeDifficulty}/>
                    </div>
                  
                    <div className="form-group">
                    <label>Grade Level: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.gradeLevel}
                            onChange={this.onChangeGradeLevel}/>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Create Question"
                               className="btn btn-primary"/>

                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Create Question"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )

    }





}