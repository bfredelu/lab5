var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	console.log(request.query.name);
	console.log(request.query.description);

	var newFriendName = request.query.name;
	var newFriendDescription = request.query.description;
	var newFriendURL = 'https://loremflickr.com/500/500/girl?lock=700';

	data.friends.push({
		"name": newFriendName,
		"description": newFriendDescription,
		"imageURL": newFriendURL
	});

	response.render('index',data);
 }