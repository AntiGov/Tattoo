AppSettings = new Mongo.Collection("userSettings");

AppSettings.helpers({
	appLocation() {
		return AppLocations.findOne({_id: this.appLocationId})
	}
})

AppSettings.attachSchema(new SimpleSchema({
	isLocating: {
		type: Boolean,
		label: "Is Locating",
		defaultValue: false
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
	},
	appLocationId: {
		type: String,
		label: "Form",
		autoform: {
			options(){
				var optionsArr = []
				AppLocations.find().forEach(function(appLocation){
					optionsArr.push({
						label: appLocation.name,
						_id: appLocation._id
					})
				}) // map all simple view forms
				return optionsArr;
			}
		}
	}
}))

