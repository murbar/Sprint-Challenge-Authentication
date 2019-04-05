import React from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';

const StyledDiv = styled.div`
  max-width: 35rem;
  margin: 1rem auto;
  padding: 0 1rem;
`;

const App = () => {
  return (
    <StyledDiv>
      <h1>Dad Jokes!</h1>
      <Router>
        <Jokes path="/" />
      </Router>
    </StyledDiv>
  );
};

export default App;
