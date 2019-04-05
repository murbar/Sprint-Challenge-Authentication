import React, { useState, useEffect } from 'react';
import { Redirect } from '@reach/router';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
  li {
    margin-bottom: 1.5rem;
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
        Some jokes for you, <span className="username">{auth.user.username}</span>
      </h2>

      <ol>
        {jokes.map(j => (
          <li key={j.id}>{j.joke}</li>
        ))}
      </ol>
    </StyledDiv>
  );
};

export default Jokes;
