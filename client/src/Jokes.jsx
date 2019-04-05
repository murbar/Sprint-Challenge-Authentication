import React from 'react';
import { Redirect } from '@reach/router';
import styled from 'styled-components';

const StyledDiv = styled.div``;

const Jokes = ({ data, user = null }) => {
  if (!user) return <Redirect to="/login" noThrow />;

  return (
    <StyledDiv>
      <h1>jokes</h1>
    </StyledDiv>
  );
};

export default Jokes;
