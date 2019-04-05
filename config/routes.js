const axios = require('axios');
const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig');

const { authenticate, generateToken } = require('../auth/authenticate');

const USERS_TABLE = 'users';

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

async function register(req, res) {
  try {
    let user = req.body;
    if (!user.username || !user.password) {
      res.status(400).json({ error: 'Username and password are required.' });
    } else {
      const hash = await bcrypt.hash(user.password, 12);
      user.password = hash;
      const [newUserId] = await db(USERS_TABLE).insert(user);
      const newUser = await db(USERS_TABLE)
        .where({ id: newUserId })
        .first();
      const token = generateToken(newUser);
      res.status(201).json({
        message: `User registered. Welcome ${newUser.username}.`,
        token
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Cannot register new user.' });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = username
      ? await db(USERS_TABLE)
          .where({ username })
          .first()
      : null;
    const credentialsValid =
      user && password ? await bcrypt.compare(password, user.password) : false;
    if (!user || !credentialsValid) {
      res.status(401).json({ error: 'Invalid Credentials.' });
    } else {
      const token = generateToken(user);
      res.status(200).json({ message: `Welcome, ${user.username}.`, token });
    }
  } catch (error) {
    res.status(500).json({ error: 'Cannot complete login.' });
  }
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
