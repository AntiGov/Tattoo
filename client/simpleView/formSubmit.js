Template.formSubmitView.helpers({
	userForm() {
		return UserForms.findOne({_id: FlowRouter.getParam("_id")})
	}
})
	
Template.formSubmitView.onRendered(function(){
	App.ref = cordova.InAppBrowser.open("http://www.discoverDenton.com", "_self", {toolbar: "no", location: "no", hidden: "yes", hardwareback: "yes", clearsessioncache: "yes", clearcache: "yes"});
	ref.addEventListener("loadStart", function() {
		UserStatus().pingMonitor();
	})
	Meteor.setTimeout(function(){
		ref.show();
		FlowRouter.go("welcomeToDenton");
	},3000);
})