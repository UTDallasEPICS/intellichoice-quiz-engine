import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
	<BrowserRouter>
		<Route render={({location}) => {
			const path = location.pathname;
			if (path === '/dashboard' || path === '/profile') return;
			return (
				<div>
					<h1>Path not found</h1>
					<Link to="/dashboard">Click here to go to the dashboard</Link>
					<div style={{borderStyle:"solid", height:"2em", width:"150px", textAlign:"center"}} onClick={() => { alert("hi"); }}>hello</div>
				</div>
			)
		}}/>
		<Route exact={true} path="/dashboard" component={dashboard}/>
		<Route exact={true} path="/profile" component={profile}/>
	</BrowserRouter>
  );
}

const dashboard = (props) => (
<div>
	<div id="intellichoice-logo-div">
		<img id="intellichoice-logo" src="https://www.intellichoice.org/wp-content/uploads/2019/01/intellichoice-logo-white-1024x1024.png" alt="intellichoice logo"/>
	</div>
	<div style={{float:'right', height:'79.2px', width:'50%', backgroundColor:'#43a047'}}></div>
	<div style={{width:'50%', float:'right', backgroundColor:'#43a047'}}>
		<ul>
			<li>
				<Link to='/profile'>
					<h4 style={{color:'white'}}>Profile</h4>
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
			<h3>My Rank: 1st</h3>
			<h3>My Score: 100%</h3>
			<h3>Correctness:</h3>
			<img id="correctness-pie-chart" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/English_dialects1997.svg/1200px-English_dialects1997.svg.png" alt='pie chart of countries'/>
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
		<div className='quiz-box' onClick={ () => { alert('You are now taking the quiz'); } }>
			<img className='quiz-box-img' src="https://i.groupme.com/583x385.png.28c4abc1f9ad4b09a1f593c581c292e8.large" alt="books"/>
			<h3>{props.title}</h3>
			<hr className='col-xs-12' style={{width:'60%', borderWidth:'5px', borderColor:'black'}}/>
			<p style={{float:'left'}}>{props.questionNumber} questions</p>
			<p style={{float:'right', marginRight:'2%'}}>Status: {props.status}%</p>
		</div>
	);	
};

const profile = () => {
	return (
		<div>
			<h1>profile page work in progress</h1>
			<p>Click <Link to="/dashboard">here</Link> to go back to the dashboard</p>
		</div>
	)
};

export default App;