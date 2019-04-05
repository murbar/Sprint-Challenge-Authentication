import { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const TOKEN_KEY = 'token';

const useAuth = endPoint => {
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY) || null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(token, user);
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
      axios.defaults.headers.common['Authorization'] = token;
      setUser(jwtDecode(token));
    } else {
      localStorage.removeItem(TOKEN_KEY);
      delete axios.defaults.headers.common['Authorization'];
      setUser(null);
    }
  }, [token]);

  const register = async (username, password) => {
    try {
      const { data } = await axios.post(endPoint + '/register', { username, password });
      setToken(data.token);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (username, password) => {
    try {
      const { data } = await axios.post(endPoint + '/login', { username, password });
      setToken(data.token);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setToken(null);
  };

  return {
    user,
    register,
    login,
    logout
  };
};

export default useAuth;
