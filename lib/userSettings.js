UserSettings = new Mongo.Collection("userSettings");

UserSettings.attachSchema(new SimpleSchema({
	isLocating: {
		type: Boolean,
		label: "Is Locating",
		defaultValue: false
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
	showCRM: {
		type: Boolean,
		label: "Show CRM",
		defaultValue: true
	},
	timeoutTime: {
		type:Number,
		label: "Timeout Time in seconds",
		defaultValue: 600
	},
	userId: {
		type: String,
		label: "User Id"
	},
	showSimpleView: {
		type: Boolean,
		label: "Show Simple View",
		defaultValue: true
	},
	showDiscoverDenton: {
		type: Boolean,
		label: "Showing discover denton",
		defaultValue: false
	}
}))

