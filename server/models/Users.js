const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
	date: {
		type: Date,
		default: Date.now
	},
	email: {
		type: String,
		required :true,
		unique: true
	},
	handle: {
		type: String,
		required: true,
		unique: true
	}
});

// UsersSchema.index({ email: 1 }, { unique: true });
// UsersSchema.index({ handle: 1 }, { unique: true });
module.exports = mongoose.model('User', UsersSchema);
