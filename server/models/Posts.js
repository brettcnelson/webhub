const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  uid: {type: mongoose.Schema.Types.ObjectId},
  parent: {type: mongoose.Schema.Types.ObjectId},
  channels: [mongoose.Schema.Types.ObjectId],
  text: String,
  replies: [mongoose.Schema.Types.ObjectId],
  replyType: {
    type: String,
    default: 'restricted'
  }
});

module.exports = mongoose.model('Post', PostsSchema);
