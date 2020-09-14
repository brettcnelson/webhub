const mongoose = require('mongoose');

const LoginsSchema = new mongoose.Schema({
	date: {
		type: Date,
    default: Date.now,
    expires: 180
	}
});

module.exports = mongoose.model('Login', LoginsSchema);
