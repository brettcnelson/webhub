const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
  uid: String,
  date: {
    type: Date,
    default: Date.now
  },
  edited: {
    type: Date,
    default: null
  },
  body: String,
});

module.exports = mongoose.model('Post', PostsSchema);
