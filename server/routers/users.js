const express = require('express');
const router = new express.Router();
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const db = require('../db/database');
const authMiddleware = require('../middleware/auth');

router.get('/user', authMiddleware, (req, res) => {
  res.status(200).send(req.user);
});


router.post('/signin', (req, res) => {
    const { email, password } = req.body;

    db('users').where({ email: email}).select('*')
    .then(response => {
      if (response.length === 0) reject();

      const { id, username, email, hash } = response[0];
      const isValid = bcrypt.compareSync(password, hash);

      if (!isValid) reject();

        const token = jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: '1h'});
        const userData = { id, username, token };
        return res.status(200).send(userData);
    })
    .catch(err => res.status(404).send('Invalid credentials'));
});

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    const hash = bcrypt.hashSync(password);

    db('users').returning('*').insert({ username: name, email, hash })
    .then(response => {
      const { id, username } = response[0];
      const token = jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: '1h'});
      const userData = { id, username, token };
      res.status(200).send(userData);
    })
    .catch(err => res.status(400).send('Bad request (name and email must be unique)'));
});

module.exports = router;
