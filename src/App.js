import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './style.css';

import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <Switch>
        <Route path='/' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
