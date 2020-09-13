const jwt = require('jsonwebtoken');
const User = require('../../models/Users');

function auth(req, res, next) {
  let token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ msg: 'no token at server auth check'});
  }
  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ msg: 'invalid token at users/auth' });
    }
    User.findById(user.id, (err, user) => {
      if (err) {
        throw err;
      }
      if (user) {
        req.user = user;
        next();
      }
      else {
        return res.status(401).json({ msg: 'no user in db from token at auth check' });
      }
    })
  });
}

module.exports = auth;
