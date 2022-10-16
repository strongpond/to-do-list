import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SingIn from './components/SignIn/SignIn';
import Main from './pages/Main';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signin" component={SingIn} />
      </Switch>
    </Router>
  );
}

export default Routes;
