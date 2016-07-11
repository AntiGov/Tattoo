Template.mainLayout.onCreated(function() {
	this.autorun(() => {
		if(Meteor.user() && Meteor.user().getSettings()){
			if(!UserStatus.isMonitoring()){
				startMonitor();
			}
		}
		if(UserStatus.isIdle()){
			FlowRouter.go("welcomeToDenton");
		}
	});
})

Template.mainLayout.events({
	"hover iframe"() {
		console.log("click that iframe");
		console.log("click that iframe");
		console.log("click that iframe");
		UserStatus.pingMonitor();
	},
	'click [data-action="request-expert"]'() {
		var uid = Meteor.user().getSettings()._id;
		AppSettings.update({_id: uid}, {$set: {isNeedingAssistance: true}})
	}
})

function startMonitor(){
	var timeoutT = (Meteor.user().getSettings().timeoutTime * 1000) || 2000;
	try {
		UserStatus.startMonitor({threshold : timeoutT, interval: 500});
	}
	catch (err) {
		Meteor.setTimeout(startMonitor(), 500)
	}
}
//svfs $("#svfs");