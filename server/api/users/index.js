const express = require('express');
const jwt = require('jsonwebtoken');
const auth = require('../auth/auth');
const User = require('../../models/Users');
const Login = require('../../models/Logins');

const router = express.Router();

router.post('/login-request', (req,res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({msg:'no email in login request'});
  }
  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(400).json({msg:'login email lookup error'});
    }
    Login.create({}, (err,login) => {
      if (err) {
        return res.status(400).json({msg:'error creating login entry'});
      }
      const link = `${user ? 'login' : 'register'}/${login._id}`;
      // TD: email the link and remove it from the responses below
      const token = jwt.sign(
        { id: login._id, email },
        process.env.JWT_SECRET
      );
      return user ? 
        res.status(200).json({ token, email, link }) : 
        res.status(200).json({ register: true, token, email, link });
    });
  });
});

router.post('/login/:id', (req,res) => {
  let token = req.header('Authorization').split(' ')[1];
  if (!token || token === 'null') {
    return res.status(401).json({ msg: 'no token at server login auth check'});
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, { id, email }) => {
    if (err) {
      return res.status(401).json({ msg: 'invalid token at login' });
    }
    if (req.params.id !== id) {
      return res.status(401).json({ msg: 'link does not match token' });
    }
    Login.findById(id, (err,link) => {
      if (err) {
        return res.status(400).json({ msg: 'error fetching login link' });
      }
      if (!link || id != link._id) {
        return res.status(401).json({ msg: 'invalid login link' });
      }
      User.findOne({ email }, (err,user) => {
        if (err) {
          throw err;
        }
        if (!user) {
          return res.status(400).json({ msg: 'this email doesn\'t have an account' });
        }
        const token = jwt.sign(
          { id: user._id },
          process.env.JWT_SECRET
        );
        res.status(200).json({ token, uid: user._id });
      });
    });
  });
});

router.post('/register/:id', (req,res) => {
  let token = req.header('Authorization').split(' ')[1];
  const handle = req.body.handle;
  if (!token || token === 'null') {
    return res.status(401).json({ msg: 'no token at server register auth check'});
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, { id, email }) => {
    if (err) {
      return res.status(400).json({ msg: 'invalid token at /login' });
    }
    if (req.params.id !== id) {
      return res.status(401).json({ msg: 'link does not match token' });
    }
    Login.findById(id, (err,link) => {
      if (err) {
        return res.status(400).json({ msg: 'error fetching registration link' });
      }
      if (!link || id != link._id) {
        return res.status(200).json({ msg: 'invalid registration link' });
      }
      User.findOne({ email }, (err,user) => {
        if (err) {
          throw err;
        }
        if (user) {
          return res.status(401).json({ msg: 'this email already has an account' });
        }
        User.findOne({ handle }, (err,user) => {
          if (err) {
            throw err;
          }
          if (user) {
            return res.status(401).json({ msg: 'this handle is no longer available' });
          }
          User.create({ email, handle }, (err,user) => {
            if (err) {
              return res.status(401).json({ msg: 'err creating user, dup key' });
            }
            const token = jwt.sign(
              { id: user._id },
              process.env.JWT_SECRET
            );
            res.status(200).json({ token, uid: user._id });
          });
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
    if (!user) {
      return res.status(200).json({ msg: 'user doesn\'t exist' });
    }
    return res.status(200).json({ uid: req.user.id });
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

router.post('/handle', ({ body: { handle }},res) => {
  User.findOne({ handle }, (err,user) => {
    if (err) {
      throw err;
    }
    res.json({ handle: !user });
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
