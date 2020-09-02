const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../auth/auth');
const User = require('../../models/Users');

const router = express.Router();

router.post('/login', (req,res) => {
  const { handle, password } = req.body;
  if (!handle || !password) {
    return res.status(400).json({msg:'handle and password required for login'});
  }
  User.findOne({ handle }, (err, user) => {
    if (!user) {
      return res.status(400).json({msg:'no user with that handle in db'});
    }
    bcrypt.compare(password, user.password)
    .then(isMatch => {
      if (!isMatch) {
        return res.status(400).json({msg:'invalid password'})
      }
      jwt.sign(
        {id: user._id},
        process.env.JWT_SECRET,
        (err,token) => {
          if (err) {
            throw err;
          }
          res.json({ ...user._doc , token });
        }
      );
    });
  });
});

router.post('/register', (req,res) => {
  const { handle, password } = req.body;
  if (!handle || !password) {
    return res.status(400).json({msg:'handle and password required for registration'});
  }
  User.findOne({ handle }, (err, user) => {
    if (user) {
      return res.status(400).json({msg:'user account with that handle already exists'});
    }
    bcrypt.genSalt(10, (err,salt) => {
      bcrypt.hash(password, salt, (err,hash) => {
        if (err) {
          throw err;
        }
        User.create({ handle , password: hash }, (err,user) => {
          if (err) {
            throw err;
          }
          jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            (err,token) => {
              if (err) {
                throw err;
              }
              return res.status(200).json({ ...user._doc, token });
            }
          );
        });
      });
    });
  });
});

router.get('/auth', auth, (req, res) => {
  User.findById(req.user.id, (err,user) => {
    if (err) {
      throw err;
    }
    return res.status(200).json({ ...user._doc });
  });
});

router.get('/allUsers', (req,res) => {
  User.find((err,users) => {
    if (err) {
      throw err;
    }
    res.json(users);
  })
});

// router.get('/', (req,res) => {
//   User.find((err,users) => {
//     if (err) {
//       throw err;
//     }
//     res.json(users);
//   });
// });

// router.post('/', (req,res) => {
//   const user = req.body;
//   User.create(user, (err,user) => {
//     if (err) {
//       throw err;
//     }
//     res.json(user);
//   });
// });

// router.put('/:_id', (req,res) => {
//   User.findByIdAndUpdate(req.params._id, req.body, {new:true}, (err,user) => {
//     if (err) {
//       throw err;
//     }
//     res.json(user);
//   });
// });

// router.delete('/:_id', (req,res) => {
//   User.findByIdAndRemove(req.params._id, (err,result) => {
//     if (err) {
//       throw err;
//     }
//     res.json(result);
//   });
// });

module.exports = router;
