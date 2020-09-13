const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
	date: {
		type: Date,
		default: Date.now
	},
	email: {
		type: String,
		required :true
	},
	handle: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('User', UsersSchema);
