const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Using Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
const post = require("./routes/Post");
const user = require("./routes/User");

// Use Route
app.use("/api/v1", post);
app.use("/api/v1", user);

module.exports = app;
