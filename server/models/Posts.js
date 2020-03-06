const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
  uid: String,
  channels: {
    type: Map,
    of: String
  },
  type: String,
  dateCreated: {
    type: Date,
    default: Date.now
  },
  body: String,
  replies: [String],
  deleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Post', PostsSchema);
