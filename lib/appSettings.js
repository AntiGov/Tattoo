AppSettings = new Mongo.Collection("userSettings");

AppSettings.helpers({
	appLocation() {
		return AppLocations.findOne({_id: this.appLocationId})
	},
	userEmail() {
		var user = Meteor.users.findOne({_id: this.userId});
		if(user) {
			return user.emails[0].address;
		}
		else {
			return "";
		}

	},
	appLocationName() {
		return this.appLocation() && this.appLocation().name;
	},
	appStyle() {
		return AppStyles.findOne({_id: this.appStyleId})
	},
	appStyleName() {
		return this.appStyle() && this.appStyle().name;
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
		label: "User Id",
		/*autoValue() {
			if(this.isInsert){
				return this.userId;
			}
		}*/
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
	appStyleId: {
		type: String,
		label: "Style",
		autoform: {
			options(){
				var optionsArr = []
				AppStyles.find().forEach(function(appStyle){
					optionsArr.push({
						label: appStyle.name,
						value: appStyle._id
					})
				}) // map all simple view forms
				return optionsArr;
			}
		},
		optional: true
	},
	isNeedingAssistance: {
		type: Boolean,
		label: "Is needing assistance",
		defaultValue: false
	},
	appLocationId: {
		type: String,
		label: "Location",
		autoform: {
			options(){
				var optionsArr = []
				AppLocations.find().forEach(function(appLocation){
					optionsArr.push({
						label: appLocation.name,
						value: appLocation._id
					})
				}) // map all simple view forms
				return optionsArr;
			}
		},
		optional: true
	}
}))

