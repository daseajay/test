require("dotenv").config();
const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("Hello");
});

// Twitter route
app.get("/twitter", (req, res) => {
  res.send("<h1>TWITTER APP</h1>");
});

// Login route
app.get("/login", (req, res) => {
  res.send("<h1>PLEASE LOGIN TO OUR CHANNEl</h1>");
});

// YouTube route
app.get("/tube", (req, res) => {
  res.send("<h1>YOUTUBE CHANNEL</h1>");
});

// Set the port from .env or default to 4000
const PORT = process.env.PORT || 4000;
// Start the server
app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
