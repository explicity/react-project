const express = require('express');
const router = express.Router();

const uuid = require('uuid');
const Joi = require('@hapi/joi');

const validateUser = (user) => {
  const schema = {
    id: Joi.string(),
    username: Joi.string().min(2),
    password: Joi.string(),
    role: Joi.string(),
    email: Joi.string()
  };

  return Joi.validate(user, schema);
};

const users = require('../data/users');

router.get('/', (req, res, next) => {
  return res.json(users);
});

router.get('/user/:id', (req, res, next) => {
  const found = users.some(user => user.id === req.params.id);
  console.log('found: ', found);

  if (found) {
    res.json(users.filter(user => user.id === req.params.id)[0]);
  } else {
    res
      .status(400)
      .json({ msg: `No member with the id of ${req.params.id} was found` });
  }
})

router.post('/', (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;  
  }

  const newUser = {
    id: uuid.v4(),
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  };

  const { id, username, password, email } = newUser;

  if (!id || !username || !password || !email) {
    res.status(400).json({ msg: 'Please fill all the requiered fields.' });
  }

  users.push(newUser);
  res.json(users);
});

router.put('/user/:id', (req, res) => {
  const found = users.some(user => user.id === req.params.id);

  if (found) {
    const updUser = req.body;

    const { error } = validateUser(updUser);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    users.forEach((user) => {
      let { id, username, password, email } = updUser;

      if (user.id === req.params.id) {
        user.username = username ? username : user.username;
        user.password = password ? password : user.password;
        user.email = email ? email : user.email;

        res.json({ msg: 'Member update', user });
      }
    });
  } else {
    res.status(400).json({ msg: 'Cannot update' });
  }
});

router.delete('/user/:id', (req, res) => {
  const found = users.find(user => user.id === req.params.id);

  if (found) {
    const index = users.indexOf(found);
    users.splice(index, 1);
    res.json({
      msg: 'User deleted',
      users
    });
  } else {
    res
      .status(400)
      .json({ msg: `No member with the id of ${req.params.id} was found` });
  }
});

module.exports = router;
