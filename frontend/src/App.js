import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Groups from './pages/groups';
import Profile from './pages/profile';
import Players from './pages/players';
import Landing from './pages/landing';
import Home from './pages/home';
import GroupForm from './components/group-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginService from './services/login';
import UserContext from './context/user.context';

const App = () => {
  const [userID, setUserID] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ userID, loggedIn }}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/players">
            <Players />
          </Route>
          <Route path="/groups">
            <Groups />
          </Route>
          <Route path="/groupForm">
            <GroupForm />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
