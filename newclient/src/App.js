import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

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
		<img src="https://www.intellichoice.org/wp-content/uploads/2019/01/intellichoice-logo-white-1024x1024.png" alt=""/>
		<div className="word"><Link to='/profile'><h1>Profile</h1></Link></div>
	</div>
	<div>
		<div className="left-box">
			<h1>My Progress</h1>
			<hr style={{color:'blue', size:'50px'}}/>
			<table>
				<tbody>
					<tr>
						<td>1. Linear Algebra</td>
						<td>100%</td>
					</tr>
					<tr>
						<td>2. Fractions</td>
						<td>100%</td>
					</tr>
					<tr>
						<td>3. Addition</td>
						<td>0%</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div className="small-header">
			<h1 style={{color: 'white'}}>My Quiz List</h1>
		</div>
		<div className="small-right-box">
			<img src="https://clipartix.com/wp-content/uploads/2016/05/Books-clipart-4.jpeg" alt="books"/>
			<p>hi</p>
		</div>
		<div className="small-right-box">
			<img src="https://clipartix.com/wp-content/uploads/2016/05/Books-clipart-4.jpeg" alt="books"/>
			<p>hello</p>
		</div>
	</div>
	<div>
		<div className="left-box">
			<h1>My Grades</h1>
			<hr/>
		</div>
		<div className="small-header">
			<h1 style={{color: 'white'}}>My History</h1>
	</div>
		<div className="small-right-box">hi</div>
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
