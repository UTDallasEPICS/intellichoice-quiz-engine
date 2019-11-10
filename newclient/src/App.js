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
	<div className="header">
		<img id="intellichoice-logo" src="https://www.intellichoice.org/wp-content/uploads/2019/01/intellichoice-logo-white-1024x1024.png" alt="intellichoice logo"/>
		<Link to='/profile'>
		<div style={{borderStyle:'none', float:'right', height:'3em', marginRight:'0.5em', marginTop:'0.5em'}}>
			<h4 style={{color:'white'}}>Profile</h4>
		</div>
		</Link>
	</div>

	<div>
		<div className="small-header-left">
			<h1 style={{color:'white', paddingTop: '0.25em'}}>My Achievements</h1>
		</div>
		
		<div className="small-header">
			<h1 style={{color: 'white', paddingTop: '0.25em'}}>My Quiz List</h1>
		</div>
		
		<div className="achievement-box">
			<h1>My Rank: 1st</h1>
			<h1>My Score: 100%</h1>
			<h1>Correctness:</h1>
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
		<div style={{cursor:'pointer'}} onClick={ () => { alert('You are now taking the quiz'); } } className="quiz-box">
			<img src="https://i.groupme.com/583x385.png.28c4abc1f9ad4b09a1f593c581c292e8.large" alt="books"/>
			<h3 style={{paddingTop:'0.3em'}}>{props.title}</h3>
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
