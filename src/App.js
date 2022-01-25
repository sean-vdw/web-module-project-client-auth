import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './style.css';

import Login from './components/Login';
import FriendsList from './components/FriendsList';


function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
