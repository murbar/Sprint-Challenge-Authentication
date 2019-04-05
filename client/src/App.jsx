import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import useAuth from './useAuth';
import Home from './Home';
import Nav from './Nav';
import Jokes from './Jokes';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';
import NotFound from './NotFound';

const StyledDiv = styled.div`
  max-width: 35rem;
  margin: 1rem auto 3rem;
  padding: 0 1rem;
`;

const App = () => {
  const auth = useAuth('http://localhost:3300/api');

  return (
    <StyledDiv>
      <h1>Dad Jokes!</h1>
      <Nav auth={auth} />
      <Router>
        <Login path="/login" auth={auth} />
        <Register path="/register" auth={auth} />
        <Logout path="/logout" auth={auth} />
        <Jokes path="/jokes" auth={auth} />
        <Home path="/" />
        <NotFound default />
      </Router>
    </StyledDiv>
  );
};

export default App;
