import React from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './quiz.css';

class Quiz extends React.Component
{
  render() {
    return (
      <div className="Quiz">

      <Helmet>
              <style>{'body { background-color: #00B852; }'}</style>
      </Helmet>

      <Button component={Link} to="/">BACK</Button>
      <header className="Quiz-header">

      <Button
      variant="outlined"
      component={Link} to="/components/results">RESULTS</Button>

      <Button
      variant="outlined"
      component={Link} to="/components/add-sub">ADDITION & SUBTRACTION</Button>

      <Button
      variant="outlined"
      component={Link} to="/components/test">TEST</Button>

{/*
      <Button
      variant="outlined"
      component={Link} to="/components/add-sub">FRACTIONS</Button>
      <br></br>
      <Button
      variant="outlined"
      component={Link} to="/components/add-sub">DECIMALS</Button>

      <Button
      variant="outlined"
      component={Link} to="/components/add-sub">BASIC GEOMETRY</Button>

      <Button
      variant="outlined"
      component={Link} to="/components/add-sub">INTRODUCTION TO ALGEBRA</Button>
*/}
      </header>
      </div>

    );
  }
}

export default Quiz;
