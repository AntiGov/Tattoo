UserSettings = new Mongo.Collection("userSettings");

UserSettings.attachSchema(new SimpleSchema({
	isLocating: {
		type: Boolean,
		label: "Is Locating"
	},
	backgroundImageId: {
		type: String,
		autoform:{
        	afFieldInput: {
        		type: 'fileUpload',
        		collection: 'Images',
        		label: 'Choose file'
        	}
        }  
	},
	showCRM: {
		type: Boolean,
		label: "Show CRM"
	},
	timeoutTime: {
		type:Number,
		label: "Timeout Time in seconds"
	}
}))

