const express = require("express");
const authRoutes = require("./routes/auth.routes");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
