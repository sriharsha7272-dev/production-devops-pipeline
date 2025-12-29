const express = require("express");
const { signup, login } = require("../services/auth.service");

const router = express.Router();

router.post("/signup", (req, res) => {
  try {
    signup(req.body.username, req.body.password);
    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/login", (req, res) => {
  try {
    login(req.body.username, req.body.password);
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

module.exports = router;
