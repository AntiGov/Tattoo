Template.mainLayout.events({
	"click [data-action='hide-simple-view']"() {
		UserSettings.update({_id: Meteor.user().getSettings()._id}, {$set: {showSimpleView: false}})
	}
})