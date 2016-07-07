Template.formSubmitView.helpers({
	userForm() {
		return UserForms.findOne({_id: FlowRouter.getParam("_id")})
	}
})
	
Template.formSubmitView.onRendered(function(){
	Meteor.setTimeout(function(){
		FlowRouter.go("welcomeToDenton")
	},3000);
})