import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const StyledNav = styled.nav`
  padding: 1rem 0;
  a {
    margin-right: 1rem;
  }
`;

const Nav = ({ auth }) => {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/jokes">Jokes</Link>
      {auth.user ? <Link to="/logout">Log out</Link> : <Link to="/login">Log in</Link>}
    </StyledNav>
  );
};

export default Nav;
