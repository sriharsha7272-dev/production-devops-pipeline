const express = require('express');
const { signup, login } = require('./auth.service');

const app = express();
app.use(express.json());

app.post('/signup', (req, res) => {
  try {
    signup(req.body.username, req.body.password);
    res.json({ message: 'Signup successful' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/login', (req, res) => {
  try {
    login(req.body.username, req.body.password);
    res.json({ message: 'Login successful' });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(3000, () => {
  console.log('Auth service running on port 3000');
});
