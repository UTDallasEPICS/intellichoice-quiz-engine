import React, { Component} from 'react';
import axios from 'axios';

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
                    <select class = "form-control" st = "subtopic">
                        <option value = "Addition">Addition</option>
                        <option value = "Subtraction">Subtraction</option>
                        <option value = "Multiplication">Multiplication</option>
                        <option value = "Division">Division</option>
                        <option value = "Fraction">Fraction</option>
                        <option value = "Decimal">Decimal</option>
                    </select>
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
                    <select class = "form-control" difficulty = "difficulty">
                        <option value = "Easy">Easy</option>
                        <option value = "Medium">Medium</option>
                        <option value = "Hard">Hard</option>
                    </select>
                    </div>
                    <div className="form-group">
                    <label>Grade Level: </label>
                    <select class = "form-control" gradeLevel = "gradelevel">
                        <option value = "Kinder">K</option>
                        <option value = "first">1</option>
                        <option value = "second">2</option>
                        <option value = "third">3</option>
                        <option value = "fourth">4</option>
                        <option value = "fifth">5</option>
                        <option value = "sixth">6</option>
                        <option value = "seventh">7</option>
                        <option value = "eigth">8</option>
                        <option value = "ninth">9</option>
                        <option value = "tenth">10</option>
                        <option value = "eleventh">11</option>
                        <option value = "twelveth">12</option>
                    </select>
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