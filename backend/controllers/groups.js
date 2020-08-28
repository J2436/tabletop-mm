const groupsRouter = require('express').Router();
const Group = require('../models/group');
const Player = require('../models/player');
const GroupRequest = require('../models/groupRequest');

groupsRouter.get('/', (req, res) => {
  Group.find({})
    .then((data) => {
      res.send(data);
    })
    .catch(() => {});
});

groupsRouter.get('/ownedGroups', (req, res) => {
  Group.find({ owner: req.user.id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(401).send(err));
});
groupsRouter.get('/joinedGroups', (req, res) => {
  Group.find({
    owner: { $ne: req.user.id },
    players: { $in: [req.user.id] },
    meetingDateTime: { $gt: Math.floor(Date.now() / 1000) },
  })
    .then((data) => res.send(data))
    .catch((err) => res.status(404).send(err));
});

// Return groups that the user has not yet joined or sent a request to join
groupsRouter.get('/unjoinedGroups', async (req, res) => {
  const unjoined = await Group.find({
    players: { $nin: [req.user.id] },
    meetingDateTime: { $gt: Math.floor(Date.now() / 1000) },
  });
  res.send(unjoined);
});

groupsRouter.post('/createGroup', async (req, res) => {
  const user = await Player.findById(req.user.id);
  const newGroup = new Group({
    ...req.body,
    owner: user._id,
    players: [user._id],
  });

  await newGroup.save();
  user.groups.concat(newGroup._id);
  res.send(newGroup);
});

groupsRouter.post('/joinRequest', async (req, res) => {
  const groupRequestExists = await GroupRequest.findOne({
    group: req.body.id,
    sender: req.user.id,
    receiver: req.body.owner,
  });

  if (!groupRequestExists) {
    const newGroupInvite = new GroupRequest({
      group: req.body.id,
      sender: req.user.id,
      receiver: req.body.owner,
      accepted: 0,
    });

    newGroupInvite
      .save()
      .then(() => {
        console.log('Created a new Group Invite');
      })
      .catch((err) => {
        console.log(err);
      });
    res.send({ message: 'Request to join group sent!', group: req.body });
  } else {
    res.status(400).send({ message: 'A group request has already been sent' });
  }
});

groupsRouter.post('/joinGroup', async (req, res) => {
  const group = await Group.findById(req.body.groupID);

  if (group) {
    const updatedGroup = await Group.findByIdAndUpdate(
      req.body.groupID,
      { $push: { players: req.user.id } },
      { useFindAndModify: false },
    );
    res.send(updatedGroup);
  } else {
    res.status(404).send();
  }
});

groupsRouter.post('/leaveGroup', (req, res) => {
  Group.findByIdAndUpdate(
    req.body.groupID,
    { $pull: { players: req.user.id } },
    { useFindAndModify: false },
  ).then(() => {
    res.send({ message: 'successfully left group' });
  });
});

groupsRouter.post('/manageGroup', (req, res) => {
  res.send(req.body);
});

module.exports = groupsRouter;
