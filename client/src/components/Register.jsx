import React from 'react';
import { navigate } from '@reach/router';
// import styled from 'styled-components';
import useForm from '../hooks/useForm';

// const StyledDiv = styled.div``;

const Register = ({ auth }) => {
  const registerUser = async e => {
    await auth.register(newUser.username, newUser.password);
    navigate('/jokes');
  };

  const { values: newUser, handleChange, handleSubmit } = useForm(registerUser);

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          value={newUser.username || ''}
          onChange={handleChange}
          placeholder="Username"
          autoFocus
        />
        <input
          type="password"
          name="password"
          value={newUser.password || ''}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
