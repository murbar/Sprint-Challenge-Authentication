import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import Jokes from './Jokes';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';
import NotFound from './NotFound';

const StyledDiv = styled.div`
  max-width: 35rem;
  margin: 1rem auto;
  padding: 0 1rem;
`;

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // get user from LS
  }, []);

  return (
    <StyledDiv>
      <h1>Dad Jokes!</h1>
      <Router>
        <Login path="/login" />
        <Register path="/register" />
        <Logout path="/logout" />
        <Jokes path="/" />
        <NotFound default />
      </Router>
    </StyledDiv>
  );
};

export default App;
