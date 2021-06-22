import React, { createContext, useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import AddTeacher from './Component/AddTeacher/AddTeacher';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/addTeacher'>
            <AddTeacher></AddTeacher>
          </PrivateRoute >
          <Route path="/login">
            <Login></Login>
          </Route>
           <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
