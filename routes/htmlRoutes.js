const { Router } = require("express");

const route = require("express").Router();
const path = require("path");

// Workout tracker homepage

// Exercise page
Router.get("/exercise", (req, res) => 
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
);

// stats page
Router.get("/stats", (req, res) =>
 res.sendFile(path.join(__dirname, "../public/stats.html"))
);
// export html routes
module.exports = router;