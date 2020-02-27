const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const UsersSchema = new mongoose.Schema({
	email: String,
	hash: String,
	salt: String,
});

UsersSchema.methods.setPassword = function(pw) {
	this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(pw, this.salt, 10000, 512, 'sha512').toString('hex');
}

UsersSchema.methods.validatePassword = function(pw) {
  const hash = crypto.pbkdf2Sync(pw, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UsersSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);
  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}

UsersSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  };
};

module.exports = mongoose.model('Users', UsersSchema);

// [Users]
// 	.id 
// 	userName
// 	[threads]
// 	[tags]
// 	[channels]
// 	[posts:id]
// 	[repliesToEditedPosts]
// 	[privateRepliesReceived]
// 	[bookmarks:id]
// 	[DMs]
// 		[allowed:ids]
// 		{invites}
// 		{conversations}
// 	{Profile}
// 		pic 
// 		link
// 		[Following]
// 			.id
// 			[channels]
// 			[tags]
// 		!showFollowing
// 		[followers:id]
// [Posts]
// 	.id
// 	.parentID
// 	timestamp
// 	!pendingEdit
// 	{feedback}
// 		!allow
// 		'allowFrom'	
// 	{replies}
// 		!allow
// 		'allowFrom'
// 	[replies:id]
// [DMS]
//  {Conversation}
// 	.id
// 	[users]
// 	[invites:UserID]

