Meteor.users.helpers({
	getBackgroundImage: function(){
		var bId = this.getSettings() && this.getSettings().location() && this.getSettings().location().backgroundImageId;
		if(bId && Images.findOne({_id: bId})) {
			return Images.findOne({_id: bId}).url();
		}
		return "/default.jpg";
	},
	getSettings: function(){
		return AppSettings.findOne({userId: this._id});
	},
	getLocationName: function(){
		return this.getSettings() && this.getSettings().location() && this.getSettings().location().name;
	}
})

Meteor.users.after.insert(function (userId, doc) {
	UserSettings.insert({userId: doc._id});
})