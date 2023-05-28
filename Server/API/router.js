const express = require('express');
const router = express.Router();
const sessionRouter = require('./routes/users');

router.get('/', (req, res) => {
    console.log('home');
    res.send('hello world');
});

router.use('/users', sessionRouter);
module.exports = router;
