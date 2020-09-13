const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  let token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ msg: 'no token at server auth check'});
  }
  try {
    req.user = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    next();
  } catch(e) {
    return res.status(401).json({ msg: 'invalid token at users/auth' });
  }
}

module.exports = auth;
