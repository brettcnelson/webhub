const mongoose = require('mongoose');

const LinksSchema = new mongoose.Schema({
	date: {
		type: Date,
		default: Date.now
	},
	// uid: {
	// 	type: String,
	// 	required: true
  // },
	link: {
		type:String,
		required:true
	},
	pairs: {
		type:Map,
		default:{}
	},
	recs: {
		type: Map,
		default: {}
	},
	recPoints: {
		type:Number,
		default:0
	}
});

module.exports = mongoose.model('Link', LinksSchema);
