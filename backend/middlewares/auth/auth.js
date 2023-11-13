const jwt = require('jsonwebtoken');
const auth = require('./auth.json');

const bcryptjs = require('bcryptjs');

async function includeToken(user) {
  const token = await jwt.sign({ id: user.id }, auth.secret, {
    expiresIn: 1800
  });
  user.token = token;
  user.password = undefined;
}

async function generateHash(user) {
  if (typeof user.password !== 'undefined') {
    const hash = await bcryptjs.hash(user.password, 10);
    user.password = hash;
  }
  return user;
}

function authorise(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: 'Token not sent!' });
  }

  const pieces = authHeader.split(' ');

  if (pieces && pieces.length !== 2) {
    return res.status(401).send({ error: 'Incomplete Token!' });
  }

  const [type, token] = pieces;

  if (!/^Bearer$/i.test(type)) {
    return res.status(401).send({ error: 'Bad Format Token!' });
  }

  jwt.verify(token, auth.secret, (err, user) => {
    if (err) {
      return res.status(401).send({ error: 'Invalid Token!' });
      
    }
    req.user = user.id;
    return next();
  });
  console.log(req.userLogado)
}

module.exports = {
  generateHash,
  includeToken,
  authorise
};