const playersRouter = require('express').Router();
const Player = require('../models/player');

playersRouter.get('/', (req, res) => {
  Player.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.send(err));
});

playersRouter.get('/playersExceptUser', (req, res) => {
  Player.find({ _id: { $ne: req.user.id } })
    .then((data) => {
      res.send(data);
    })
    .catch(() => res.status(404).send());
});

module.exports = playersRouter;
