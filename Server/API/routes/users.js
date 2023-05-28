const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  console.log('users');
  res.send('users');
});

module.exports = router;
