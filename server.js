const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const Users = require('./models/Users');

const isProd = process.env.NODE_ENV === 'production';
const mongoURI = isProd ? process.env.MONGO_URI : 'mongodb://localhost/nexus';
mongoose.connect(mongoURI,{ useNewUrlParser:true, useUnifiedTopology:true });
const db = mongoose.connection;

const app = express();

if (isProd) {
	app.use(express.static('client/build'));
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/',require('./routes'));

const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`express listening on port ${port}`));


// app.get('/api', (req, res) => {
// 	res.json({"check":"EXPRESS /api PROXY SERVER CONNECTED"});
// });

// app.post('/api/users', (req, res) => {
// 	var user = req.body;
// 	Users.create(user, (err, user) => {
// 		if (err) {
// 			throw err;
// 		}
// 		res.json(user);
// 	});
// });

// app.get('/api/entries', (req, res) => {
// 	entries.find((err, entries) => {
// 		if (err) {
// 			throw err;
// 		}
// 		res.json(entries);
// 	});
// });

// app.put('/api/entries/:_id', (req, res) => {
// 	entries.findByIdAndUpdate(req.params._id, req.body, {new:true}, (err, entry) => {
// 		if (err) {
// 			throw err;
// 		}
// 		res.json(entry);
// 	});
// });

// app.delete('/api/entries/:_id', (req, res) => {
// 	entries.findByIdAndRemove(req.params._id, (err, result) => {
// 		if (err) {
// 			throw err;
// 		}
// 		res.json(result);
// 	});
// });
