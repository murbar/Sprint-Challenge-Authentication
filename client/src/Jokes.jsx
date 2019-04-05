import React, { useState, useEffect } from 'react';
import { Redirect } from '@reach/router';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
  h2 span {
    text-transform: capitalize;
  }
`;

const Jokes = ({ auth }) => {
  if (!auth.user) return <Redirect to="/login" noThrow />;

  const [jokes, setJokes] = useState([]);

  const getJokes = async () => {
    try {
      const { data } = await axios.get('http://localhost:3300/api/jokes');
      setJokes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <StyledDiv>
      <h2>
        Some jokes for you, <span>{auth.user.username}</span>
      </h2>

      {jokes.map(j => (
        <p key={j.id}>{j.joke}</p>
      ))}
    </StyledDiv>
  );
};

export default Jokes;
