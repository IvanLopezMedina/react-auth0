import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Public from './Public';
import Private from './Private';
import Courses from './Courses';
import Nav from './Nav';
import Auth from './Auth/Auth';
import Callback from './Callback';
import PrivateRoute from './PrivateRoute';
import AuthContext from './AuthContext';

const App = (props) => {
  const auth = new Auth(props.history);
  const [tokenRenewalComplete, seTokenRenewalComplete] = useState(false);

  useEffect(() => {
    auth.renewToken(() => {
      seTokenRenewalComplete(true);
    });
  });

  if (!tokenRenewalComplete) return 'Loading...';
  return (
    <AuthContext.Provider value={auth}>
      <Nav auth={auth} />
      <div className="body">
        <Route
          path="/"
          exact
          render={(props) => <Home auth={auth} {...props} />}
        />
        <Route
          path="/callback"
          render={(props) => <Callback auth={auth} {...props} />}
        />
        <Route path="/public" component={Public} />
        <PrivateRoute path="/private" component={Private} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute
          path="/courses"
          component={Courses}
          scopes={['read:courses']}
        />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
