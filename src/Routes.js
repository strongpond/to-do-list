import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ToDo from './pages/ToDo';

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/todo" component={ToDo} />
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
