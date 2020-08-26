const mongoose = require('mongoose');

const ChannelsSchema = new mongoose.Schema({
	date: {
		type: Date,
		default: Date.now
	},
	handle: {
		type: String,
		required: true
  },
  subscribers: {
    type:Map,
    default:{}
  }
});

module.exports = mongoose.model('Channel', ChannelsSchema);
