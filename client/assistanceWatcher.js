Template.assistanceWatcher.onCreated(function(){
	this.autorun(() => {
		this.subscribe("allUsers");
		this.subscribe("unsubmittedForms")
	})
})

Template.assistanceWatcher.helpers({
	users() {
		return Meteor.users.find()
	}
});

Template.assistanceWatcher.events({
	'click [data-action="clear-assistance"]'() {
		AppSettings.update({_id: this._id}, {$set: {isNeedingAssistance: false}});
	}
})