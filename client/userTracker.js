Tracker.autorun(function(){
	if(Meteor.user() && (FlowRouter.current().route.name === "home" || FlowrRouter.current().route.name === "form")) {
		if(Meteor.user().getSettings().showCRM){
			FlowRouter.go("form");
		}
		else {
			FlowRouter.go("discoverDenton");
		}
	}
	//Meteor.setInterval(checkLastActivity, 3);
})

function checkLastActivity(){
	if(Meteor.user() && Meteor.user().status === "idle"){
		console.log(Meteor.user().status.lastActivity);
	}
}

/*Template.discoverDentonView.onCreated(function(){
	
})

Template.discoverDentonView.onDestroyed(function(){
	Meteor.clearInterval(checkLastActivity);
})*/