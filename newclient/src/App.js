import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import dashboard from './dashboard'
import profile from './profile'

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



export default App;