import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

/**
 * TEMP USER (in-memory)
 * Replace with DB later
 */
const user = {
  id: "1",
  name: "Sri Harsha",
  email: "psriharsha567@gmail.com",
  password: bcrypt.hashSync("password123", 10)
};

/**
 * LOGIN
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing credentials" });
  }

  if (email !== user.email) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    "dev-secret",
    { expiresIn: "1d" }
  );

  res.status(200).json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
});

/**
 * REGISTER (placeholder)
 */
router.post("/register", (req, res) => {
  res.status(201).json({
    message: "Registration endpoint ready (DB integration pending)"
  });
});

export default router;
