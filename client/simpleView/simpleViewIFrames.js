Template.simpleViewIFrames.onCreated(function(){
	this.autorun(() => {
		this.subscribe("allUsers");
		this.subscribe("unsubmittedForms")
	})
})

Template.simpleViewIFrames.helpers({
	users() {
		return Meteor.users.find()
	},
	unsubmittedForms() {
		return UserForms.find()
	}
})