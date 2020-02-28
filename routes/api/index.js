const express = require('express');
const router = express.Router();

router.get('/', (req,res) => res.send('/subscriptions'));
router.use('/users', require('./users'));

module.exports = router;