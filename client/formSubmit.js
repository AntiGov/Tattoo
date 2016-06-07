Template.formSubmitView.helpers({
	userForm() {
		return UserForms.findOne({_id: FlowRouter.getParam("_id")})
	}
})

Template.formSubmitView.onRendered(function(){
	$("#svfs").submit();
	FlowRouter.go("welcomeToDenton");
})