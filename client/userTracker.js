Tracker.autorun(function(){
	if(Meteor.user() && FlowRouter.current() && FlowRouter.current().route) {
		if(FlowRouter.current().route.name === "home") {
			FlowRouter.go("welcomeToDenton");
		}
		if(FlowRouter.current().route.name === "form") {
			if(Meteor.user().getSettings() && !Meteor.user().getSettings().showCRM){
				var us = AppSettings.findOne({userId: Meteor.userId()});
				if(!us.showDiscoverDenton) {
					AppSettings.update({_id: us._id}, {$set: {showDiscoverDenton: true}});
				}
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
	if(Meteor.user()){
		var diff = (new Date().getTime() - UserStatus.lastActivity()) / 1000;
		//diff /= 60; seconds to minutes
		console.log(diff, Meteor.user().getSettings().timeoutTime)
		if(diff >= Meteor.user().getSettings().timeoutTime){
			//console.log("calling!")
			var us = AppSettings.findOne({userId: Meteor.userId()});
			//console.log(document.getElementById("discoverDentonIframe").src)
			if(document.getElementById("discoverDentonIframe").contentWindow.location.href !== "http://www.discoverdenton.com/") {
				//console.log("changing iframe source")
				document.getElementById("discoverDentonIframe").contentWindow.location.href = "http://discoverdenton.com/";
			}
			if(Meteor.user().getSettings().showCRM){
				if(us.showDiscoverDenton) {
					AppSettings.update({_id: us._id}, {$set: {showDiscoverDenton: false}});
				}
				FlowRouter.go("welcomeToDenton");
			}
		}
	}
}

/*Template.discoverDentonView.onCreated(function(){
	
})

Template.discoverDentonView.onDestroyed(function(){
	Meteor.clearInterval(checkLastActivity);
})*/