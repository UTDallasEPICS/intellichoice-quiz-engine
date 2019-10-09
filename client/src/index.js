import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Switch } from 'react-router-dom';


import App from './App';
import Quiz from './components/Quiz';
import Profile from './components/Profile';
import AddSub from './components/add-sub';
import Test from './components/test';
import Results from './components/results';

{ReactDOM.render(<App />,document.getElementById('root'));}

const routing =
(
  <Router>
  <Switch>
  <Route exact path="/" component={App} />
  <Route path="/components/Quiz" component={Quiz} />
  <Route path="/components/Profile" component={Profile} />
  <Route path="/components/add-sub" component={AddSub} />
  <Route path="/components/test" component={Test} />
  <Route path="/components/results" component={Results} />
  </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
