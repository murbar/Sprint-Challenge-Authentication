import React from 'react';
import { Redirect } from '@reach/router';

const Logout = ({ auth }) => {
  auth.logout();
  return <Redirect to="/" noThrow />;
};

export default Logout;
