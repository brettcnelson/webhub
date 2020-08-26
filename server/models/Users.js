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
	subs: {
		type: Map,
		default: {}
	},
	alertSubs: {
		type: Map,
		default: {}
	},
	lastPostDate: {
		type:Date,
		default:null
	},
	recPoints: {
		type:Number,
		default:400
	},
	lastRecDate: {
		type:Date,
		default:null
	}
});

module.exports = mongoose.model('User', UsersSchema);
