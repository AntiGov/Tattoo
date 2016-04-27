Tracker.autorun(function(){
	if(Meteor.user() && FlowRouter.current() && FlowRouter.current().route.name === "home") {
		FlowRouter.go("welcomeToDenton");
	}
	if(Meteor.user() && FlowRouter.current() && FlowRouter.current().route.name === "form") {
		if(Meteor.user().getSettings().showCRM){
			FlowRouter.go("form");
		}
		else {
			FlowRouter.go("discoverDenton");
		}
	}
	if(Meteor.user()){
		Meteor.setInterval(checkLastActivity, 30000);
	}
	//Meteor.setInterval(checkLastActivity, 3);
})

function checkLastActivity(){
	console.log("woot")
	if(Meteor.user() && Meteor.user().status === "idle"){
		console.log(Meteor.user().status.lastActivity);
		FlowRouter.go("welcomeToDenton");
	}
}

/*Template.discoverDentonView.onCreated(function(){
	
})

Template.discoverDentonView.onDestroyed(function(){
	Meteor.clearInterval(checkLastActivity);
})*/