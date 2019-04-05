import React, { useState } from 'react';
import { Redirect, Link } from '@reach/router';
// import styled from 'styled-components';

// const StyledDiv = styled.div``;

const Login = ({ auth }) => {
  const [credentials, setCredentials] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await auth.login(credentials.username, credentials.password);
  };

  if (auth.user) return <Redirect to="/jokes" noThrow />;

  return (
    <div>
      <h2>Log in</h2>
      <p>
        New user? <Link to="/register">Create an account</Link>
      </p>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          value={credentials.username || ''}
          onChange={handleChange}
          placeholder="Username"
          autoFocus
        />
        <input
          type="password"
          name="password"
          value={credentials.password || ''}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
