Template.signInView.onCreated(function(){
	if(Meteor.user()){
		FlowRouter.go("welcomeToDenton");
	}
})