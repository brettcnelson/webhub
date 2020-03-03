const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
	name: String,
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', UsersSchema);
