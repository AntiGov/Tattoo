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

function startMonitor(){
	var timeoutT = (Meteor.user().getSettings().timeoutTime * 1000) || 2000;
	try {
		UserStatus.startMonitor({threshold : timeoutT, interval: 500});
	}
	catch (err) {
		Meteor.setTimeout(startMonitor(), 100)
	}
}
//svfs $("#svfs");