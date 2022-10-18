import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ToDo from './pages/ToDo';

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/todo" element={<ToDo />} />
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
