Template.formSubmitView.helpers({
	userForm() {
		return UsersForms.find({_id: FlowRouter.getParam("_id")})
	}
})