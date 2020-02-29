const express = require('express');
const mongoose = require('mongoose');
const Users = require('../../models/Users');

const router = express.Router();

router.post('/', (req,res) => {
  const user = req.body;
  Users.create(user, (err,user) => {
    if (err) {
      throw err;
    }
    res.json(user);
  });
});

module.exports = router;
