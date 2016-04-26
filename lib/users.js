Meteor.users.helpers({
	getBackgroundImage: function(){
		var bId = UserSettings.findOne({userId: this._id}).backgroundImageId;
		if(bId) {
			return bId.url();
		}
		return "/default.jpg";
	},
	getSettings: function(){
		return UserSettings.findOne({userId: this._id});
	}
})

Meteor.users.after.insert(function (userId, doc) {
	UserSettings.insert({userId: doc._id});
})