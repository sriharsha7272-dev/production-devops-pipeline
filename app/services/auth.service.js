const users = new Map();

function signup(username, password) {
  if (!username || !password) {
    throw new Error("Invalid input");
  }
  if (users.has(username)) {
    throw new Error("User already exists");
  }
  users.set(username, password);
  return true;
}

function login(username, password) {
  if (!users.has(username)) {
    throw new Error("Invalid credentials");
  }
  if (users.get(username) !== password) {
    throw new Error("Invalid credentials");
  }
  return true;
}

module.exports = { signup, login };
