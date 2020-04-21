import React from 'react';
import {Link} from 'react-router-dom';

const Home = ({auth}) => {
  return (
    <div>
      <h1>Home</h1>
      {auth.isAuthenticated() ? (
        <Link to="/profile">View Profile</Link>
      ) : (
        <button onClick={auth.login}>Log In</button>
      )}
    </div>
  );
};

export default Home;
