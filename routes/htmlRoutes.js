const router = require('express').Router();
const path = require('path');

// Workout tracker homepage

// Exercise page
router.get("/exercise", (req, res) => 
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
);

// stats page
router.get("/stats", (req, res) =>
 res.sendFile(path.join(__dirname, "../public/stats.html"))
);

router.get('./', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// export html routes
module.exports = router;