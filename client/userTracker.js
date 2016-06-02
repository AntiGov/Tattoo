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
	Meteor.setInterval(checkLastActivity, 500);
})

function checkLastActivity(){
	if(Meteor.user() && FlowRouter.getRouteName() !== "welcomeToDenton"){
		var diff = (new Date().getTime() - UserStatus.lastActivity()) / 1000;
		diff /= 60;
		if(diff >= Meteor.user().getSettings().timeoutTime){
			var us = AppSettings.findOne({userId: Meteor.userId()});
			 if(Meteor.user().getSettings().showCRM){
			 		AppSettings.update({_id: us._id}, {$set: {showDiscoverDenton: false}});
					FlowRouter.go("welcomeToDenton");
			 }
			 document.getElementById("discoverDentonIframe").src = "http://discoverDenton.com";
		}
	}
}

/*Template.discoverDentonView.onCreated(function(){
	
})

Template.discoverDentonView.onDestroyed(function(){
	Meteor.clearInterval(checkLastActivity);
})*/