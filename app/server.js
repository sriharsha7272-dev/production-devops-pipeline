const express = require("express");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(bodyParser.json());
app.use("/auth", authRoutes);

/**
 * Start server ONLY when not required by tests
 * This prevents double listeners in Jest
 */
let server;

if (require.main === module) {
  server = app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

module.exports = { app, server };

