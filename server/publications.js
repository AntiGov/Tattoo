Meteor.publish(null, function(){
	return Images.find({});
})

Meteor.publish(null, function(){
	if(!this.userId) {
		return this.ready();
	}
	return AppSettings.find({userId: this.userId});
})

Meteor.publish(null, function(){
	if(!this.userId){
		return this.ready();
	}
	return AppLocations.find({});
})
Meteor.publish(null, function(){
	if(!this.userId){
		return this.ready();
	}
	return AppStyles.find({})
})

Meteor.publish("unsubmittedForms", function(){
	return UserForms.find({hasSubmitted: false})
})

Meteor.publishComposite("allUsers", function(){
	if(!this.userId){
		return this.ready();
	}
	return {
		find() {
			return Meteor.users.find();
		},
		children: [{
			find(user) {
				return AppSettings.find({userId: user._id});
			},
			children: [{
				find(appSettings) {
					return AppLocations.find({_id: appSettings.appLocationId});
				}
			}]
		}]
	}
})
/*
Meteor.publish(null, function(){
	if(!this.userId){
		return this.ready();
	}
	var settings = Meteor.users.findOne({_id: this.userId}).getSettings();
	if(!settings) {
		return this.ready();
	}
	return AppLocations.find({_id: settings.appLocationId});
})

Meteor.publish(null, function(){
	if(!this.userId){
		return this.ready();
	}
	var settings = Meteor.users.findOne({_id: this.userId}).getSettings();
	if(!settings) {
		return this.ready();
	}
	return AppStyles.find({_id: settings.appStyleId});
})

Meteor.publish("allStyles", {

})

Meteor.publish()*/