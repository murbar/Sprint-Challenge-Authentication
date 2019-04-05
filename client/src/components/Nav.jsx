import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const StyledNav = styled.nav`
  position: relative;
  padding: 1rem 0;
  a {
    margin-right: 1rem;
  }
  a:last-child {
    position: absolute;
    right: 0;
    margin-right: 0;
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
