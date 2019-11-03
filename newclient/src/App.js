import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
//import { Button as BootButton } from 'react-bootstrap'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
	<BrowserRouter>
		<Route render={({location}) => {
			const path = location.pathname;
			if (path === '/dashboard' || path === '/profile') return;
			return (
				<h1>Path not found</h1>
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
		<img id="intellichoice-logo" src="https://www.intellichoice.org/wp-content/uploads/2019/01/intellichoice-logo-white-1024x1024.png" alt=""/>
		<div className="profile-button">
			<Link to="/profile"><button onclick="/profile" type="button" class="btn btn-primary">Profile</button></Link>
		</div>
	</div>
	<div>
		<div className="small-header-left">
			<h1 style={{color:'white'}}>My Achievements</h1>
		</div>
		
		<div className="small-header">
			<h1 style={{color: 'white'}}>My Quiz List</h1>
		</div>
		
		<div className="achievement-box">
			<h1>My Rank: 1st</h1>
			<h1>My Score: 100%</h1>
			<h1>Correctness:</h1>
			<img id="correctness-pie-chart" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/English_dialects1997.svg/1200px-English_dialects1997.svg.png"/>
		</div>
		
		<div className="quiz-box">
			<img src="https://i.groupme.com/583x385.png.28c4abc1f9ad4b09a1f593c581c292e8.large" alt="books"/>
			<h3>Fractions</h3>
			<hr/>
			<p style={{float:'left'}}>15 questions</p>
			<p style={{float:'right', marginRight:'2%'}}>Status: 100%</p>
		</div>
		
		<div className="quiz-box">
			<img src="https://i.groupme.com/583x385.png.28c4abc1f9ad4b09a1f593c581c292e8.large" alt="books"/>
			<h3>Addition</h3>
			<hr/>
			<p style={{float:'left'}}>15 questions</p>
			<p style={{float:'right', marginRight:'2%'}}>Status: 100%</p>
		</div>
		
		<div className="quiz-box">
			<img src="https://i.groupme.com/583x385.png.28c4abc1f9ad4b09a1f593c581c292e8.large" alt="books"/>
			<h3>Subtraction</h3>
			<hr/>
			<p style={{float:'left'}}>15 questions</p>
			<p style={{float:'right', marginRight:'2%'}}>Status: 0%</p>
		</div>
		
		<div className="quiz-box">
			<img src="https://i.groupme.com/583x385.png.28c4abc1f9ad4b09a1f593c581c292e8.large" alt="books"/>
			<h3>Multiplication</h3>
			<hr/>
			<p style={{float:'left'}}>15 questions</p>
			<p style={{float:'right', marginRight:'2%'}}>Status: 50%</p>
		</div>
	</div>
	<div>
	</div>
</div>
);

const profile = () => {
	return (
		<div >
			<h1>profile page work in progress</h1>
			<p>Click <Link to="/dashboard">here</Link> to go back to the dashboard</p>
		</div>
	)
};

export default App;
