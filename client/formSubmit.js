Template.formSubmitView.helpers({
	userForm() {
		return UserForms.findOne({_id: FlowRouter.getParam("_id")})
	}
})

Template.formSubmitView.onRendered(function(){
	AppSettings.update({_id: Meteor.user() && Meteor.user().getSettings()._id}, {$set: {showDiscoverDenton: true}})
	$("#svfs").submit();
})