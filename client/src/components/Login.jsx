import React from 'react';
import { Redirect, Link, navigate } from '@reach/router';
import useForm from '../hooks/useForm';

// import styled from 'styled-components';

// const StyledDiv = styled.div``;

const Login = ({ auth }) => {
  const login = async e => {
    await auth.login(values.username, values.password);
    navigate('/jokes');
  };

  const { values, handleChange, handleSubmit } = useForm(login);

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
          value={values.username || ''}
          onChange={handleChange}
          placeholder="Username"
          autoFocus
        />
        <input
          type="password"
          name="password"
          value={values.password || ''}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
