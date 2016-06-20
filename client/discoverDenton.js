Template.discoverDenton.events({
	"load #discoverDentonIframe"() {
		if(UserStatus.isMonitoring()) {
			UserStatus.pingMonitor();
		}
		document.getElementById("discoverDentonIframe").contentWindow.onscroll = () => {
			if(UserStatus.isMonitoring()) {
				UserStatus.pingMonitor();
			}
		}
	},
	
})

Template.discoverDenton.onRendered(function(){

})

Template.discoverDenton.onCreated(function(){
	this.autorun(()=> {
		if(Meteor.user() && Meteor.user().getSettings() && !Meteor.user().getSettings().showCRM && Meteor.user().getSettings().showDiscoverDenton){
			var us = AppSettings.findOne({userId: Meteor.userId()});
			AppSettings.update({_id: us._id}, {$set: {showDiscoverDenton: true}});
		}
	})
})