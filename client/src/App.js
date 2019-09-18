import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Helmet } from 'react-helmet';
import './app.css';

class App extends React.Component
{
  clicked()
  {
    console.log('BUTTON CLICKED');
  }

  render() {
    return (

      <div className="App">
      {/*THIS IS FOR THE BACKGROUND COLOR*/}
        <Helmet>
                <style>{'body { background-color: #00B852; }'}</style>
        </Helmet>

        <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" /> */}
          <h1>INTELLIVISION</h1>
          <Router>
          <Button
          variant="outlined"
          component={Link} to="/components/Quiz">QUIZ</Button>
          <br></br>
          <Button component={Link} to="/components/Profile">PROFILE</Button>
          <br></br>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
