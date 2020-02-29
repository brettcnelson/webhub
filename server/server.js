const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
if (!isProd) {
	require('dotenv').config();
}

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI,{ useNewUrlParser:true, useUnifiedTopology:true },() => {
	console.log('mongoose connected');
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api',require('./api'));

app.use(express.static(path.join(__dirname,'client/build')));
app.get('/*', (req,res) => {
	res.sendFile(path.join(__dirname,'client/build','index.html'));
});

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
