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
	welcomePhrase: {
		type: String,
		label: "Welcome Phrase"
	},
	backgroundImageId: {
		type: String,
		autoform:{
      	afFieldInput: {
	     		type: 'fileUpload',
	     		collection: 'Images',
	     		label: 'Choose file'
     	}
    },
    optional:true
	},
	fontColor: {
		type: String,
		defaultValue: "#000000",
		autoform: {
      type: "bootstrap-colorpicker"
    }
	},
	bgColor: {
		type:String,
		defaultValue: "#FFFFFF",
		autoform: {
      type: "bootstrap-colorpicker"
    }
	}
})

//{name: "mall", linkUrl: "/forms/index.cfm?action=form&formID=8"};
//{name: "welcomingCenter", linkUrl: "/forms/index.cfm?action=form&formID=7"};