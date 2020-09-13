const mongoose = require('mongoose');

const LoginsSchema = new mongoose.Schema({
	date: {
		type: Date,
    default: Date.now,
    index: { expires: '1m' }
	}
});

module.exports = mongoose.model('Login', LoginsSchema);
