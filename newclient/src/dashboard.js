import React from 'react';
//import logo from './logo.svg';
import './dashboard.css';
import { Link } from 'react-router-dom'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Icon from '@mdi/react'
import { mdiBookOpenPageVariant } from '@mdi/js'
import { PieChart } from 'react-chartkick'
import 'chart.js'

const dashboard = (props) => (
    <div>
        <div id="intellichoice-logo-div">
            <img id="intellichoice-logo" src="intellichoice-logo-white-1024x1024.png" alt="intellichoice logo"/>
        </div>
        <div style={{float:'right', height:'79.2px', width:'50%', backgroundColor:'#43a047'}}></div>
        <div style={{width:'50%', float:'right', backgroundColor:'#43a047'}}>
            <ul id="header-button-list">
                <li className="header-button">
                    <Link to='/profile'>
                        <h4 style={{color:'white'}}>Profile</h4>
                    </Link>
                </li>
                <li className="header-button" onClick={ () => { alert("You have been logged out.") }}>
                    <Link>
                        <h4 style={{color:'white'}}>Logout</h4>
                    </Link>
                </li>
            </ul>
        </div>
    
        <div>
            <div id="achievement-header">
                <h2>Achievements</h2>
            </div>
            
            <div id="quiz-list-header">
                <h2>Quiz List</h2>
            </div>
            
            <div id="achievement-box">
                <h3 style={{marginTop:'0.5em'}}>My Rank: 1st</h3>
                <h3>My Score: 100%</h3>
                <h3>Correctness:</h3>
                <PieChart data={[['Correct', 85], ['Incorrect', 15]]} colors={['green', 'red']}/>
            </div>
    
            <QuizBox title='Fractions' questionNumber='15' status='100'/>
            <QuizBox title='Addition' questionNumber='10' status='100'/>
            <QuizBox title='Subtraction' questionNumber='20' status='50'/>
            <QuizBox title='Multiplication' questionNumber='15' status='50'/>
        </div>
    </div>
);

const QuizBox = (props) => {
	return (
		<div className='take-quiz-box' onClick={ () => { window.location.href = '/quizpage'; } }>
			<Book/>
			<h3>{props.title}</h3>
			<hr className='col-xs-12' style={{width:'60%', borderWidth:'5px', borderColor:'black'}}/>
			<p style={{float:'left'}}>{props.questionNumber} questions</p>
			<p style={{float:'right', marginRight:'2%'}}>Status: {props.status}%</p>
		</div>
	);	
};

const Book = () => {
	return (
		<Icon path={mdiBookOpenPageVariant}
			title="user profile"
			size={3}
			color='black'
			style={{float:'left', marginRight:'1em', marginLeft:'1em', marginTop:'1em'}}
		/>
	)
}

export default dashboard;