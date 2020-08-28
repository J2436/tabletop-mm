const mailRouter = require('express').Router();
const GroupRequest = require('../models/groupRequest');
const Player = require('../models/player');
const Group = require('../models/group');

// mailRouter.get('/messages', (req, res) => {
// res.send();
// });

/* TODO: For now just send the names of the receiver, sender and group.
Ideally send the links to the requester's profile page as well as the groups landing page.
 */
mailRouter.get('/groupRequests', async (req, res) => {
  const groupRequests = await GroupRequest.find({ receiver: req.user.id });

  const toSend = groupRequests.map(async (groupRequest) => {
    const sender = await Player.findById(groupRequest.sender);
    const group = await Group.findById(groupRequest.group);
    return {
      senderName: sender.screenName,
      groupName: group.name,
      id: groupRequest.id,
    };
  });

  Promise.all(toSend).then((values) => res.send(values));
});

mailRouter.post('/acceptRequest', async (req, res) => {
  const groupRequest = await GroupRequest.findById(req.body.groupRequestId);
  Group.findByIdAndUpdate(
    groupRequest.group,
    { $push: { players: groupRequest.sender } },
    { useFindAndModify: false },
  ).then(() => res.send({ message: 'Successfuly invited to group' }));
  groupRequest.remove();
});

mailRouter.post('/declineRequest', (req, res) => {
  GroupRequest.findByIdAndRemove(req.body.groupRequestId)
    .then(() => res.send({ message: 'declined request' })) 
  });

module.exports = mailRouter;
