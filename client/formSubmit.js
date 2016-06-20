Template.formSubmitView.helpers({
	userForm() {
		return UserForms.findOne({_id: FlowRouter.getParam("_id")})
	}
})
	