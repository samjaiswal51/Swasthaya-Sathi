const express = require('express');
const router = express.Router();

// Dummy route
router.get('/', (req, res) => {
  res.send('Chat route working!');
});

module.exports = router;
