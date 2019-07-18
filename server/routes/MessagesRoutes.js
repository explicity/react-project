const express = require("express");
const router = express.Router();

const messages = require("../data/messages");

router.get("/", (req, res, next) => {
  return res.json(messages);
});

module.exports = router;
