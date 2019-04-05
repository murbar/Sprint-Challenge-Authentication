import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import useAuth from './hooks/useAuth';
import Home from './components/Home';
import Nav from './components/Nav';
import Jokes from './components/Jokes';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import NotFound from './components/NotFound';

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
        <Home path="/" auth={auth} />
        <NotFound default />
      </Router>
    </StyledDiv>
  );
};

export default App;
