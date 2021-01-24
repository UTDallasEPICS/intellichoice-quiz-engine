import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Practice from './pages/practice';
import Profile from './pages/profile';
import Logout from './pages/logout';
import addQuestion from './components/addQuestion';
import subtopicPage from './pages/subtopicPage';
import topicPage from './pages/topicPage';
import testing from './pages/testing';
import getList from './pages/getList';
import questionDisplayForm from './pages/questionDisplayForm';
//other components and functions imported from folders/files

//Route paths are to be added to end of url to view/test component. Ex. localhost:3000/topics will take you to the topics page

function App() {
  /*
    2 and addition are hardcoded as gradeLevel and topicname. 
    This is just to test and demonstrate the function, 
    but would ideally be passed from the main intellichoice website.
  */
  let topicName = 'addition';
  let topics = getList('2', topicName);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/practice' component={Practice} />
        <Route path='/topicPage' component={topicPage} />
        <Route path='/subtopicPage' component={subtopicPage} />
        <Route path='/profile' component={Profile} />
        <Route path='/logout' component={Logout} />
       
        <Route path='/add'  component={addQuestion}/>
        
     
        <Route path='/topics' component= {topicPage}/>
        <Route path='/testing' element= {testing(topics)}/>
        <Route path='/subtopics' component= {subtopicPage}/>
        <Route path='/addition' component = {questionDisplayForm}/>
        <Route path='/subtraction' component = {questionDisplayForm}/>
        <Route path='/multiplication' component = {questionDisplayForm}/>
        <Route path='/division' component = {questionDisplayForm}/>
      </Switch>
    </Router>
  );
}

export default App;
