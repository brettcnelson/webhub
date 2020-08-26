const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
	date: {
		type: Date,
		default: Date.now
	},
	handle: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	profile: {
		type: Map,
		default: {}
	},
	oneDay: String,
	channels: {
		type:Map,
		default:{}
	},
	subscriptions: {
		type: Map,
		default: {
			oneDays:{},
			channels: {},
			users: {}
		}
	}
});

module.exports = mongoose.model('User', UsersSchema);
