const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
	email: String
});

module.exports = mongoose.model('User', UsersSchema);

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
//	'type(post/reply/chain)'
// 	userID
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

