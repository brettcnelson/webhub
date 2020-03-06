const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	profile: {
		type: Map,
		of: String
	},
	postChannels: {
		type: Map,
		of: String
	},
	feedChannels: {
		type: Map,
		of: String
	},
	feeds: {
		type: Map,
		of: String
	},
	alerts: {
		type: Map,
		of: String
	}
});

module.exports = mongoose.model('User', UsersSchema);
