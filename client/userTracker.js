Tracker.autorun(function(){
	if(Meteor.user() && FlowRouter.current() && FlowRouter.current().route) {
		if(FlowRouter.current().route.name === "home") {
			FlowRouter.go("welcomeToDenton");
		}
		if(FlowRouter.current().route.name === "form") {
			if(Meteor.user().getSettings() && !Meteor.user().getSettings().showCRM){
				var us = AppSettings.findOne({userId: Meteor.userId()});
				AppSettings.update({_id: us._id}, {$set: {showDiscoverDenton: true}});
			}
			else {
				//show discover dnton
			}
		}
	}
	//Meteor.setInterval(checkLastActivity, 3);
})

Meteor.startup(function(){
	Meteor.setInterval(checkLastActivity, 150000);
})

function checkLastActivity(){
	if(Meteor.user()){
		var us = AppSettings.findOne({userId: Meteor.userId()});
		AppSettings.update({_id: us._id}, {$set: {showDiscoverDenton: false}});
		FlowRouter.go("welcomeToDenton");
		if(Meteor.user() && Meteor.user().status === "idle"){
			console.log(Meteor.user().status.lastActivity);
			FlowRouter.go("welcomeToDenton");
		}
	}
}

/*Template.discoverDentonView.onCreated(function(){
	
})

Template.discoverDentonView.onDestroyed(function(){
	Meteor.clearInterval(checkLastActivity);
})*/