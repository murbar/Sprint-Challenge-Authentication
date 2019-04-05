import React, { useState } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';

const StyledDiv = styled.div``;

const Register = ({ auth }) => {
  const [credentials, setCredentials] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await auth.register(credentials.username, credentials.password);
    navigate('/jokes');
  };

  return (
    <div>
      <h2>Register</h2>
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
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
