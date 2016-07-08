Meteor.startup(function(){
	Meteor.setInterval(checkLastActivity, 500);
})

function checkLastActivity(){
	if(Meteor.user()){
		var diff = (new Date().getTime() - UserStatus.lastActivity()) / 1000;
		if(diff >= Meteor.user().getSettings().timeoutTime){
			if(Meteor.user().getSettings().showCRM) {
				FlowRouter.go("welcomeToDenton");
				if(App.ref) {
					App.ref.close();
				}
			}
		}
	}
}