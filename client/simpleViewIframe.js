Template.simpleViewIframe.events({
	"click [data-action='hide-simple-view']"() {
		AppSettings.update({_id: Meteor.user().getSettings()._id}, {$set: {showSimpleView: false}})
	},
	"click [data-action='login-simple-view']"(){
		$("#svlf").submit();
	},
	"click [data-action='goto-form']"(){
		console.log("go to form")
		var location = Meteor.user().getSettings().appLocation();
		document.getElementById("simpleview-iframe").src = location.linkUrl;
	}
})