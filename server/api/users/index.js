const express = require('express');
const mongoose = require('mongoose');
const Users = require('../../models/Users');

const router = express.Router();

router.get('/', (req,res) => {
  Users.find((err,users) => {
    if (err) {
      throw err;
    }
    res.json(users);
  });
});

router.post('/', (req,res) => {
  const user = req.body;
  Users.create(user, (err,user) => {
    if (err) {
      throw err;
    }
    res.json(user);
  });
});

router.put('/:_id', (req,res) => {
  Users.findByIdAndUpdate(req.params._id, req.body, {new:true}, (err,user) => {
    if (err) {
      throw err;
    }
    res.json(user);
  });
});

router.delete('/:_id', (req,res) => {
  Users.findByIdAndRemove(req.params._id, (err,result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

module.exports = router;
