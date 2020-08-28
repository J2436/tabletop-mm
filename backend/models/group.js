const mongoose = require('mongoose');

const GroupSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
  },
  minAge: {
    type: Number,
    required: true,
  },
  maxAge: {
    type: Number,
    required: true,
  },
  meetingDateTime: {
    type: Number,
    required: true,
  },
  system: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  combat: {
    type: Number,
    required: true,
  },
  sexualContent: {
    type: Number,
    required: true,
  },
  humor: {
    type: Number,
    required: true,
  },
  violence: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
  },
  players: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Player',
  },
});

GroupSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Group', GroupSchema);
