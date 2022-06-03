const jwt = require('jsonwebtoken');
const db = require('../db/database');

const auth = (req, res, next) => {
  const rawToken = req.header('Authorization');
  if (!rawToken) return res.status(400).send('Not authenticated');

  const token = rawToken.replace('Bearer ', '');
  const data = jwt.verify(token, process.env.JWT_SECRET);
  if (!data.id) return res.status(400).send('Invalid user')

    db('users').where({ id: data.id }).select('id', 'username')
    .then(userdata => {
      req.user = userdata[0];
      next();
    }).catch(err => res.status(500).send('Invalid user'));
};

module.exports = auth;
