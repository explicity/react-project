const express = require('express');
const router = express.Router();

const Joi = require('@hapi/joi');

const validateMessage = message => {
  const schema = {
    id: Joi.string(),
    created_at: Joi.string(),
    message: Joi.string(),
    currentUser: Joi.boolean(),
    marked_like: Joi.boolean(),
    avatar: Joi.string()
  };

  return Joi.validate(message, schema);
};

const messages = require('../data/messages');

router.get('/', (req, res, next) => {
  return res.json(messages);
});

router.get('/:id', (req, res, next) => {
  const found = messages.some(message => message.id === req.params.id);

  if (found) {
    res.json(messages.filter(message => message.id === req.params.id)[0]);
  } else {
    res
      .status(400)
      .json({ msg: `No message with the id of ${req.params.id} was found` });
  }
});

router.post('/', (req, res) => {
  const { error } = validateMessage(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const newMessage = {
    id: req.body.id,
    created_at: req.body.created_at,
    message: req.body.message,
    currentUser: req.body.currentUser
  };

  const { message } = newMessage;

  if (!message) {
    res.status(400).json({ msg: 'Please fill all the requiered fields.' });
  }

  messages.push(newMessage);
  res.json(messages);
});

router.post('/:id/liked', (req, res) => {
  const { id } = req.params;
  const found = messages.find(message => message.id === id);

  if (found) {
    messages.forEach(message => {
      if (message.id === id) {
        message.marked_like = true;
        res.json({ msg: 'Message liked', message });
      }
    });
  } else {
    res
      .status(400)
      .json({ msg: `No member with the id of ${req.params.id} was found` });
  }
});

router.delete('/:id', (req, res) => {
  const found = messages.find(message => message.id === req.params.id);

  if (found) {
    const index = messages.indexOf(found);
    messages.splice(index, 1);
    res.json({
      msg: 'Message deleted',
      messages
    });
  } else {
    res
      .status(400)
      .json({ msg: `No member with the id of ${req.params.id} was found` });
  }
});

module.exports = router;
