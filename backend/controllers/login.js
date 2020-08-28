const loginRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Player = require('../models/player');
const { getTokenFrom } = require('../utils/token');

loginRouter.post('/', async (req, res) => {
  const { body } = req;
  const user = await Player.findOne({ email: body.email });
  const passwordCorrect = user === null ? false : await bcrypt.compare(body.password, user.password);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  const userFormToken = {
    email: user.email,
    id: user._id,
  };

  const token = jwt.sign(userFormToken, process.env.SECRET, {
    expiresIn: '15m',
  });

  res
    .status(201)
    .cookie('jwt', token, { httpOnly: true })
    .send({ token, id: user.id, screenName: user.screenName });
});

loginRouter.get('/isLoggedIn', (req, res) => {
  const token = getTokenFrom(req);
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (decodedToken) {
    res.send(decodedToken);
  } else res.status(404).send();
});

loginRouter.get('/logout', (req, res) => {
  res.clearCookie('jwt').send();
});

loginRouter.post('/newUser', async (req, res) => {
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(req.body.password, saltRounds);

  const player = new Player({
    ...req.body,
    password: passwordHash,
  });

  const savedPlayer = await player.save();
  console.log(player);
  res.send(savedPlayer);
});

module.exports = loginRouter;
