import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import dashboard from './dashboard'
import profile from './profile'
import quizpage from './quizpage'

function App() {
  return (
	<BrowserRouter>
		<Route render={({location}) => {
			const path = location.pathname;
			if (path === '/dashboard' || path === '/profile' || path === '/quizpage') return;
			return (
				<div>
					<h1>Path not found</h1>
					<Link to="/dashboard">Click here to go to the dashboard</Link>
				</div>
			)
		}}/>
		<Route exact={true} path="/dashboard" component={dashboard}/>
		<Route exact={true} path="/profile" component={profile}/>
		<Route exact={true} path="/quizpage" component={quizpage}/>
	</BrowserRouter>
  );
}

export default App;