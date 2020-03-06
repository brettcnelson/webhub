const mongoose = require('mongoose');

const FeedsSchema = new mongoose.Schema({
  name: String,
  channels: {
    type: Map,
    of: String
  }
});

module.exports = mongoose.model('Feed', FeedsSchema);
