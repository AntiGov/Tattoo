Meteor.users.helpers({
	getBackgroundImage: function(){
		return UserSettings.findOne({});
	}
})

Meteor.users.after.insert(function (userId, doc) {
	UserSettings.insert({});
})