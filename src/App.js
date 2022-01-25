import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style.css';

import FriendNav from './components/Navbar';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {  
  return (
    <Router>
      <div className="App">
        <Route path='/' component={FriendNav} />
        <Route exact path='/' component={Login}/>
        <PrivateRoute exact path='/friends' component={FriendsList} />
        <PrivateRoute exact path='/friends/add' component={AddFriend} />
        <PrivateRoute path='/logout' component={Logout}/>
      </div>
    </Router>
  );
}

export default App;
