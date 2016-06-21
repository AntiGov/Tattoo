Template.signInView.onCreated(function(){
	this.autorun(() => {
		if(Meteor.user()){
			FlowRouter.go("welcomeToDenton");
		}
	})
})
