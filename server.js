const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');

const Users = require('./models/Users');

const isProd = process.env.NODE_ENV === 'production';

mongoose.promise = global.Promise;
const mongoURI = isProd ? process.env.MONGO_URI : 'mongodb://localhost/nexus';
mongoose.connect(mongoURI,{ useNewUrlParser:true, useUnifiedTopology:true });
mongoose.set('debug',true);
const db = mongoose.connection;
require('./config/passport');

const app = express();
const port = process.env.PORT || 4040;

app.use(require('./routes'));
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
if (isProd) {
	app.use(express.static('client/build'));
}
app.use(session({ secret:'passport-tutorial', cookie:{ maxAge:60000 }, resave:false, saveUninitialized:false }));
if (!isProd) {
	app.use(errorHandler);
	app.use((req,res,err) => {
		res.status(err.status || 500);
		res.json({
			errors: {
				message:err.message,
				error:err
			}
		});
	});
}
app.use((req,res,err) => {
	res.status(err.status || 500);
	res.json({
		errors: {
			message:err.message,
			error:{}
		}
	});
});

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


app.listen(port, () => console.log(`express listening on port ${port}`));
