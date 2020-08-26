const mongoose = require('mongoose');

const OneDaySchema = new mongoose.Schema({
	date: {
		type: Date,
		default: Date.now
	},
	handle: {
		type: String,
		required: true
	},
});

module.exports = mongoose.model('OneDay', OneDaySchema);
