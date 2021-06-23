const playersRouter = require("express").Router();
const Player = require("../models/player");
const bcrypt = require("bcryptjs");

playersRouter.get("/", (req, res) => {
  Player.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.send(err));
});

// Get the player from the cookie of the incoming request
playersRouter.get("/currentPlayer", (req, res) => {
  Player.find({ _id: { $eq: req.user.id } })
    .then((data) => {
      res.send(data[0]);
    })
    .catch((err) => res.status(404).send());
});

playersRouter.get("/playersExceptUser", (req, res) => {
  Player.find({ _id: { $ne: req.user.id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send());
});

playersRouter.post("/", async (req, res) => {
  const body = req.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const player = new Player({
    ...body,
    password: passwordHash,
  });

  const savedPlayer = await player.save();
  res.send(savedPlayer);
});

module.exports = playersRouter;
