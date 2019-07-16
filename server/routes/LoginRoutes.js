const express = require('express');
const router = express.Router();

const userService = require('../users/user.service');

router.post('/', authenticate);


function authenticate(req, res, next) {
  userService.authenticate(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
}

module.exports = router;
