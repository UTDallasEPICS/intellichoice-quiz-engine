import React, { Component} from 'react';
import axios from 'axios';

/**
 * Temporary form to add questions to database from frontend of website. 
 * Used to test frontend to database connection. Input is not validated. */

export default class addQuestion extends Component {
    constructor(props){
        super(props);
        this.onChangeTopic = this.onChangeTopic.bind(this);
        this.onChangeSubtopic = this.onChangeSubtopic.bind(this);
        this.onChangeProblem = this.onChangeProblem.bind(this);
        this.onChangeCorrectAnswer= this.onChangeCorrectAnswer.bind(this);
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
        console.log(`Question Difficulty: ${this.state.difficulty}`);
        console.log(`Question Grade Level: ${this.state.gradeLevel}`);

        /****************************connecting to backend****************** */

        const newQuestion = {
            topic: this.state.topic,
            subtopic: this.state.subtopic,
            problem: this.state.problem,
            correctAnswer: this.state.correctAnswer,
            difficulty: this.state.difficulty,
            gradeLevel: this.state.gradeLevel,
            
        }

        axios.post('http://localhost:3000/api/questions', newQuestion)
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
                </form>
            </div>
        )

    }





}