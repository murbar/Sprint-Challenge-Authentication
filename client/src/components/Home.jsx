import React from 'react';
import { Link } from '@reach/router';

const Home = ({ auth }) => {
  if (auth.user)
    return (
      <div>
        <h2>
          Hello, <span className="username">{auth.user.username}</span>!
        </h2>
        <p>
          <Link to="/jokes">Click here</Link> for some awesome dad jokes.
        </p>
      </div>
    );

  return (
    <div>
      <h2>Hello!</h2>
      <p>
        <Link to="/login">Log in</Link> or <Link to="/register">register</Link> to see some dad
        jokes!
      </p>
    </div>
  );
};

export default Home;
