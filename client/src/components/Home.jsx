import React from 'react';
import { Link } from '@reach/router';

import styled from 'styled-components';

const StyledDiv = styled.div``;

const Home = ({ auth }) => {
  if (auth.user)
    return (
      <StyledDiv>
        <h2>
          Hello, <span className="username">{auth.user.username}</span>!
        </h2>
        <p>
          <Link to="/jokes">Click here</Link> for some awesome dad jokes.
        </p>
      </StyledDiv>
    );

  return (
    <StyledDiv>
      <h2>Hello!</h2>
      <p>
        <Link to="/login">Log in</Link> or <Link to="/register">register</Link> to see some dad
        jokes!
      </p>
    </StyledDiv>
  );
};

export default Home;
