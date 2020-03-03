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
