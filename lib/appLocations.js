AppLocations = new Mongo.Collection('appLocations');

AppLocations.attachSchema({
	name: {
		type: String,
		label: "location name"
	},
	formId: {
		type: String,
		label: "Form Id"
	},
	welcomePhrase1: {
		type: String,
		label: "Welcome Phrase Line 1"
	},
	welcomePhrase2: {
		type: String,
		label: "Welcome Phrase Line 2"
	},
})

//{name: "mall", linkUrl: "/forms/index.cfm?action=form&formID=8"};
//{name: "welcomingCenter", linkUrl: "/forms/index.cfm?action=form&formID=7"};