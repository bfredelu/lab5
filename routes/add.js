var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	console.log(request.query.name);
	console.log(request.query.description);

	var newFriendTemp = new Object();
	newFriendTemp.name = request.query.name;
	newFriendTemp.description = request.query.description;
	newFriendTemp.imageURL = 'https://loremflickr.com/500/500/girl?lock=700';

	var newFriend = JSON.stringify(newFriendTemp);

	data.friends.push(JSON.parse(newFriend));

	response.render('index',data);
 }