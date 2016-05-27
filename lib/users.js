Meteor.users.helpers({
	getBackgroundImage: function(){
		var us = UserSettings.findOne({userId: this._id});
		var bId = us && us.backgroundImageId;
		if(bId && Images.findOne({_id: bId})) {
			return Images.findOne({_id: bId}).url();
		}
		return "/default.jpg";
	},
	getSettings: function(){
		return UserSettings.findOne({userId: this._id});
	},
	getFormName: function(){
		var form = SimpleViewForms.findOne({_id: this.getSettings().formId})
		if(form) {
			return form.name;
		}
	}
})

Meteor.users.after.insert(function (userId, doc) {
	UserSettings.insert({userId: doc._id});
})