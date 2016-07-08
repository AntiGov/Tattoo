Meteor.startup(function(){
	Meteor.setInterval(checkLastActivity, 500);
})

function checkLastActivity(){
	if(Meteor.user() && Meteor.user().getSettings()){
		let diff = (new Date().getTime() - UserStatus.lastActivity()) / 1000;
		if(diff >= Meteor.user().getSettings().timeoutTime){
			if(Meteor.user().getSettings().showCRM) {
				FlowRouter.go("welcomeToDenton");
				if(App.ref) {
					App.ref.close();
					App.ref = window.open('http://discoverdenton.com', '_blank', 'location=no,hidden=yes,toolbar=no');
				}
			}
		}
	}
}