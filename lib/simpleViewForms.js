SimpleViewForms = new new Mongo.Collection('simpleViewForms');

SimpleViewForms.attachSchema({
	name: {
		type: String,
		label: "form name"
	},
	linkUrl: {
		type: String,
		label: "Link URL"
	}
})

//{name: "mall", linkUrl: "/forms/index.cfm?action=form&formID=8"};
//{name: "welcomingCenter", linkUrl: "/forms/index.cfm?action=form&formID=7"};