function checkLastActivity(){
	if(Meteor.user() && Meteor.user().status === "idle"){
		console.log(Meteor.user().status.lastActivity);
	}
}

Template.discoverDentonView.onCreated(function(){
	Meteor.setInterval(checkLastActivity, 3);
})

Template.discoverDentonView.onDestroyed(function(){
	Meteor.clearInterval(checkLastActivity);
})