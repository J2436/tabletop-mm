const mongoose = require('mongoose');

const GroupRequestSchema = new mongoose.Schema({
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true,
  },
  accepted: {
    // -1:declined 0:undecided 1:accepted
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('GroupRequest', GroupRequestSchema);
